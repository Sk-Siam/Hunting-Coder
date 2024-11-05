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












// import styles from "../../styles/Blog.module.css";
// import Link from 'next/link';

// // import * as fs from 'fs';
// import InfiniteScroll from 'react-infinite-scroll-component';
// export default async function Blog ()  {



//   let data = await fetch('http://localhost:3000/api')

//   let allBlogs = await data.json()
//   console.log(allBlogs)
//   // let data = await fs.promises.readdir("blogdata");
//   // let myfile;
//   // let allBlogs = [];
//   //   for (let index = 0; index < data.length; index++) {
//   //     const item = data[index];
      
      
//   //     myfile = await fs.promises.readFile("blogdata/" + item, 'utf-8') 
      
//   //     allBlogs.push(JSON.parse(myfile))
//   //   }

//   // useEffect(() => {
//   //   console.log('useffect is running')
//   //   fetch('http://localhost:3000/api',{cache:"no-store"}).then((a) => {
//   //     return a.json();

//   //   }).then((parsed) => {
//   //     console.log(parsed)
//   //     setblogs(parsed)
//   //   })

//   // }, [])
//   const fetchData = () => {

//     // a fake async api call like which sends
//     // 20 more records in .5 secs
//     setTimeout(() => {
//       this.setstate({
//         items: allBlogs.concat(Array.from({ length: 20 }))
//       });
//     }, 1500);
//   };

//   return (


//     <div>
//       <main className={styles.main}>

//       <InfiniteScroll
//   dataLength={allBlogs.length} //This is important field to render the next data
//   next={fetchData}
//   hasMore={true}
//   loader={<h4>Loading...</h4>}
//   endMessage={
//     <p style={{ textAlign: 'center' }}>
//       <b>Yay! You have seen it all</b>
//     </p>
//   }
 
// >
// {allBlogs.map((blogitem) => {
          
//           return <> <div className="blogItem" key={blogitem.slug}>
//             <Link href={`/blogpost/${blogitem.slug}`}>
//               <h3 className={styles.blogItemh3}>{blogitem.title}</h3><br /></Link>
//               <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}</p><br />
//               <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
//           </div><br /><br />
//           </>
//         })}
// console.log(allBlogs)
// </InfiniteScroll>

//       </main>
//     </div>
    
//   )
// }

// app/page.js

// "use client";

// import styles from "../../styles/Blog.module.css";
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default function Blog() {
//   const [blogs, setBlogs] = useState([]); // Holds the blog posts
//   const [page, setPage] = useState(1); // Tracks the current page for pagination
//   const [hasMore, setHasMore] = useState(true); // Checks if more data is available

//   // Fetch initial data on component mount
//   useEffect(() => {
//     fetchMoreData();
//   }, []);

//   // Function to load more data from the API
//   const fetchMoreData = async () => {
//     const res = await fetch(`/api/blogs?page=${page}`);
//     const newBlogs = await res.json();

//     // Update state with new blogs and increase the page count
//     setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
//     setPage(page + 1);

//     // If there are no more blogs to load, set hasMore to false
//     if (newBlogs.length === 0) setHasMore(false);
//   };

//   return (
//     <div>
//       <main className={styles.main}>
//         <InfiniteScroll
//           dataLength={blogs.length} // The length of the loaded data
//           next={fetchMoreData}
//           hasMore={hasMore}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: 'center' }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }
//         >
//           {blogs.map((blog) => (
//             <div className="blogItem" key={blog.slug}>
//               <Link href={`/blogpost/${blog.slug}`}>
//                 <h3 className={styles.blogItemh3}>{blog.title}</h3><br />
//               </Link>
//               <p className={styles.blogItemp}>{blog.metadesc.substr(0, 140)}</p><br />
//               <Link href={`/blogpost/${blog.slug}`}>
//                 <button className={styles.btn}>Read More</button>
//               </Link>
//             </div>
//           ))}
//         </InfiniteScroll>
//       </main>
//     </div>
//   );
// }



// // const Blog = () => {
// //   const [allBlogs, setAllBlogs] = useState([]);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [page, setPage] = useState(1);

// //   const fetchData = () => {
// //     // Fetch the next batch of data
// //     const newData = fetch(`http://localhost:3000/api?page=${page}`, {
// //       method: 'GET',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //       .then(response => response.json())
// //       .then(data => {
// //         setAllBlogs(prevBlogs => [...prevBlogs, ...data]);
// //         setHasMore(data.length === 20); // Update hasMore prop
// //         setPage(page + 1); // Increment page number
// //       })
// //       .catch(error => console.error(error));
// //   };

// //   return (
// //     <div>
// //       <main className={styles.main}>
// //         <InfiniteScroll
// //           dataLength={allBlogs.length}
// //           next={fetchData}
// //           hasMore={hasMore}
// //           loader={<h4>Loading...</h4>}
// //           endMessage={
// //             <p style={{ textAlign: 'center' }}>
// //               <b>Yay! You have seen it all</b>
// //             </p>
// //           }
// //         >
// //           {allBlogs.map((blogitem, index) => (
// //             <div key={index} className="blogItem">
// //               <Link href={`/blogpost/${blogitem.slug}`}>
// //                 <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
// //                 <br />
// //               </Link>
// //               <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}</p>
// //               <br />
// //               <Link href={`/blogpost/${blogitem.slug}`}>
// //                 <button className={styles.btn}>Read More</button>
// //               </Link>
// //             </div>
// //           ))}
// //         </InfiniteScroll>
// //       </main>
// //     </div>
// //   );
// // };
// // export async function getServerProps() {
// //   // Fetch data from external API
// //   let data = await fetch('http://localhost:3000/api',{cache:"no-store"})

// //   let allBlogs = await data.json()
  
// //   // Pass data to the page via props
// //   return { props: { allBlogs } }
// // }
 
// import styles from "../../styles/Blog.module.css";
// import Link from 'next/link';
// import fs from 'fs/promises';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default async function Blog() {
//   // Load all blog data at runtime
//   const data = await fs.readdir("blogdata");
//   const allBlogs = await Promise.all(
//     data.map(async (item) => {
//       const myfile = await fs.readFile("blogdata/" + item, 'utf-8');
//       return JSON.parse(myfile);
//     })
//   );

//   // Pagination settings
//   let itemsToShow = 20;

//   // Function to load more items by increasing itemsToShow count
//   function fetchData() {
//     itemsToShow += 20;
//   }

//   return (
//     <div>
//       <main className={styles.main}>
//         <InfiniteScroll
//           dataLength={itemsToShow}
//           next={fetchData}
//           hasMore={itemsToShow < allBlogs.length}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: 'center' }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }
//         >
//           {allBlogs.slice(0, itemsToShow).map((blogitem, index) => (
//             <div className="blogItem" key={index}>
//               <Link href={`/blogpost/${blogitem.slug}`}>
//                 <h3 className={styles.blogItemh3}>{blogitem.title}</h3><br />
//               </Link>
//               <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}</p><br />
//               <Link href={`/blogpost/${blogitem.slug}`}>
//                 <button className={styles.btn}>Read More</button>
//               </Link>
//             </div>
//           ))}
//         </InfiniteScroll>
//       </main>
//     </div>
//   );
// }



