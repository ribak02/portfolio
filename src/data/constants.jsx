import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';

export const tech_stack_path = '/images/tech-stacks/';

export const tech_stack = [
  'amazon_aws-ar21.svg',
  'figma-ar21.svg',
  'Git-Logo-2Color.svg',
  'linux-ar21.svg',
  'mongodb-ar21.svg',
  'nodejsStackedDark.svg',
  'postgresql-ar21.svg',
  'reactjs-ar21.svg',
  'tensorflow-ar21.svg',
  'WebGL-Logo.wine.svg',
  'tailwindcss-ar21.svg',
  'nextjs-ar21.svg',
];

export const aboutText = `Hi, I'm Kabir a recent graduate from the University of St.
Andrews with a BSc in Computer Science. In my studies, I
developed a deep interest in the utility and ethics of AI, along
with the transformative potential of blockchain technology,
particularly in decentralized systems and digital identity.`;

export const projectsData = [
  {
    title: 'Muzart: A Blockchain-Based Digital Museuem Platform',
    description: `Developed a blockchain-based platform integrating with 3D recreated artifacts, enabling museum artifacts to betokenized.
                  Created and deployed custom ERC1155 tokens on the Ethereum Sepolia Testnet, using Hardhat for testing.`,
    dates: 'Sep 2023 - Mar 2024',
    tags: ['Solidity', 'NextJS', 'HardHat', 'Ethereum'],
    image: '/images/project-covers/muzart.jpg',
    links: [
      {
        type: 'Source',
        href: 'https://github.com/ribak02/muzart',
        icon: <GitHubLogoIcon className='size-3' />,
      },
    ],
  },
  {
    title: 'ML Model Evaluation: Faulty Water Pumps Prediction',
    description: `Predicts which water pumps are faulty to promote access to clean, potable water across Tanzania. Evaluated multiple machine learning models on the dataset, achieving a 15% accuracy improvement through hyperparameter optimization. Developed a custom preprocessing pipeline to enhance data processing efficiency by 20% and improve model performance. Applied advanced hyperparameter tuning techniques to RandomForest, Logistic Regression, and Gradient Boosting models, resulting in up to a 10% improvement in generalization accuracy.`,
    dates: 'Sep 2023 - Mar 2024',
    tags: [
      'Machine Learning',
      'Hyperparam Optimization',
      'Data Preprocessing',
      'Python',
      'Scikit-Learn',
      'Optuna',
    ],
    image: '/images/project-covers/ml-model.webp',
    links: [
      {
        type: 'Source',
        href: 'https://github.com/ribak02/ML-Model-Evaluations',
        icon: <GitHubLogoIcon className='size-3' />,
      },
    ],
  },
  {
    title: 'AI Fuel Efficiency Comparator Tool',
    description: `Developed a web app, while working for Publicis Sapient, for personalized car fuel comparisons for a large global automative manufacturor. Integrated a generative AI advisor and worked in an cross-functional agile team.`,
    dates: 'Jun 2023 - Sep 2023',
    tags: ['React', 'FullStack', 'AI', 'Agile'],
    image: '/images/project-covers/fuelefficiency.webp',
    links: [],
  },
  {
    title: 'Migration Scotland - Large Census Manipulation ',
    description: `Analyzed Scottish migration census data with Python and pandas, refining 100,000+ entries for accuracy. Developed interactive visualizations, including 3D plots, enhancing data clarity for 20+ key metrics. Optimized data processing, reducing execution time by 25% through efficient validation techniques.`,
    dates: 'Sep 2021 - Dec 2021',
    tags: ['Python', 'Pandas', 'MatplotLib', 'Data Manipulation'],
    image: '/images/project-covers/migration-scotland.webp',
    links: [
      {
        type: 'Source',
        href: 'https://github.com/magicuidesign/magicui',
        icon: <GitHubLogoIcon className='size-3' />,
      },
    ],
  },
  {
    title: 'Federation Sudoku App',
    description: `Created a full-stack web application enabling puzzle-solving for 500+ users across 10 federated platforms. Integrated OAuth2 for federated puzzle access, improving user authentication security.`,
    dates: 'Sep 2022 - May 2023',
    tags: ['VueJs', 'OAuth', 'Scrum', 'Agile'],
    image: '/images/project-covers/sudoku.PNG',
  },
  {
    title: 'Secure Reddit',
    description: `Designed a secure forum using Node.js, React, and MariaDB, supporting 500+ users for encrypted discussions. Implemented RSA public-private key encryption, AES 256 for group encryption, and JWT for stateless authentication,securing all communications.`,
    dates: 'Sep 2023 - Jun 2024',
    tags: ['NodeJs', 'Encryption', 'Security'],
    image: '/images/project-covers/secure-reddit.jpg',
    links: [
      {
        type: 'Source',
        href: 'https://github.com/magicuidesign/magicui',
        icon: <GitHubLogoIcon className='size-3' />,
      },
    ],
  },
  {
    title: 'University of St. Andrews Blockchain Society Website',
    description: `Blockchain society official website, showcasing events, resources, and membership information. Developed with React, TailwindCSS. Led a team of 5+ to develop a React web app`,
    dates: 'Sep 2023 - Mar 2024',
    tags: ['React', 'Team Lead', 'Agile'],
    image: '/images/project-covers/ustablockchain.PNG',
    links: [
      {
        type: 'Website',
        href: 'https://ustablockchain.com/',
        icon: <GlobeIcon className='size-3' />,
      },
    ],
  },
];
