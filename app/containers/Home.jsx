import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <h2>Welcome to Home.</h2>
    <Link to={'/login'}>Login</Link>
  </div>
);

export default Home;
