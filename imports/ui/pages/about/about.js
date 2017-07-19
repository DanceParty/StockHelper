import { Template } from 'meteor/templating';

import './about.html';

import '../../components/topnav/topnav.js';
import '../../components/about-text/about-text.js'

Template.App_about.helpers({
  topnavArgs() {
    const title = 'About';
    let isMenu = false;
    return {
      title,
      isMenu,
    };
  }
})
