// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Calculations } from './calculations.js';

Meteor.methods({
  'calculations.insert'(ticker, priceEarningsRatio, earningsPerShare, userId) {
    check(ticker, Match.OneOf(String, null));
    check(priceEarningsRatio, Number);
    check(earningsPerShare, Number);
    check(userId, String);

    const _id = Random.id();

    return Calculations.insert({
      _id,
      ticker,
      priceEarningsRatio,
      earningsPerShare,
      userId,
      createdAt: new Date(),
    });
  },
});
