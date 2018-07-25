import React from 'react';
import classNames from 'classnames';
import Banner from '../components/Banner.jsx';
import {withTracker} from 'meteor/react-meteor-data';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

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
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Simple title</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Body content</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Complex title</h3>
                <div>With a bit of description</div>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Body content</p>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>

    </div>
  );
}

export default Home;
