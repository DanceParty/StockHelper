import { Template } from 'meteor/templating';

import './home.html';

import '../../components/topnav/topnav.js';

Template.App_home.helpers({
  topnavArgs() {
    const title = FlowRouter.getRouteName();
    let isMenu = true;
    return {
      title,
      isMenu,
    };
  }
})
