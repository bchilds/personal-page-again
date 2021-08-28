import { Link } from 'react-router-dom';

const pages = {
  home: {
    path: '/',
    title: 'Home',
    route: <Link to='/'>Home</Link>,
    match: '/',
  },
  about: {
    path: '/about',
    title: 'About Me',
    route: <Link to='/about:slug'>About Me</Link>,
    match: '/about:slug',
  },
};

export default pages;

export const pagesList = [pages.home, pages.about];
