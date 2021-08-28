import { useLocation, withRouter } from 'react-router-dom';
import { pagesList } from '../pages/list';

const useCurrentPageName = function() {
  const location = useLocation();
  const first = pagesList[0];
  const router = withRouter();

  console.info({ location, first, router })

};

export default useCurrentPageName;