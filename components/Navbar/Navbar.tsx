import { useRouter } from 'next/router';
import React from 'react';
import { ActiveNavLink } from './ActiveNavLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

export const Navbar: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <nav className={styles.menu}>
      {menuItems.map(({ href, text }, i) => (
        <ActiveNavLink key={i} currentPath={asPath} href={href} text={text} />
      ))}
    </nav>
  );
};
