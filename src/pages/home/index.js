import { useContext, useEffect } from 'react';
import { PageContext } from '../../contexts/page-context';

export const HOME_PAGENAME = 'Home';

const Home = () => {
  const { setCurrentPageName } = useContext(PageContext);

  useEffect(() => {
    setCurrentPageName(HOME_PAGENAME);
  }, [setCurrentPageName]);

  return <div>{HOME_PAGENAME} Content</div>;
};

export default Home;
