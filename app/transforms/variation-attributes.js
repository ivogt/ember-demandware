import DS from 'ember-data';
import Ember from 'ember';
export default DS.Transform.extend({
  deserialize: function(serialized) {
  	if(!Ember.isArray(serialized)){ 
  		return []; 
  	}
  	var output = serialized.map(function ( current ){
  		return Ember.Object.create({
  			"id":  current.id,
            "name": current.name,
            "values": Ember.A(current.values),
  		});
  	});

    return output;
  },

  serialize: function(deserialized) {
    return deserialized;
  }
});
