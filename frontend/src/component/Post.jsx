import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <div className="Post">
        <div className="image">
        <Link>
        <img src="" alt="" />
        </Link>
        </div>
        <div className="text">
            <Link>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus beatae animi laboriosam saepe quae, et dolor iusto architecto tenetur iste possimus, dolore debitis eum ex, accusantium neque dolorum. Ea!
            </h2>
            </Link>
            <p className="info">
                <a href="" className="author">
                    Burinchai
                </a>
                <time> 12 Dec 2023 18:00</time>
            </p>
            <p className="summary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo odit itaque unde adipisci praesentium at eum cum aliquam, atque accusamus consectetur expedita corporis tempore laborum ut consequuntur officiis, fugit nulla.
            </p>
        </div>
    </div>
  )
}

export default Post