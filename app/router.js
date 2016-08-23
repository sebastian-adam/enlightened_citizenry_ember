import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('committees');
  this.route('legislators', {path: '/legislators/:zip'});
  this.route('sub-committees');
  this.route('bills', {path: '/bills/:page'});
});

export default Router;
