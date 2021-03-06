import { Meteor } from 'meteor/meteor';
import './accounts-config.js';
import '../../api/api.js'
import '../../../lib/config/at_config.js'
import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '../../ui/containers/MainLayout.jsx';

Meteor.startup(() => {
  ReactDOM.render(
    <MainLayout />,
    document.getElementById('app')
  );
});
