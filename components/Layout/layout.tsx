import React from 'react';
import NavState from '../../providers/NavStateProvider';
import Header from '../Header/header';
import Meta from './meta';

export default function Layout({ children }: any) {
  return (
    <NavState>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
    </NavState>
  );
}
