// Definition of the links collection

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Calculations = new Mongo.Collection('calculations');

Calculations.deny({
  insert() { return false },
  update() { return false },
  remove() { return false },
});

Calculations.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  ticker: {
    type: String,
    optional: true,
  },
  priceEarningsRatio: {
    type: Number,
    decimal: true,
  },
  earningsPerShare: {
    type: Number,
    decimal: true,
  },
  userId: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
})
