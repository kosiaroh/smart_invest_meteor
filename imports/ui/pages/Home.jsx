import React from 'react';
import classNames from 'classnames';
import Banner from '../components/Banner.jsx';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >
      <Banner />
      <h1>Smart Invest</h1>
      <h2>Welcome to the smartest trading platform on the market</h2>
      <p>
        See <a href="https://github.com/meteor/react-packages/blob/master/docs/client-npm.md">
        this guide</a> to learn how to import NPM modules/components via browserify in Meteor.
      </p>

      <h4>Components</h4>
      <ul>
        <li>Header</li>
        <li>LoginButtons</li>
        <li>
          <a href="https://github.com/JedWatson/classnames">Classnames (NPM Component)</a>
        </li>
      </ul>

    </div>
  );
}

export default Home;
