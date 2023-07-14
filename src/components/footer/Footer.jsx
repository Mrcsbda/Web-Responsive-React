import React from 'react'
import "./footer.scss"

const list = ["About", "Careers", "Events", "Products", "Supports"]

const Footer = () => {
  return (

    <section>
      <article className="leftSide">
        <h3>loopstudios</h3>
        <ul>
          {
            list.map((item, index) => (<li key={index + 1}>{item} <hr></hr></li>))

          }
        </ul>

        {/* <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul> */}

      </article>
      <article className="rightSide">
        <figure>
          <img src="src/assets/images/icon-facebook.svg" alt="icon-facebook" />
          <img src="src/assets/images/icon-twitter.svg" alt="icon-twitter" />
          <img src="src/assets/images/icon-pinterest.svg" alt="icon-pinterest" />
          <img src="src/assets/images/icon-instagram.svg" alt="icon-instagram" />
        </figure>
        <p>@ 2021 Loopstudios. All rights reserved.</p>
      </article>
    </section>

  )
}

export default Footer