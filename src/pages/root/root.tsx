import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  const [state, setState] = useState(1);
  useEffect(() => {
    console.log('root');
  }, []);
  return (
    <div className="app-root">
      <Outlet />
    </div>
  );
};
export { Root };
