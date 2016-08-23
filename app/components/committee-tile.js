import Ember from 'ember';

export default Ember.Component.extend({
  subcommitteesShow: false,
  actions: {
    subcommitteesShow(){
      this.toggleProperty('subcommitteesShow');
    }
  }
});
