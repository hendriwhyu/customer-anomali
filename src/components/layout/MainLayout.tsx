import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="">
        <Navbar />
        <main className="flex-grow">
            {/* Your main content goes here */}
            {children}
        </main>
        <Footer />
    </div>
  );
}

export default MainLayout;
