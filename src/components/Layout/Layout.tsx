import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout_container'>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className='main_content_container'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
