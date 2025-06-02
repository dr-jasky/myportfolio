
import { PersonalInfo, Publication, Experience, EducationItem, Certification, SkillCategory, ContactLink, NavLink, PublicationType, ConsultancyService, Testimonial } from './types';

export const personalInfoData: PersonalInfo = {
  name: "Dr. Jaskirat Singh, Postdoc & Ph.D.",
  title: "Researcher, Educator, Innovator",
  subtitle: "(Former Postdoctoral Fellow, ICSSR, Ministry of Education, India)",
  tagline: "Driving Socio-Economic Impact through Research, Technology, and Collaborative Innovation.",
  consultancyOfferSummary: "Offering pro-bono consultancy for NGOs and tailored research support for academics and organizations. Let's collaborate to make a difference.",
  email: "jasky786@gmail.com",
  linkedIn: "https://www.linkedin.com/in/jasky786/", 
  googleScholar: "https://scholar.google.com/citations?user=d8Kd4ywAAAAJ&hl=en",
  orcid: "https://orcid.org/0000-0003-0337-7885",
  profileImageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFtCAgc4PbKGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684786723981?e=1753920000&v=beta&t=Ec4F_16-ETRI7L_W_TAAR4ShnDFHRANcjz-dSeJE6Bw",
  professionalSummary: "Highly accomplished and results-oriented researcher, educator, and published author with over 10 years of experience specializing in finance, technology, and socio-economic development. Proven ability to secure prestigious fellowships (ICSSR Postdoctoral, UGC JRF/SRF) and lead impactful research projects from conception to publication in high-ranking Q1/Q2 Scopus and ABDC journals. Expertise spans quantitative (SPSS, R, SEM AMOS, STATA) and qualitative methodologies, grant acquisition, data analysis, and policy-relevant insight generation. Demonstrated success in postgraduate/doctoral teaching, curriculum design, thesis supervision, and peer review. Possesses exceptional administrative, project management, and cross-cultural communication skills, committed to driving international collaboration and positive social change. Passionate about leveraging research for practical solutions, especially for non-profit organizations and community development.",
  ssrnProfileUrl: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=7349141", 
  researchGate: "https://www.researchgate.net/profile/Jaskirat-Singh-26?ev=hdr_xprf",
  academiaUrl: "https://icssr.academia.edu/JaskiratSingh", // Added Academia.edu URL
  cvUrl: "/cv-html", 
  keyStats: [
    { id: "ks1", label: "Years of Experience", value: 10, suffix: "+", icon: "fas fa-briefcase" },
    { id: "ks2", label: "Peer-Reviewed Publications", value: 15, suffix: "+", icon: "fas fa-book-open" },
    { id: "ks3", label: "Prestigious Fellowships", value: 2, icon: "fas fa-award" },
    { id: "ks4", label: "Research Impact", value: "Q1/Q2", icon: "fas fa-chart-line" },
    { id: "ks5", label: "Peer Reviews (Q1/Q2 Journals)", value: 20, suffix: "+", icon: "fas fa-file-signature" }
  ]
};

export const publicationsData: Publication[] = [
  { 
    id: "prja1", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Addressing unproductive credit consumption and beneficiary malpractices in social welfare programs for slum-dwellers: A study from India.", 
    source: "Cities", 
    year: 2024, 
    details: "145, 104729. [IF: 6.7]", 
    doiLink: "https://doi.org/10.1016/j.cities.2023.104729",
    insightSnippet: "Examines how unproductive loan usage and malpractices hinder welfare program effectiveness in urban slums, offering policy recommendations.",
    featuredImageUrl: "https://picsum.photos/seed/cities2024/400/250",
    tags: ["Urban Poverty", "Social Welfare", "Policy", "India"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q1", icon: "fas fa-star" }, { name: "Impact Factor", value: "6.7" }]
  },
  { 
    id: "prja2", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Alleviating urban poverty in India: The role of capabilities and entrepreneurship development.", 
    source: "International Journal of Social Economics", 
    year: 2024, 
    details: "51(10), 1314-1335. [IF: 1.9]", 
    doiLink: "https://doi.org/10.1108/IJSE-07-2023-0514",
    tags: ["Urban Poverty", "Capability Approach", "Entrepreneurship"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q2" }, { name: "ABDC", value: "B" }]
  },
  { 
    id: "prja3", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Accelerating Financial Inclusion of the Urban Poor: Role of Innovative e-Payment Systems and JAM Trinity in Alleviating Poverty in India.", 
    source: "Global Business Review", 
    year: 2024, 
    details: "09721509231222609 (Online First). [IF: 2.4]", 
    doiLink: "https://doi.org/10.1177/09721509231222609",
    insightSnippet: "Investigates the impact of e-payment systems and the JAM Trinity on financial inclusion and poverty among India's urban poor.",
    featuredImageUrl: "https://picsum.photos/seed/gbr2024/400/250",
    tags: ["Financial Inclusion", "Fintech", "E-Payments", "Poverty Alleviation"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q1" }, { name: "ABDC", value: "C" }]
  },
  { 
    id: "prja5", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Fintech applications in social welfare schemes during Covid times: An extension of the classic TAM model in India.", 
    source: "International Social Science Journal", 
    year: 2023, 
    details: "73(250), 979–998.", 
    doiLink: "https://doi.org/10.1111/issj.12406", 
    insightSnippet: "Explores the adoption of Fintech in social welfare during the COVID-19 pandemic using an extended Technology Acceptance Model (TAM).",
    featuredImageUrl: "https://picsum.photos/seed/issj2023/400/250",
    tags: ["Fintech", "Social Welfare", "COVID-19", "TAM Model"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q3" }, { name: "ABDC", value: "B" }]
  },
  { 
    id: "prja4", 
    type: PublicationType.Journal, 
    authors: "Singh, V., & Singh, J.", 
    title: "Quantifying the relationship between e-advertising capabilities and marketing mix cost savings.", 
    source: "International Journal of Applied Management Science", 
    year: 2024, 
    details: "16(1), 44-67.", 
    doiLink: "https://doi.org/10.1504/IJAMS.2024.136369",
    tags: ["E-Advertising", "Marketing", "Cost Savings"]
  },
  { 
    id: "prja6", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Singh, M.", 
    title: "Does financial inclusion impact socio-economic stability? A study of social safety net in Indian slums.", 
    source: "International Journal of Social Economics", 
    year: 2023, 
    details: "50(8), 1060-1084.", 
    doiLink: "https://doi.org/10.1108/IJSE-04-2022-0261",
    tags: ["Financial Inclusion", "Socio-Economic Stability", "Urban Slums"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q2" }, { name: "ABDC", value: "B" }]
  },
  { 
    id: "prja7", 
    type: PublicationType.Journal, 
    authors: "Singh, J., Sharma, D., & Batra, G. S.", 
    title: "Does Credit Utilization Pattern Promote Poverty Alleviation? An Evidence from India.", 
    source: "Global Business Review", 
    year: 2023, 
    details: "24(6), 1227-1250.", 
    doiLink: "https://doi.org/10.1177/0972150920918967",
    tags: ["Credit Utilization", "Poverty Alleviation", "India"],
    impactMetrics: [{ name: "Scopus Quartile", value: "Q1" }, { name: "ABDC", value: "C" }]
  },
  { 
    id: "prja8", 
    type: PublicationType.Journal, 
    authors: "Singh, J., Batra, G. S., Sharma, D., & Singh, V.", 
    title: "Microcredit Usage Pattern and its Impact on Economic Activities of the Urban Deprived: A Study of Punjab State, India.", 
    source: "South Asian Journal of Management", 
    year: 2021, 
    details: "28(1), 128.", 
    link: "https://www.researchgate.net/publication/350089657_Microcredit_usage_pattern_and_its_impact_on_economic_activities_of_the_urban_deprived_A_study_of_Punjab_State_India",
    tags: ["Microcredit", "Urban Poor", "Economic Impact"],
    impactMetrics: [{ name: "ABDC", value: "C" }]
  },
  { 
    id: "prja9", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Sharma, D.", 
    title: "Credit Expansion Programmes for Urban Poor: A Literature Review and Conceptual Framework.", 
    source: "International Journal of Advanced in Management, Technology and Engineering Sciences", 
    year: 2018,
    details: "Volume/Issue not specified in list.",
    tags: ["Credit Expansion", "Urban Poor", "Literature Review"]
  },
  { 
    id: "prja10", 
    type: PublicationType.Journal, 
    authors: "Singh, J., & Sharma, D.", 
    title: "Credit Expansion Programmes for Urban Poor: An Empirical Study.", 
    source: "Journal of Communication Engineering & Systems", 
    year: 2018, 
    details: "8(2), 51-56.",
    tags: ["Credit Expansion", "Urban Poor", "Empirical Study"]
  },
  { 
    id: "bc1", 
    type: PublicationType.BookChapter, 
    authors: "Singh, J., & Sharma, D.", 
    title: "Contemporary Challenges of Management Education in India: Review and Assessment.", 
    source: "Chapter 9 in Interdisciplinary Approaches in Management Education.", 
    year: 2024, 
    details: "Apple Academic Press (CRC Press/Taylor & Francis Group). [ISBN: 9781774916469]",
    tags: ["Management Education", "India", "Challenges"]
  },
  { 
    id: "bc2", 
    type: PublicationType.BookChapter, 
    authors: "Singh, J.", 
    title: "Integrating Microcredit, Fintech, and Social Safety Nets for Holistic Financial Inclusion: Empirical Insights from Urban Slums in India.", 
    source: "In (Book Title TBD). River Publishers.", 
    year: "2025 Expected", 
    status: "Targeting Q1-Scopus, In Press",
    tags: ["Microcredit", "Fintech", "Financial Inclusion", "Social Safety Nets"]
  },
  { 
    id: "bc3", 
    type: PublicationType.BookChapter, 
    authors: "Singh, J.", 
    title: "Blockchain for Urban Welfare in the Global South: A Capability-Driven Framework for Digital Inclusion and Sustainable Impact.", 
    source: "In (Book Title TBD). Wiley.", 
    year: "2025 Expected", 
    status: "Targeting Q1-Scopus, In Press",
    tags: ["Blockchain", "Urban Welfare", "Digital Inclusion", "Global South"]
  },
  { 
    id: "cp1", 
    type: PublicationType.Conference, 
    authors: "Singh, J.", 
    title: "Self-Help Groups (SHGs): A Tool for Developing Economies' Socio-Economic Development.", 
    source: "International Social Marketing Conference", 
    year: 2025, 
    details: "Poster Accepted. Presentation: 13-15 May 2025, QT Canberra, Australia.",
    tags: ["Self-Help Groups", "Socio-Economic Development", "Conference"]
  },
   { 
    id: "wip1", 
    type: PublicationType.InProgress, 
    authors: "Singh, J.", 
    title: "Blockchain's Role in Social Welfare, Financial Inclusion, and Public Sector Innovations in India: A Multi-Sector Analysis of Government-Led Initiatives.", 
    source: "Targeting: Cities.", 
    year: "Communicated 2024", 
    status: "[Targeting Q1-Scopus, ID: JCIT-D-24-04279, Review Completed]",
    link: "https://ssrn.com/abstract=5105250",
    tags: ["Blockchain", "Social Welfare", "Financial Inclusion", "Public Sector Innovation"]
  },
  { 
    id: "wip2", 
    type: PublicationType.InProgress, 
    authors: "Singh, J.", 
    title: "Harnessing Fintech for Poverty Alleviation: Enhancing Credit Utilization and Livelihoods in Urban Slums of North-western India through the Capability Approach and Sustainable Livelihoods Framework.", 
    source: "Targeting: Technological Forecasting & Social Change.", 
    year: "Communicated 2024", 
    status: "[Targeting Q1-Scopus/ABDC-A, ID: TFS-D-24-08167, Revision 1 Submitted]",
    link: "https://ssrn.com/abstract=5207210", 
    tags: ["Fintech", "Poverty Alleviation", "Capability Approach", "Sustainable Livelihoods"]
  },
  { 
    id: "wip3", 
    type: PublicationType.InProgress, 
    authors: "Singh, J.", 
    title: "Empowering India's Informal Workers Through AI and Blockchain: An ICT4D Framework for Skills, Trust, and Inclusive Growth.", 
    source: "Targeting: Information Technology for Development.", 
    year: "Communicated 2024", 
    status: "[Targeting Q1-Scopus/ABDC-A, ID: 246945216, Under Review]",
    tags: ["AI", "Blockchain", "Informal Workers", "ICT4D", "Inclusive Growth"]
  },
   { 
    id: "wip4", 
    type: PublicationType.InProgress, 
    authors: "Singh, J.", 
    title: "Digital Capabilities for Urban Poverty Alleviation: Integrating E-Payment Awareness and Credit Utilization Patterns in Indian Slums.", 
    source: "Targeting: World Development.", 
    year: "Communicated 2025", 
    status: "[Targeting Q1-Scopus/ABDC-A, ID: WD-34919, With Editor]",
    tags: ["Digital Capabilities", "Urban Poverty", "E-Payments", "Credit Utilization"]
  },
  { 
    id: "wip5", 
    type: PublicationType.InProgress, 
    authors: "Singh, J.", 
    title: "The Capability Crisis: Rethinking Digital Financial Inclusion.", 
    source: "Targeting: Harvard Business Review / HBS Publishing.", 
    year: "Proposed Case Study 2024", 
    status: "[Targeting Scopus/ABDC]",
    tags: ["Digital Financial Inclusion", "Capability Approach", "Case Study"]
  },
  { 
    id: "wip6", 
    type: PublicationType.InProgress, 
    authors: "Singh, V. & Singh, J.", 
    title: "The Contested Nexus: Gendered Techno-Ecological Incorporation and the Reconfiguration of Power in Rural India's Self-Help Groups.", 
    source: "Targeting: Feminist Economics.", 
    year: "Communicated 2025", 
    status: "[Targeting Q1-Scopus/ABDC-A, ID: RFEC-25-Apr-103, Under Review]",
    tags: ["Gender", "Technology", "Self-Help Groups", "Feminist Economics"]
  },
  {
    id: "bp1",
    type: PublicationType.BookProposal,
    authors: "Editors: Dr. Gurdip Singh Batra; Dr. Sarvjeet Kaur Chatrath; Dr. Jaskirat Singh",
    title: "Digital Marketing Strategies in the Global Economies",
    source: "Publisher/Status: Under consideration (targeting Q1/A publication globally)",
    year: "2025*",
    details: "Examines digital marketing’s impacts on international business, consumer behavior, policy, and societal well-being amid global digital disruption.",
    tags: ["Digital Marketing", "Global Economies", "Consumer Behavior", "Book Proposal"]
  },
  {
    id: "bp2",
    type: PublicationType.BookProposal,
    authors: "Editors: Dr. Sarvjeet Kaur Chatrath; Dr. Gurdip Singh Batra; Dr. Naomi Dale; Dr. Jaskirat Singh",
    title: "Navigating Consumer Behaviour and Environmental Sustainability: A Study Towards Developing a Green Business Model",
    source: "Publisher/Status: Under consideration (Springer Nature, Routledge, SAGE, or Wiley)",
    year: "2025*",
    details: "Explores sustainable consumer behaviour and green business model innovation through an interdisciplinary lens.",
    tags: ["Consumer Behavior", "Environmental Sustainability", "Green Business", "Book Proposal"]
  },
  {
    id: "abs1",
    type: PublicationType.InProgress, 
    authors: "Dr. Gurdip Singh Batra; Dr. Sarvjeet Kaur Chatrath; Dr. Jaskirat Singh",
    title: "Reimagining Sikh Philanthropy (Dasvandh) through Fintech Innovations",
    source: "Status: Communicated. Guru Nanak Institute of Global Studies (GNI), Surrey, Canada",
    year: "Communicated", 
    details: "Investigates integrating fintech (QR codes, mobile payments) into gurdwara donation processes to enhance transparency and trust, addressing opportunities and challenges (digital literacy, data privacy).",
    tags: ["Sikh Philanthropy", "Dasvandh", "Fintech", "Abstract"]
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp1",
    role: "Postdoctoral Fellow",
    organization: "Indian Council of Social Science Research (ICSSR), Ministry of Education",
    location: "New Delhi, India",
    period: "Jan 2022 – Jan 2024",
    descriptionPoints: [
      "Led pioneering government-funded research on \"Innovative E-Payment Portal Systems in Social Welfare Schemes,\" analyzing digital financial inclusion pathways for urban poor households in India.",
      "Authored and published multiple high-impact articles in Q1/Q2 Scopus-indexed journals, contributing significantly to academic discourse and policy considerations.",
      "Mentored junior researchers, providing expert guidance on thesis design, advanced literature review techniques, complex data analysis, and effective academic writing.",
      "Conceptualized and organized national-level webinars and conferences to disseminate research findings to diverse stakeholders, including academics, policymakers, and community leaders."
    ]
  },
   {
    id: "exp2",
    role: "Assistant Professor",
    organization: "Guru Harkrishan Girls College, Phallewal Khurd, Sangrur, Punjab, India",
    location: "Sangrur, Punjab, India",
    period: "Aug 2018 – Dec 2021",
    descriptionPoints: [
      "Delivered engaging postgraduate courses in Finance, Marketing, Economics, and Organizational Development, employing innovative teaching methods to achieve a consistent 100% student pass rate.",
      "Successfully supervised numerous postgraduate theses, guiding students from initial proposal development through to final defense.",
      "Secured research grants through competitive proposal writing and effectively facilitated student-led research projects.",
      "Developed and delivered training modules on grant writing and research methodologies for students."
    ]
  },
  {
    id: "exp3",
    role: "Junior/Senior Research Fellow (JRF/SRF)",
    organization: "School of Management Studies, Punjabi University",
    location: "Patiala, India",
    period: "Jul 2013 – Jul 2018",
    descriptionPoints: [
      "Conducted extensive interdisciplinary Ph.D. research on \"Credit Expansion Programmes for the Urban Poor,\" employing rigorous quantitative and qualitative methods.",
      "Analyzed large-scale datasets using SPSS, R, and advanced statistical techniques (e.g., SEM) to derive meaningful insights.",
      "Taught various post-graduate courses including Management, Finance, Marketing, Economics, and Organizational Development.",
      "Published significant research findings in peer-reviewed academic journals.",
      "Actively contributed to grant proposal preparation and provided essential project management support for departmental research initiatives."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu1",
    degree: "Postdoctoral Research",
    specialization: "Management",
    institution: "Indian Council of Social Science Research (ICSSR), Ministry of Education",
    location: "New Delhi, India",
    period: "2022 – 2024",
    thesisOrDissertation: "Thesis: \"Innovative E-Payment Portal Systems in Social Welfare Schemes: An Empirical Study of Urban Poor Households in India\" [F.No. 3-36/2021-22/PDF/GEN]",
    achievement: "Awarded prestigious ICSSR Postdoctoral Fellowship (Top 100 out of 3000+ applicants nationwide). Only candidate in Punjab who got selected for this fellowship in Management (General Category) in 2022."
  },
  {
    id: "edu2",
    degree: "Ph.D. in Business Management",
    institution: "School of Management Studies, Punjabi University",
    location: "Patiala, India",
    period: "2013 – 2019",
    thesisOrDissertation: "Dissertation: \"Credit Expansion Programmes for the Urban Poor: An Empirical Study of Punjab and Chandigarh\"",
    achievement: "Awarded competitive Junior Research Fellowship (JRF) / Senior Research Fellowship (SRF) by UGC.",
    verification: "Degree verified by WES Canada. Canadian Equivalency: Earned doctorate. [WES Ref#: 4430345IMM]"
  },
  {
    id: "edu3",
    degree: "MBA in Global Business",
    specialization: "Finance/Marketing",
    institution: "School of Management Studies, Punjabi University",
    location: "Patiala, India",
    period: "2010 – 2012",
    achievement: "Ranked #1 Program Topper; Awarded merit-based scholarship.",
    verification: "Degree verified by WES Canada. Canadian Equivalency: Postgraduate diploma (one year). [WES Ref#: 4430345IMM]"
  },
  {
    id: "edu4",
    degree: "Bachelor of Commerce (B. Com)",
    institution: "Govt. Bikram College of Commerce, Punjabi University",
    location: "Patiala, India",
    period: "2007 – 2010",
    verification: "Degree verified by WES Canada. Canadian Equivalency: Bachelor's degree (four years). [WES Ref#: 4430345IMM]"
  }
];

export const certificationsData: Certification[] = [
  { id: "cert1", name: "Canadian Securities Course (CSC)", institution: "Canadian Securities Institute", year: 2023, link: "https://www.csi.ca/en/learning/courses/csc/" },
  { id: "cert2", name: "Data Science: Foundations using R Specialization (5 Courses)", institution: "Johns Hopkins University (Coursera)", year: 2020, link: "https://www.coursera.org/account/accomplishments/specialization/certificate/QGEG89EL2K3K" },
  { id: "cert3", name: "Google I.T. Support Professional Certificate (5 Courses)", institution: "Google (Coursera)", year: 2020, link: "https://www.coursera.org/account/accomplishments/professional-cert/JTXU7RQPVWTH" },
  { id: "cert4", name: "Fundamentals of Digital Marketing", institution: "Google Digital Unlocked", year: 2020, link: "https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code" },
  { id: "cert5", name: "Understanding Research Methods", institution: "University of London (Coursera)", year: 2020, link: "https://www.coursera.org/account/accomplishments/verify/8MK67MSKBV72" },
  { id: "cert6", name: "Learning Excel: Data Analysis", institution: "LinkedIn Learning", year: 2020, link: "https://www.linkedin.com/learning/learning-excel-data-analysis-3" },
  { id: "cert7", name: "SPSS Statistics Essential Training", institution: "LinkedIn Learning", year: 2020, link: "https://www.linkedin.com/learning/spss-statistics-essential-training-2" },
  { id: "cert8", name: "SPSS Masterclass: Learn SPSS From Scratch to Advanced", institution: "Udemy", year: 2022, link: "https://www.udemy.com/certificate/UC-96488809-7094-4fd7-bf7c-f8754a62873b/" }
];

export const skillCategoriesData: SkillCategory[] = [
   {
    id: "skillcat_res_quant",
    name: "Research & Quantitative Analysis",
    skills: ["Quantitative", "Mixed-Methods", "Econometrics (Basic)", "Impact Evaluation", "SPSS", "R", "STATA (Basic)", "SEM AMOS", "Advanced Excel", "Data Interpretation", "Visualization"],
    icon: "fas fa-chart-pie"
  },
  {
    id: "skillcat_qual_acad",
    name: "Qualitative Research & Academic Output",
    skills: ["Qualitative Research Design", "Systematic Reviews", "Bibliometrics", "High-Impact Journal Publication (Q1/Q2 Scopus, ABDC)", "Peer Review (Journals)", "Thesis Assessment (PG/Ph.D.)"],
    icon: "fas fa-feather-alt"
  },
  {
    id: "skillcat_teach_mentor",
    name: "Teaching, Mentoring & Supervision",
    skills: ["Postgraduate & Ph.D. Level Teaching", "Curriculum Design", "Student Mentoring & Guidance", "Postgraduate & Ph.D. Thesis Supervision"],
    icon: "fas fa-chalkboard-teacher"
  },
  {
    id: "skillcat_proj_fund",
    name: "Project Management & Funding",
    skills: ["Grant Writing", "Proposal Development & Acquisition", "Project Coordination", "Reporting", "Risk Management", "Stakeholder Management", "Event Organization"],
    icon: "fas fa-project-diagram"
  },
  {
    id: "skillcat_domain_exp",
    name: "Domain Expertise",
    skills: ["Financial Inclusion", "Microfinance", "E-Payments", "Blockchain (Conceptual)", "AI (Conceptual)", "Socio-Economic Development", "Poverty Alleviation", "Capability Approach", "Gender Studies", "Urban Poor/Slums"],
    icon: "fas fa-microchip"
  },
  {
    id: "skillcat_tech_comm",
    name: "Technical & Communication Skills",
    skills: ["MS Office Suite", "Google IT Support Suite (Fundamentals)", "Digital Marketing (Fundamentals)", "Effective Presentation", "Cross-Cultural Collaboration"],
    icon: "fas fa-satellite-dish"
  }
];

export const consultancyServicesData: ConsultancyService[] = [
  { 
    id: "consult1", 
    title: "Pro-Bono for NGOs", 
    description: "Offering free consultancy to non-profit organizations on research design, impact assessment, technology adoption, and grant proposal development to amplify their social impact.", 
    targetAudience: "Non-Profit Organizations, Social Enterprises", 
    iconClass: "fas fa-hand-holding-heart" 
  },
  { 
    id: "consult2", 
    title: "Research Collaboration", 
    description: "Seeking collaborations with academic institutions and researchers on projects related to fintech, financial inclusion, socio-economic development, and sustainable finance.", 
    targetAudience: "Academic Researchers, Universities", 
    iconClass: "fas fa-atom" 
  },
  { 
    id: "consult3", 
    title: "Data Analysis & Interpretation", 
    description: "Providing guidance and support for quantitative and qualitative data analysis, interpretation of results, and data visualization for research projects and reports.", 
    targetAudience: "Students, Researchers, Small Businesses", 
    iconClass: "fas fa-search-dollar" 
  },
  {
    id: "consult4",
    title: "Fintech & Digital Strategy",
    description: "Advising on the strategic implementation of financial technologies, digital transformation, and innovative solutions for businesses and developmental organizations.",
    targetAudience: "Startups, SMEs, Development Agencies",
    iconClass: "fas fa-lightbulb"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test_batra",
    quote: "As Jaskirat's Ph.D. supervisor and Head of Department, I witnessed firsthand his exceptional research capabilities and unwavering dedication. He consistently produced high-quality work, demonstrating a sharp analytical mind and a profound commitment to innovative inquiry in business management. Jaskirat is a truly promising scholar with the potential to make significant contributions to his field.",
    author: "Dr. Gurdip Singh Batra",
    authorTitle: "Former Ph.D. Supervisor & Head of Department, School of Management Studies, Punjabi University",
    avatarUrl: "https://picsum.photos/seed/gurdip_batra/100/100" 
  },
  {
    id: "test3",
    quote: "Dr. Jaskirat Singh demonstrated exceptional dedication, hard-work and consistently delivered high quality results and always willing to go above and beyond to ensure projects were completed on time and to the highest standard. He is excellent multi-tasker, very good in time management and passionate individual who would be an asset to the team or any organization.",
    author: "Dr. Kamal Warraich, MBA, Ph.D.",
    authorTitle: "Program Manager | Professor | Realtor",
    avatarUrl: "https://picsum.photos/seed/kamal_warraich/100/100" 
  },
  {
    id: "test4",
    quote: "I wholeheartedly recommend Dr. Jaskirat Singh for the professional opportunity. Jaskirat is a valuable asset because of his leadership abilities and in-depth understanding of business management courses. His research experience is demonstrated by his co-authoring articles with leading publishers, including Sage, Emerald, and Wiley. Jaskirat's work on social welfare programmes, financial inclusion, and fintech applications exemplifies his in-depth knowledge of complex topics and capacity to contribute significantly to the area. His articles' calibre and significance speak much about his commitment to scientific excellence.",
    author: "Shashi Kashav",
    authorTitle: "Assistant Professor @ Indian Institute of Management, Sirmaur",
    avatarUrl: "https://picsum.photos/seed/shashi_kashav/100/100"
  },
  {
    id: "test5",
    quote: "Ridiculously efficient is the phrase that comes to my mind when I think about Jaskirat. I had the pleasure of working with him for three years as a research assistant and throughout our association I have always seen him working hard. A meritorious researcher with never giving up attitude towards everything. It’s rare that you come across standout talent like Jaskirat. I was always impressed with his ability to handle the toughest jobs so effortlessly. No matter how tense the situations were at work he made sure everyone left with a smile. He would definitely be an asset for any team.",
    author: "Atashi Bedi",
    authorTitle: "Business Analyst | Researcher | Instructor",
    avatarUrl: "https://picsum.photos/seed/atashi_bedi/100/100"
  }
];

export const contactLinksData: ContactLink[] = [
  { id: "cl1", name: "Email", url: `mailto:${personalInfoData.email}`, iconClass: "fas fa-envelope" },
  { id: "cl2", name: "LinkedIn", url: personalInfoData.linkedIn, iconClass: "fab fa-linkedin" },
  { id: "cl3", name: "Google Scholar", url: personalInfoData.googleScholar, iconClass: "fas fa-graduation-cap" }, 
  { id: "cl4", name: "ORCID", url: personalInfoData.orcid, iconClass: "fab fa-orcid" },
  { id: "cl5", name: "SSRN", url: personalInfoData.ssrnProfileUrl || "#", iconClass: "fas fa-file-alt" },
  { id: "cl6", name: "ResearchGate", url: personalInfoData.researchGate || "#", iconClass: "fab fa-researchgate" },
  { id: "cl7", name: "Academia.edu", url: personalInfoData.academiaUrl || "#", iconClass: "fas fa-scroll" } 
];

export const navLinksData: NavLink[] = [
  { id: "nav1", name: "Home", path: "/" },
  { id: "nav2", name: "About", path: "/about" },
  { id: "nav3", name: "Research", path: "/research" },
  { id: "nav4", name: "Experience", path: "/experience" },
  { id: "nav5", name: "Skills", path: "/skills" },
  { id: "nav6", name: "HTML CV", path: personalInfoData.cvUrl! }, 
  { id: "nav7", name: "Consultancy", path: "/consultancy"}, 
  { id: "nav8", name: "Contact", path: "/contact" },
  { id: "nav9", name: "Citations", path: "/citations" }, // Added Citations link
];
