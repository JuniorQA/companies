import React from 'react';
import { Outlet } from 'react-router';

export default function Layout(): JSX.Element {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
}
