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
    degree: "Master of Science (Mathematics and Statistics)",
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
    description: "Participating in the “Plan B” project, conducting research on social media.",
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
    title: "Mathematical Biology",
    description: "",
    icon: "Dna"
  },
  {
    title: "Infectious Disease Modeling",
    description: "",
    icon: "HeartPulse"
  },
  {
    title: "Computational Epidemiology",
    description: "",
    icon: "ChartNetwork"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "The dynamics of hepatitis B transmission with treatment and vaccination: A case study in the Ili Region of Xinjiang, China, by a physics-informed neural networks approach",
    authors: "Xiaomei Feng, Yuan Chen, Cheng Cheng, Lei Wang",
    journal: "Mathematical Biosciences",
    year: 2026,
    abstract: "Hepatitis B virus (HBV) infection remains a leading cause of cirrhosis and hepatocellular carcinoma worldwide, and long-term control relies on sustained immunization and effective reduction of transmission. In high-burden settings, vaccination programs have expanded substantially, but there still exist differences in the immune response effect after vaccination and the phenomenon of post-vaccination immunity decline. In this paper, we propose a model incorporating the vaccination of newborns and susceptible and imperfect vaccination, and study how the two factors affect the transmission dynamics of hepatitis B. In term of the dynamical theory, we derive the basic reproduction number R0, discuss local stability of the disease-free equilibrium when R0 < 1, characterize the existence of multi endemic equilibria when R0 < 1 and the possibility of backward bifurcation, and prove the local and global stability of the unique endemic equilibrium under some conditions. In term of data fitting, according to the annual reported cases from 2008 to 2021 in Ili Kazak Autonomous Prefecture, Xinjiang, China, R0 is estimated to be approximately 2.14 by Markov Chain Monte Carlo (MCMC) method. Moreover, in view of the significant advantages of Physics-Informed Neural Networks (PINNs) in handling sparse data and in the universal approximation capability, the model coupled with a physics-informed neural network could be applied to infer time-varying transmission, the vaccination rate and the effective reproduction number Re(t). By comparing the goodness of fit of these two methods, it is found that PINNs has a better agreement in matching with the data than MCMC. In addition, from numerical simulations we found that even though the number of new reported cases is decreasing, the number of carriers is increasing. Therefore, it confirms that the detection of occult infections among carriers and antiviral treatment are of great importance in the prevention and control of hepatitis B. Finally, we propose that based on the current situation, carrying out a one-year booster vaccination campaign among susceptible populations could further reduce the number of new infections by up to 13% in the short term.",
    link: "https://doi.org/10.1016/j.mbs.2026.109712",
    tags: ["Hepatitis B", "PINNs", "Vaccination"]
  },
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
