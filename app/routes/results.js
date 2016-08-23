import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'https://congress.api.sunlightfoundation.com/legislators/locate?apikey=51a9fb9cb84a49e29dccf53b7baa754a&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
