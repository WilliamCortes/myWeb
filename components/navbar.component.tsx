import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage = "/" }) => {
  return (
    <Header>
      <Menu
        mode="horizontal"
        theme="dark"
        selectedKeys={[currentPage]}
        className="flex"
      >
        <Menu.Item key="/">
          <Link href="/" legacyBehavior>
            <a>Inicio</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link href="/" legacyBehavior>
            <a>Acerca de</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link href="/" legacyBehavior>
            <a>Contacto</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navigation;
