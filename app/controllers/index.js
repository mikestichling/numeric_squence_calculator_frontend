import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  number: null,
  errorMessage:null,
  hasError: Ember.computed('errorMessage', function() {
    return this.get('errorMessage') !== null;
  }),
  actions: {
    process() {
      var that = this;
      var number = this.get('number');
      if (number <= 0){
        this.set('errorMessage', 'Number cannot be negative or zero');
      }
      else {
        var url = '/api/NumberSequence/'+number;
        this.get('ajax').request(url, {
        }).then(function(value) {
          that.set('model', value);
          that.set('errorMessage', null);
          }, function(reason) {
            that.set('errorMessge', 'Request Failed: ' + reason);
          });
      }
    }
  }
});
