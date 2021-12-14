import Link from 'next/link';
// import { slide as Menu } from 'react-burger-menu';
import { useRef, useContext } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './header.module.scss';
import Navbar from './NavBar/NavBar';
import SideMenu from '../SideMenu/SideMenu';
import MenuContext from '../../contexts/nav-context';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function Header() {
  const node = useRef<HTMLElement>(null);
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  const { data, status } = useSession();
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });
  return (
    <header ref={node} className={styles.header}>
      <h1 className="sr-only">Улетаем</h1>
      <div className="logo-wrapper">
        <div className="logo" />
        <h2 className="text-6xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8 website-name">
          <Link href="/">
            <a className="hover:underline">Uletaem</a>
          </Link>
        </h2>
      </div>
      <Navbar
        auth={{ isAuth: status === 'authenticated', user: data?.user }}
        onSignIn={() => signIn()}
        onSignOut={() => signOut()}
      />
      <SideMenu />
    </header>
  );
}
