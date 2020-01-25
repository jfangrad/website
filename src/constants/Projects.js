import ShareBibles from '../assets/ShareBibles.png';
import BringMeBack from '../assets/bringmeback.png';
import Dropdown from '../assets/dropdown.svg';
import Blinds from '../assets/blinds.jpg';

export const ProjectItems = [
  {
    img: Dropdown,
    title: 'React Dropdown Aria',
    link: 'https://jfangrad.github.io/react-dropdown-aria/',
    tools: 'TypeScript | React',
    description: [
      'Simple, lightweight, and accessible React dropdown component.',
      'What started out as an experiment to see how building npm packages works turned into a bit of a hobby project.',
    ],
  },
  {
    img: ShareBibles,
    imgStyle: { maxWidth: '10vh', margin: '0 1vh' },
    title: 'Share Bibles',
    link: 'https://www.sharebibles.com/',
    tools: 'React Native (Android & IOS)',
    description: [
      'App is used by missionaries (often in remote locations) to track the distribution of Bibles and resources by dropping pins on a map to show where Bibles have been distributed, how many, and of what type.',
      'Worked alongside another developer from FaithTech to build the app along with the backend and additional services',
    ],
  },
  {
    img: BringMeBack,
    title: 'Bring Me Back',
    link: 'https://play.google.com/store/apps/details?id=com.justintime.bringmeback',
    tools: 'Java (Android) | SQLite',
    description: [
      'Built from the ground up in under 3 weeks as a proof of concept of a simple idea that I wanted to explore and use to learn Android better.',
      'App helps the user navigate back to places they have previously been by providing a compass like navigation system.',
    ],
  },
  {
    img: Blinds,
    imgStyle: { borderRadius: '50%' },
    title: 'Blind Opening Alarm Clock',
    link: 'https://www.instructables.com/id/Blind-Opening-Alarm-Clock/',
    tools: 'C++ | Spark Core microcontroller',
    description: [
      'Designed and developed a system to automatically open roller blinds at a specified time using a Spark Core microcontroller and controlled wirelessly through an Android app.',
      'Viewed by over 31 thousand people and won 2nd prize in Instructables automation contest.',
    ],
  },
]
