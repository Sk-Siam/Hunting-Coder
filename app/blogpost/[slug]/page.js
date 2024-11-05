
import styles from "../../../styles/BlogPost.module.css";
import * as fs from 'fs'
export default async function slug({ params }) {
  function createMarkup(c) {
    return { __html: c };
  }
  let fileData = await fs.promises.readFile(`blogdata/${params.slug}.json`, 'utf-8')
  let myBlog = JSON.parse(fileData)

  return (<div className={styles.container}>
    <main className={styles.main}>
      <h1>{myBlog && myBlog.title}</h1>
      <hr /><br /><br />
      {myBlog && <div dangerouslySetInnerHTML={createMarkup(myBlog.content)} className={styles.content}></div>}

    </main>
  </div>
  )
}

