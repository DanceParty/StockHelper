import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './pe-ratio-form.html';

Template.peRatioForm.onCreated(function peRatioFormOnCreated() {
  this.earningsPerShareCalc = new ReactiveVar(0);
  this.priceEarningsRatioCalc = new ReactiveVar(0);
});

Template.peRatioForm.helpers({
  showEarningsPerShare() {
    const instance = Template.instance();
    return instance.earningsPerShareCalc.get();
  },
  showPriceEarningsRatio() {
    const instance = Template.instance();
    return instance.priceEarningsRatioCalc.get();
  },
});

Template.peRatioForm.events({
  'submit .js-form-submit'(event, instance) {
    event.preventDefault();

    const userId = Meteor.userId();

    const form = event.target;

    const ticker = form.stock_ticker.value || null;

    const marketPriceEps = form.current_market_price_weps.value;
    const earningsPerShareEps = form.earnings_per_share_weps.value;

    if (marketPriceEps && earningsPerShareEps) {

      let eps = earningsPerShareEps.slice(0, (earningsPerShareEps.indexOf("."))+3);
      eps = Number(eps);

      let per = (Number(marketPriceEps) / Number(earningsPerShareEps)).toString();
      per = per.slice(0, (per.indexOf('.')) + 3);
      per = Number(per);

      instance.earningsPerShareCalc.set(eps);

      instance.priceEarningsRatioCalc.set(per);

      Meteor.call('calculations.insert',
        ticker,
        instance.priceEarningsRatioCalc.get(),
        instance.earningsPerShareCalc.get(),
        userId,
      );
      return;
    }

    const marketPrice = form.current_market_price.value;
    const netIncome = form.net_income.value;
    const shares = form.shares_outstanding.value;
    const dividends = form.dividends_on_preferred_stock.value;

    if (marketPrice && netIncome && shares && dividends) {

      let eps = ((Number(netIncome) - Number(dividends)) / Number(shares)).toString();
      eps = eps.slice(0, (eps.indexOf(".")) + 3);
      eps = Number(eps);

      let per = (Number(marketPrice) / Number(eps)).toString();
      per = per.slice(0, (per.indexOf('.')) + 3);
      per = Number(per);

      instance.earningsPerShareCalc.set(eps);
      instance.priceEarningsRatioCalc.set(per);
      Meteor.call('calculations.insert',
        ticker,
        instance.priceEarningsRatioCalc.get(),
        instance.earningsPerShareCalc.get(),
        userId,
      );
      return;
    }

    if (marketPrice && netIncome && shares && !dividends) {

      let eps = (Number(netIncome) / Number(shares)).toString();
      eps = eps.slice(0, (eps.indexOf(".")) + 3);
      eps = Number(eps);

      let per = (Number(marketPrice) / Number(earningsPerShareEps)).toString();
      per = per.slice(0, (per.indexOf('.')) + 3);
      per = Number(per);

      instance.earningsPerShareCalc.set(eps);
      instance.priceEarningsRatioCalc.set(per);
      Meteor.call('calculations.insert',
        ticker,
        instance.priceEarningsRatioCalc.get(),
        instance.earningsPerShareCalc.get(),
        userId,
      );
      return;
    }

    instance.earningsPerShareCalc.set(0);
    instance.priceEarningsRatioCalc.set(0);
  },
});
