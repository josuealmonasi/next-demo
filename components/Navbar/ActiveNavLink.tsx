import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

interface ActiveNavLinkProps {
  currentPath: string;
  href: string;
  text: string;
}

export const ActiveNavLink: React.FC<ActiveNavLinkProps> = ({
  href,
  currentPath,
  text,
}) => {
  return (
    <Link href={href}>
      <a className={currentPath === href ? styles.active : ''}>{text}</a>
    </Link>
  );
};
