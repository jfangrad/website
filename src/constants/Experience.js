export const Experiences = [
  {
    companyName: 'Sobol',
    companyLink: 'https://sobol.io/',
    title: 'Full Stack Developer',
    date: 'May 2019 - Aug 2019',
    description: [
      'End to end full feature development utilizing JavaScript, React, Redux, Express, MongoDb, and Neo4J.',
      'Focused on building systems to allow custom fields and UI within the application to allow for a more powerful and dynamic user experience'
    ],
  },
  {
    companyName: 'Shopify',
    companyLink: 'https://www.shopify.ca/',
    title: 'Front End Developer',
    date: 'Sep 2018 - Dec 2018',
    description: [
      'Worked as a part of the Shopify App Store team and used tools including TypeScript, React, and GraphQL.',
      'Focused on a complete rebuild of a complex form for submitting apps to the Shopify app store. This included leading research, prototyping, design, and build phases.'
    ],
  },
  {
    companyName: 'Vidyard',
    companyLink: 'https://www.vidyard.com/',
    title: 'Software Developer',
    date: 'Jan 2018 - Apr 2018',
    description: [
      'Worked on the Vidyard GoVideo chrome extension and embedded web application used for recording, sharing, and managing videos.',
      'Focused on a full application UX/UI redesign and application structure using JavaScript React, and Redux'
    ],
  },
];

const BlankExperience = {
  companyName: '',
  companyLink: '',
  title: '',
  date: '',
  description: [],
}

export const GroupedExperiences = [];
let index = 0;
for (const item of Experiences) {
  if (!GroupedExperiences[index]) {
    GroupedExperiences[index] = [item];
  } else {
    GroupedExperiences[index].push(item);
    index += 1;
  }
}

// Ensure each group has 2 items
if (GroupedExperiences[GroupedExperiences.length - 1].length === 1) {
  GroupedExperiences[GroupedExperiences.length - 1].push(BlankExperience);
}
