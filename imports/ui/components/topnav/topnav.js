import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';

import './topnav.html';

Template.topnav.onCreated(function topnavOnCreated() {
  this.autorun(() => {
    new SimpleSchema({
      title: { type: String },
      isMenu: { type: Boolean },
    }).validate(Template.currentData());
  });
});

Template.topnav.onRendered(function topnavOnRendered() {
  $(".button-collapse").sideNav({
    draggable: true,
    closeOnClick: true,
  });
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
});

Template.topnav.events({
  'click .js-logout'(event, instance) {
    event.preventDefault();
    Meteor.logout();
  },
})
