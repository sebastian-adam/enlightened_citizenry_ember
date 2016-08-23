import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    var page_number = params.page;
    var url = 'https://congress.api.sunlightfoundation.com/bills?&apikey=51a9fb9cb84a49e29dccf53b7baa754a&per_page=20&page=' + page_number;
    console.log(url);

    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
