import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts/new">New Post</Link></li>
        </ul>
      </nav>
    </header> 
  )
}

export default header;