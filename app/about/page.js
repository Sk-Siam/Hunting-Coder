import styles from "../../styles/About.module.css";
import React from 'react'

function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <h2>Introduction</h2><br />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eligendi iste hic rem voluptates in nihil aut vero illo natus accusantium, vitae dolores, impedit error tempore provident sapiente. Placeat praesentium cumque itaque minus, excepturi voluptate perspiciatis recusandae mollitia est minima ut rem unde nobis repellat at consectetur quasi voluptas, id repellendus dolorum quis, maiores iste! Dolore explicabo incidunt quam minus laborum quas, blanditiis dignissimos fugit, error pariatur, commodi earum perferendis et voluptatibus fuga laboriosam. Ab mollitia nesciunt sunt iusto perferendis ullam assumenda vel laborum! Tenetur, sapiente. Nesciunt provident quae quos delectus. Sapiente, harum nulla voluptate est, laudantium aliquid impedit animi deserunt, molestias praesentium quis!  </p><br />
    <h2>Services Offered</h2><br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim aliquid architecto, iusto dolorum nihil repudiandae harum dolores consequuntur perferendis suscipit odio ab alias a corporis ipsum optio nam quis inventore quo eos! Distinctio.</p><br />
    <p>We offer the following services</p><br />
    <ul className={styles.ul}>
      <li>Service 1</li>
      <li>Service 2</li>
      <li>Service 3</li>
      <li>Service 4</li>
      <li>Service 5</li>
      <li>Service 6</li>
      <li>Service 7</li>
      <li>Service 8</li>
    </ul><br />
    <h2>Contact us</h2><br />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maxime laboriosam quas atque quam in aliquid assumenda repellat iure suscipit! Repellat reiciendis, nostrum alias quos odio similique quia debitis perferendis possimus ab rerum nisi amet sunt, voluptas nesciunt iste. Maiores voluptate laudantium, repudiandae cumque necessitatibus itaque eum laboriosam ab quae fugit dignissimos explicabo quod ex! Quod?</p>
    </div>
  )
}

export default Page