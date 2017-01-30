import React from 'react';
import Link from 'react-router/lib/Link';

const Home = () => (
  <div>
    <div>
      <h2>Welcome to Home.</h2>
      <Link to={'/login'}>Login</Link>
      <button type="primary">Primary</button>
    </div>
  </div>
);

export default Home;
