import React from 'react';
import Header from './header';
import Meta from './meta';

export default function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
