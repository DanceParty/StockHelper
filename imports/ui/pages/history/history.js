import { Template } from 'meteor/templating';

import { Calculations } from '../../../api/calculations/calculations.js';

import './history.html'

import '../../components/topnav/topnav.js';

Template.App_history.onCreated(function appHistoryOnCreated() {
  this.subscribe('calculations.user');
})

Template.App_history.helpers({
  topnavArgs() {
    const title = 'History';
    let isMenu = false;
    return {
      title,
      isMenu,
    };
  },
  calculationsList() {
    return Calculations.find({}, { limit: 25 });
  }
})
