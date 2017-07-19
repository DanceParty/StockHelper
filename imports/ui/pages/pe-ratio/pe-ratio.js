import { Template } from 'meteor/templating';

import './pe-ratio.html'

import '../../components/topnav/topnav.js';
import '../../components/pe-ratio-form/pe-ratio-form.js';

Template.App_peratio.helpers({
  topnavArgs() {
    const title = FlowRouter.getRouteName();
    let isMenu = false;
    return {
      title,
      isMenu,
    };
  }
})
