
import React, { useState, useMemo } from 'react';
import { publicationsData } from '../data';
import { Publication, PublicationType, CitationStyle } from '../types';
import { Section } from '../components/Section';
import { generateCitation } from '../utils/citationGenerators';

const CitationEntry: React.FC<{ pub: Publication; selectedStyle: CitationStyle }> = ({ pub, selectedStyle }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const citationText = useMemo(() => generateCitation(pub, selectedStyle), [pub, selectedStyle]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error(`Failed to copy ${selectedStyle} citation: `, err);
      alert(`Failed to copy ${selectedStyle} citation.`);
    }
  };

  return (
    <div className="bg-dark-secondary p-5 rounded-lg shadow-lg mb-4 border-l-4 border-neon-blue">
      <p className="text-sm font-semibold text-neon-blue mb-1">{pub.title}</p>
      <p className="text-xs text-light-secondary mb-2 italic">{pub.authors} ({pub.year})</p>
      <div className="p-3 bg-dark-primary rounded text-sm text-light-secondary/90 whitespace-pre-line break-words mb-3" aria-label={`${selectedStyle} Citation Text`}>
        {citationText}
      </div>
      <button
        onClick={handleCopy}
        className="px-4 py-1.5 text-xs bg-neon-pink text-dark-primary rounded hover:bg-opacity-80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-pink focus-visible:ring-offset-2 focus-visible:ring-offset-dark-secondary"
        aria-label={`Copy ${selectedStyle} citation for ${pub.title}`}
      >
        <i className="fas fa-copy mr-1.5"></i> Copy {selectedStyle}
      </button>
      {copySuccess && <span role="status" aria-live="polite" className="ml-3 text-xs text-neon-green animate-pulseGlow [--tw-shadow-color:theme('colors.neon-green')]">Copied!</span>}
    </div>
  );
};

export const CitationsPage: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<CitationStyle>('APA');
  const citationStyles: CitationStyle[] = ['APA', 'Chicago', 'Harvard', 'Vancouver', 'MLA'];
  const publicationTypesOrder = Object.values(PublicationType);

  const sortedPublicationsByType = useMemo(() => {
    const grouped: { [key in PublicationType]?: Publication[] } = {};
    publicationsData.forEach(pub => {
      if (!grouped[pub.type]) {
        grouped[pub.type] = [];
      }
      grouped[pub.type]!.push(pub);
    });

    for (const type in grouped) {
      grouped[type as PublicationType]!.sort((a, b) => {
        const yearA = parseInt(a.year.toString().match(/^\d{4}/)?.[0] || '0');
        const yearB = parseInt(b.year.toString().match(/^\d{4}/)?.[0] || '0');
        return yearB - yearA; // Sort by year descending
      });
    }
    return grouped;
  }, []);

  return (
    <div className="animate-fadeIn">
      <Section title="Publication Citations" subtitle="Generate citations for my work in various academic styles. Select a style below to update all entries.">
        
        <div className="mb-8 p-4 bg-dark-secondary/50 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-3 sticky top-20 z-40 backdrop-blur-sm shadow-md">
          <span className="text-light-primary font-medium mb-2 sm:mb-0 sm:mr-3">Select Citation Style:</span>
          <div className="flex flex-wrap justify-center gap-2">
            {citationStyles.map(style => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 transform hover:scale-105
                  ${selectedStyle === style 
                    ? 'bg-neon-blue text-dark-primary shadow-neon-glow-blue focus-visible:ring-neon-blue' 
                    : 'bg-dark-tertiary text-light-secondary hover:bg-neon-pink hover:text-dark-primary focus-visible:ring-neon-pink'}
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-secondary/50`}
                aria-pressed={selectedStyle === style}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {publicationTypesOrder.map(pubType => {
          const publicationsOfType = sortedPublicationsByType[pubType];
          if (!publicationsOfType || publicationsOfType.length === 0) return null;

          return (
            <div key={pubType} className="mb-10">
              <h3 className="text-2xl font-semibold text-neon-pink mb-5 pb-2 border-b-2 border-neon-pink/30 flex items-center">
                 <i className="fas fa-bookmark mr-3 opacity-80"></i>{pubType}
              </h3>
              <div className="space-y-4">
                {publicationsOfType.map(pub => (
                  <CitationEntry key={pub.id} pub={pub} selectedStyle={selectedStyle} />
                ))}
              </div>
            </div>
          );
        })}
      </Section>
    </div>
  );
};
