import {
  Main_Menu,
  MenuTitle,
  SepLine,
  DropMainMenu,
  UseFullLinks,
  UseFullLinkIcon,
} from "./mainMenu.style";
import { Link } from "react-router-dom";
import SubMenu from "./subMenu/SubMenu";
import { menuItems, usefulLinks } from "../../../../constants/index";

const MainMenu = () => {
  return (
    <>
      <Main_Menu>
        <MenuTitle>
          <Link>
            <h6>دسته بندی کالاها</h6>
          </Link>
        </MenuTitle>
        <SepLine />
        <DropMainMenu>
          <ul>
            {menuItems.category.map((menuItem) => (
              <SubMenu
                id={menuItem.id}
                key={menuItem.id}
                title={menuItem.title}
                icon={menuItem.icon}
                sub={menuItem.sub}
              />
            ))}
          </ul>
        </DropMainMenu>
      </Main_Menu>
      {usefulLinks.map((link) => (
        <UseFullLinks key={link.id}>
          <UseFullLinkIcon>{link.icon}</UseFullLinkIcon>
          <Link>{link.title}</Link>
        </UseFullLinks>
      ))}
    </>
  );
}

export default MainMenu