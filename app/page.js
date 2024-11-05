
import Image from "next/image";
import styles from "./page.module.css";




export default function Home() {
  return (

    <div>
      <main className={styles.main}>
      <div className={styles.imagewrap}>
          <Image className={styles.myimg} src="/homeimg.jpg" alt="" width="237" height="158" />
        </div>
        <div className={styles.center}>
          <h1 className={styles.title}>&lt;HuntngCoder/&gt;</h1>
        </div><br />


        {/* <p className={styles.description}>
          A blog for a hunting coder by a hunting coder. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam, veniam, fugiat est quis id dicta quidem quod, tenetur enim corrupti minus. Vitae?
        </p><br /><br /> */}


        <div className="blogs">
          <h2 className={styles.h2}>Latest Blogs</h2><br />
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p className={styles.p}>Javascript is a language used to design logic for the web. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut porro quaerat.</p>
            <button className={styles.btn}>Read More</button>
          </div><br />
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p className={styles.p}>Javascript is a language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div><br />
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p className={styles.p}>Javascript is a language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>

      </main>
    </div>
  );
}
