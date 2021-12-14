import React from 'react';
import { DEFAULT_AVATAR_PATH } from '../../../lib/constants';
import BurgerButton from './BurgerButton';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavMenuItem,
  UserIcon,
  UserName,
  UserContainer,
  AuthContainer,
} from './NavbarElements';

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
  console.log(user);
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
          <AuthContainer>
            <UserContainer>
              <UserIcon image={user?.image || DEFAULT_AVATAR_PATH} />
              <UserName>{user?.name}</UserName>
            </UserContainer>
            <NavBtn onClick={onSignOut}>Выйти</NavBtn>
          </AuthContainer>
        ) : (
          <NavBtn onClick={onSignIn}>Войти / Регистрация</NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
