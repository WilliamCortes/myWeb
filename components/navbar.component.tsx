import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

interface NavigationProps {
  currentPage?: string;
}

// const Navigation: React.FC<NavigationProps> = ({ currentPage = "/" }) => {
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Header>
      <Menu
        mode="horizontal"
        theme="dark"
        // selectedKeys={[currentPage]}
        className="flex"
      >
        <Menu.Item key="/">
          <Link href="/" legacyBehavior>
            <a>Inicio</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/martin">
          <Link href="/martin" legacyBehavior>
            <a>Martín</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/joaquin">
          <Link href="/joaquin" legacyBehavior>
            <a>Joaquín</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/yenni">
          <Link href="/yenni" legacyBehavior>
            <a>Yenni </a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navigation;
