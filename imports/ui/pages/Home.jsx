import React from 'react';
import classNames from 'classnames';
import Banner from '../components/Banner.jsx';
import {withTracker} from 'meteor/react-meteor-data';
import Accordion from 'react-responsive-accordion';

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

      <Accordion>
          <div data-trigger="A nifty React accordion component">
            <p>So this is an Accordion component that used the <a href="https://github.com/glennflanagan/react-collapsible">react-collapsible</a> component. How handy.</p>
          </div>
 
          <div data-trigger="What the difference?" data-trigger-when-open="THAT is the difference!">
            <p>An Accordion is different to a Collapsible in the sense that only one "tray" will be open at any one time.</p>
          </div>
 
          <div data-trigger="I'm responsive and I have a little secret. Look inside.">
            <p>And this Accordion component is also completely repsonsive. Hurrah for mobile users!</p>
          </div>
        </Accordion>

    </div>
  );
}

export default Home;
