import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    Welcome to Home.
    <Link to={'/login'}>Login</Link>
  </div>
);

export default Home;
