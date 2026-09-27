import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * The docs index, set like a rundown in the interface spec (C2): a plain
 * bordered panel of numbered rows, the number and section in mono, the row
 * itself neutral. Hover is a change of light, never a displacement.
 */
export function DocIndex({children}) {
  return <ol className={styles.index}>{children}</ol>;
}

export function DocIndexRow({n, title, to, section, children}) {
  return (
    <li>
      <Link to={to} className={styles.row}>
        <span className={styles.n}>{n}</span>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.desc}>{children}</div>
        </div>
        <span className={styles.section}>{section}</span>
      </Link>
    </li>
  );
}
