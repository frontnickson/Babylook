import React from 'react';


import iconCards from '../../../assets/images/icon-cards/material-symbols_share.svg'
import image from '../../../assets/images/test-image-posts/children.jpeg'
import styles from './LastPosts.module.scss'

const list = [
  {
    id: 1,
    user: 324324,
    image: image,
    title: "Super boy",
    descreption: "this is my baby look"
  },
  {
    id: 2,
    user: 322334,
    image: image,
    title: "Super girl",
    descreption: "this is my baby look"
  }
]

const LastPosts: React.FC = () => {
  return (
    <div className={styles.container}>

      {list.map((item) => (
        <ul key={item.id}>
          <li className={styles.list}>

            <img src={item.image} alt='image' className={styles.image} />

            <div className={styles.like}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 4C4.4625 4 2 6.4625 2 9.5C2 15 8.5 20 12 21.163C15.5 20 22 15 22 9.5C22 6.4625 19.5375 4 16.5 4C14.64 4 12.995 4.9235 12 6.337C11.4928 5.61469 10.819 5.0252 10.0357 4.61841C9.25238 4.21162 8.38263 3.9995 7.5 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className={styles.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.descreption}</p>
              </div>
              <div>
                <img src={iconCards} alt='icon' />
              </div>
            </div>

          </li>
        </ul>
      ))}

    </div>
  );
};

export default LastPosts;