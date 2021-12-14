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
  console.log(data);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });
  if (status === 'loading') {
    return <p>Loading...</p>;
  }
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
// {
/* <nav class="navbar">
  <h1>
    <a href="./index.html" class="brand">
      Brand
    </a>
  </h1>
  <button type="button" class="burger" id="burger">
    <span class="burger-line"></span>
    <span class="burger-line"></span>
    <span class="burger-line"></span>
  </button>
  <span class="overlay" id="overlay"></span>
  <div class="menu" id="menu">
    <ul class="menu-block">
      <li class="menu-item">
        <a class="menu-link" href="#">
          Home
        </a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="#">
          Profile
        </a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="#">
          Service
        </a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="#">
          Project
        </a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="#">
          Article
        </a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="#">
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>; */
// }
