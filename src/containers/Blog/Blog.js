import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Posts from '../Posts';
import './Blog.css';

class Blog extends Component {
  render () {
      return (
        <div>
          <Posts />
        </div>
      );
  }
}

export default Blog;