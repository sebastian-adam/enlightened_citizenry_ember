import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url = 'https://congress.api.sunlightfoundation.com/bills?&apikey=51a9fb9cb84a49e29dccf53b7baa754a&per_page=50';

    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
