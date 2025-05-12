"use client"
import { useState, useEffect } from 'react';
import styles from "../../styles/Blog.module.css";
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(2);
  const [allcount, setallCount] = useState();

useEffect(() => {
  const fetchData = async () => {
    
        const response = await fetch(`http://localhost:3000/api/?count=${count}`);
        const allCount = await fetch('http://localhost:3000/api/allcount');
        const d = await allCount.json();
        setCount(count+2);
        const data = await response.json();
        
        setBlogs(data);
        setallCount(d);
        
      };
      fetchData();
    }, [])

    

  const fetchMoreData = async() => {
    const response = await fetch(`http://localhost:3000/api/?count=${count+2}`);
    setCount(count+2);
    const data = await response.json();
    
    setBlogs(data);
  };
  return (
    <div>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} // This is important field to render the next data
          next={fetchMoreData}
          hasMore={allcount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogitem, index) => (
            <div className="blogItem" key={index}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3><br />
              </Link>
              <p className={styles.blogItemp}>{blogitem.metadesc?.substr(0, 140)}</p><br />
              <Link href={`/blogpost/${blogitem.slug}`}>
                <button className={styles.btn}>Read More</button>
              </Link>
            </div>
          ))}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export default Blog ; 
