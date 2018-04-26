import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './containers/Blog/Blog';
import NewPost from './containers/NewPost/NewPost'
import Header from './components/Header';

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/posts/new" component={NewPost} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default PublicRoutes;