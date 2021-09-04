import { useContext, useEffect } from 'react';
import { PageContext } from '../../contexts/page-context';

import style from './style.module.scss';

export const HOME_PAGENAME = 'Home';

const Home = () => {
  const { setCurrentPageName } = useContext(PageContext);

  useEffect(() => {
    setCurrentPageName(HOME_PAGENAME);
  }, [setCurrentPageName]);

  return (
    <div className={style.banner_gradient}>
      <img
        className={style.banner}
        src='https://personal-github-page.s3.amazonaws.com/beach_me_mini.jpg'
        alt='Ben on a beach, smiling and looking out into the crashing waves'
      />
      {/* <div className={style.banner} /> */}
    </div>
  );
};

export default Home;
