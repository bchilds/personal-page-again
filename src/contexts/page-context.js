import { createContext, useState, useMemo } from 'react';
import { HOME_PAGENAME } from '../pages/home';

const PageContext = createContext();
const PageContextProvider = ({ children }) => {
  const [currentPageName, setCurrentPageName] = useState(HOME_PAGENAME);

  const value = useMemo(
    () => ({
      currentPageName,
      setCurrentPageName,
    }),
    [currentPageName, setCurrentPageName]
  );
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export { PageContext, PageContextProvider };
