import React from 'react'
import styles from "../app/page.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
    <ul>
      <Link href="/"><li className={styles.li} >Home</li></Link>
      <Link href="/about"><li className={styles.li}>About</li></Link>
      <Link href="/blog"><li className={styles.li}>Blog</li></Link>
      <Link href="/contact"><li className={styles.li}>Contact</li></Link>
    </ul>
  </nav>
  )
}

export default Navbar