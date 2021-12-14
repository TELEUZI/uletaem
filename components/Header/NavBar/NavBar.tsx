import React from 'react';
import BurgerButton from './BurgerButton';
import { Nav, NavLink, NavMenu, NavBtn, NavMenuItem } from './NavbarElements';

interface User {
  name: string | null;
  email: string | null;
  image: string | null;
}
interface NavBarProps {
  auth: { isAuth: boolean; user: Partial<User> | undefined };
  onSignIn: () => void;
  onSignOut: () => void;
}
const Navbar = ({
  onSignIn,
  onSignOut,
  auth: { isAuth, user },
}: NavBarProps) => {
  return (
    <>
      <BurgerButton />
      <Nav>
        <NavMenu>
          <NavMenuItem>
            <NavLink href="/arcticles">Статьи</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="/categories">Категории</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="/places">Места</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="/contacts">Контакты</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="/about">О нас</NavLink>
          </NavMenuItem>
        </NavMenu>
        {isAuth ? (
          <>
            {' '}
            <p>
              {user?.name} {user?.email}
            </p>
            <NavBtn onClick={onSignOut}>Выйти</NavBtn>
          </>
        ) : (
          <NavBtn onClick={onSignIn}>Войти / Регистрация</NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
