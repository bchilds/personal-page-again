import { useContext, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'; // https://www.npmjs.com/package/react-material-ui-carousel
import { PageContext } from '../../contexts/page-context';

import style from './style.module.scss';

const ABOUT_PAGENAME = 'About';
const carouselItems = [
  'https://personal-github-page.s3.amazonaws.com/wifo1.jpg',
  'https://personal-github-page.s3.amazonaws.com/doggo1.jpg',
];
const About = () => {
  const { setCurrentPageName } = useContext(PageContext);

  useEffect(() => {
    setCurrentPageName(ABOUT_PAGENAME);
  }, [setCurrentPageName]);

  return (
    <div>
      <section>
        <h1>Who I Am</h1>
        <p>
          Hello! I'm a friendly human who generally enjoys good people, good
          brews, and good code. I consider myself a fullstack developer, but I
          particularly enjoy React and frontend design.
        </p>
      </section>
      <section>
        <h1>My People</h1>
        <Carousel>
          {carouselItems.map((src, i) => (
            <img className={style['carousel-item']} key={i} src={src} />
          ))}
        </Carousel>
      </section>
      <section>
        <h1>My Hobbies</h1>
        <div></div>
      </section>
    </div>
  );
};

export default About;
