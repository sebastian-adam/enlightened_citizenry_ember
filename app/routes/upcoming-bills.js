import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var url = 'https://congress.api.sunlightfoundation.com/upcoming_bills?&apikey=51a9fb9cb84a49e29dccf53b7baa754a&per_page=all';
    console.log(url);

    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
