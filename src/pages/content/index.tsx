import {FC} from 'react';
import { useRoutes } from 'react-router';
import { Link } from 'react-router-dom';

import router from '../../router';
import { ContentPageDiv } from './style';
import MenuCmpt from '../../components/menu';
import Bread from '../../components/bread';

const ContentPage:FC = () => {

  return (
    <ContentPageDiv>
      <div className="top">
        <h2>order-platform</h2>
        <div className="top-left">
          <Link to={'/'}> 首页 </Link>
          <Link to={'/hello'}> hello </Link>
        </div>
      </div>

      <div className="bottom">
        <MenuCmpt />
        <div className="bottom-right">
          <Bread />
          { useRoutes(router) }
        </div>
      </div> 

    </ContentPageDiv>
  )
}

export default ContentPage;