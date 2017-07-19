import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/history/history.js';
import '../../ui/pages/pe-ratio/pe-ratio.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/about/about.js';
import '../../ui/pages/faq/faq.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'Stock Helper',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/history', {
  name: 'History',
  action() {
    BlazeLayout.render('App_body', { main: 'App_history' });
  },
});

FlowRouter.route('/pe-ratio', {
  name: 'Price Earnings Ratio',
  action() {
    BlazeLayout.render('App_body', { main: 'App_peratio' });
  },
});

FlowRouter.route('/about', {
  name: 'About',
  action() {
    BlazeLayout.render('App_body', { main: 'App_about' });
  },
});

FlowRouter.route('/faq', {
  name: 'FAQ',
  action() {
    BlazeLayout.render('App_body', { main: 'App_faq' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
