// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Calculations } from '../calculations.js';

Meteor.publish('calculations.user', function () {
  return Calculations.find({ userId: this.userId }, { fields: { ticker: 1, priceEarningsRatio: 1, earningsPerShare: 1, createdAt: 1 }});
});
