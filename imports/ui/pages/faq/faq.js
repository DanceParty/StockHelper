import { Template } from 'meteor/templating';

import './faq.html';

import '../../components/topnav/topnav.js';
import '../../components/faq-question/faq-question.js';

Template.App_faq.helpers({
  topnavArgs() {
    const title = 'FAQ';
    let isMenu = false;
    return {
      title,
      isMenu,
    };
  }
})
