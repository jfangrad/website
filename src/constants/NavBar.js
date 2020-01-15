import React from 'react';
import Github from "../assets/Github";
import Mail from '../assets/Mail';
import Linkedin from '../assets/Linkedin';

export const NavItems = [
  { text: 'About', value: 'about' },
  { text: 'Skills', value: 'skills' },
  { text: 'Experience', value: 'experience' },
  { text: 'Projects', value: 'projects' },
];

export const SocialLinks = [
  { icon: <Github />, link: 'https://github.com/jfangrad' },
  { icon: <Mail />, link: 'mailto:justin.fangrad@gmail.com'},
  { icon: <Linkedin />, link: 'https://www.linkedin.com/in/justin-fangrad-4a6185127/' },
];

export const ResumeDownloadLink = "https://drive.google.com/uc?export=download&id=1G9g92n3QdM69WVXMJfCKk0SIoVSLMabU";
