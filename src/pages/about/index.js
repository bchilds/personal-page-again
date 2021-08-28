import { useContext, useEffect } from 'react';
import { PageContext } from '../../contexts/page-context';

const ABOUT_PAGENAME = 'About';

const About = () => {
  const { setCurrentPageName } = useContext(PageContext);

  useEffect(() => {
    setCurrentPageName(ABOUT_PAGENAME);
  }, [setCurrentPageName]);

  return <div>About Me Here</div>;
};

export default About;
