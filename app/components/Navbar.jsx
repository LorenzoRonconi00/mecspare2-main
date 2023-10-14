'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Container from './Container';
import Logo from './Logo';
import User from './User';

const Navbar = ({ currentUser }) => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 20,
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
    background: scrolling ? '#1A232E' : 'transparent', 
    transition: 'background 0.3s ease', 
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='fixed top-0 left-0 w-full p-[15px] z-4 transition'
      style={navbarStyle}
    >
      <div style={{ paddingTop: '1rem' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <Logo scrolling={scrolling}/>
            <User currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </motion.header>
  );
};

export default Navbar;
