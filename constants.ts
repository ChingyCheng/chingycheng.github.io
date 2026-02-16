import { Education, Publication, ResearchInterest, Experience, NewsItem } from './types';

export const PROFILE = {
  name: "Cheng (ChiEnn) Cheng",
  title: "Incoming PhD Student, IUB",
  tagline: "Infectious disease modelling • Computational epidemiology",
  // Affiliation removed from here as requested for Home page, moved to Experience
  affiliation: "", 
  email: "cheng.cheng@um.edu.my",
  location: "Indiana University Bloomington (IUB)",
  googleScholar: "scholar.google.com/citations?user=-_xoqYAAAAAJ&hl=en&authuser=2",
  github: "github.com/ChingyCheng",
  linkedin: "www.linkedin.com/in/cheng-chienn-cheng-865591261/",
  bio: `I am an incoming PhD student at Indiana University Bloomington (IUB). I work on infectious disease modelling and computational epidemiology, with an emphasis on combining mechanistic models with data-driven methods.`
};

export const EDUCATION: Education[] = [
  {
    degree: "PhD in Biostatistics",
    institution: "Indiana University Bloomington (IUB)",
    year: "Aug 2026 - Jun 2030 (expected)",
    details: []
  },
  {
    degree: "Master of Science (Mathematics)",
    institution: "University of Malaya",
    year: "Feb 2024 - Oct 2025",
    details: [
      "Research directions: Machine learning, Infectious disease modeling, Computational Epidemiology"
    ]
  },
  {
    degree: "Sc.B., Mathematics and Applied Mathematics",
    institution: "Yuncheng University",
    year: "2019 Sep - 2023 June",
    details: []
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Member",
    institution: "WHO Collaboratory - Laboratory for Pandemic and Epidemic Intelligence",
    year: "Present",
    description: "Contributing to global pandemic intelligence initiatives.",
    tags: ["Pandemic Intelligence", "Epidemiology"]
  },
  {
    role: "Research Assistant (Remote Internship)",
    institution: "Comp Epi DVRN",
    year: "Dec 2024 - Present",
    description: "Participating in the “Plan B” project, conducting research on soical media.",
    tags: ["Infectious Disease Modeling", "Deep Learning"]
  },
  {
    role: "Workshop Participant",
    institution: "Fudan University",
    year: "Dec 2023",
    description: "Infectious Disease Modeling Workshop. Enhanced understanding of infectious disease models and learned programming skills for model implementation.",
    tags: ["R", "COVID-19", "Modeling"]
  },
  {
    role: "Undergraduate Researcher",
    institution: "Yuncheng University",
    year: "May 2022 - May 2023",
    description: "Engaged in data collection, paper writing, and code implementation under Prof. Xiaomei Feng.",
    tags: ["Biomathematics", "Machine Learning", "Python", "COVID-19"]
  },
  {
    role: "Biomathematics Summer School Student",
    institution: "Tianyuan Mathematical Center in Northeast China",
    year: "July 2022 - Aug 2022",
    description: "Participated in summer school to improve understanding of biology and mathematics, attended lectures, and was recognized as an excellent student.",
    tags: ["Biomathematics", "Data Analysis", "R", "Python"]
  }
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: "Machine Learning",
    description: "",
    icon: "Cpu"
  },
  {
    title: "Infectious Disease Modeling",
    description: "",
    icon: "Activity"
  },
  {
    title: "Computational Epidemiology",
    description: "",
    icon: "BarChart2"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Dynamic analysis and optimal control of a fractional-order epidemic model with nucleic acid detection and individual protective awareness: A Malaysian case study",
    authors: "Rui Hu, Elayaraja Aruchunan, Muhamad Hifzhudin Noor Aziz, Cheng Cheng, Benchawan Wiwatanapataphee",
    journal: "AIMS Mathematics",
    year: 2025,
    abstract: "Caputo fractional-order COVID-19 model with nucleic acid testing and protective awareness; stability analysis, parameter estimation with Malaysian data, and optimal control with cost-effectiveness evaluation.",
    link: "https://www.aimspress.com/article/doi/10.3934/math.2025724",
    tags: ["Fractional-order model", "Optimal control", "COVID-19"]
  },
  {
    title: "Leveraging dynamics informed neural networks for predictive modeling of COVID-19 spread: A hybrid SEIRV-DNNs approach",
    authors: "Cheng Cheng, Elayaraja Aruchunan & Muhamad Hifzhudin Bin Noor Aziz",
    journal: "Scientific Reports",
    year: 2025,
    abstract: "Developed a DINNs model that integrates the SEIRV compartment model into deep learning frameworks. This approach enhances traditional epidemic models by incorporating data-driven techniques. Applied the DINNs model to real-world data, demonstrating its effectiveness in fitting multiple epidemic waves and predicting future trends.",
    link: "https://www.nature.com/articles/s41598-025-85440-1",
    tags: ["DNN", "SEIRV", "DINNs"]
  },
  {
    title: "Retrospective analysis of estimated serial interval and reproductive number of SARS-CoV-2 Omicron variant in Korea",
    authors: "Chunjuan Zhu, Cheng Cheng, Jia Guo, Xiaomei Feng & Qiwen Sun",
    journal: "Advances in Continuous and Discrete Models",
    year: 2025,
    abstract: "Demonstrated strong data analysis skills through statistical analysis of Omicron transmission potential, utilizing Python and R for data collection, cleaning, and analysis, and providing recommendations for control measures.",
    link: "https://advancesincontinuousanddiscretemodels.springeropen.com/articles/10.1186/s13662-025-03906-y",
    tags: ["Serial Interval", "R0"]
  },
  {
    title: "Prediction of World Temperature Based on PSO Optimized LSTM Neural Network",
    authors: "Cong Pang, Cheng Cheng, Zhejun Liu, Wenbin Huang, Yong Jiang, Tao Wu, Yuhong Li",
    journal: "ICIBA2023",
    year: 2023,
    abstract: "Proposed a model combining LSTM neural network with particle swarm optimization (PSO) to predict global average temperatures, outperforming traditional BP and LSTM models in accuracy.",
    link: "https://ieeexplore.ieee.org/document/10165253",
    tags: ["PSO", "LSTM", "Temperature Prediction"]
  }
];