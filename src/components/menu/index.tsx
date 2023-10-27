import { FC } from 'react';

import { MenuDiv } from './style';
import { Menu } from '@arco-design/web-react';
import MENU from '../../common/localData';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const MenuCmpt:FC = () => {

  return (
    <MenuDiv>
      <Menu
        style={{width:200,height:'100%'}}
        hasCollapseButton
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_0']}
      >
        {
          MENU.map((item) => (
            <SubMenu
              key={item.key}
              title={item.title}
            >
              {item.child && item.child.map((itemx) => (
                <MenuItem key={itemx.key}>
                  <Link to={itemx.path}>
                    {itemx.title}
                  </Link>
                </MenuItem>
              ))}
            </SubMenu>
          ))
        }
      </Menu>
    </MenuDiv>
  )
}

export default MenuCmpt;