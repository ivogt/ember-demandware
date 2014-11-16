import DS from 'ember-data';
import Ember from 'ember';
export default DS.RESTAdapter.extend({
	requiresHttps : ['account'],
	namespace: 's/mandco/dw/shop/v14_8',
  	// host: 'http://local.demandware.com',
	headers: {
	    'x-dw-client-id': 'ef5387f4-101f-4a56-91dc-e8d7164ebc74',
	    "content-type":"application/json;charset=UTF-8",
  	},
  	pathForType: function(type) { //remove pluralization
	    return Ember.String.decamelize(type);
  	},
  	ajaxOptions: function(url, type, options) {
  		var hash = options || {};
  		// hash.xhrFields = {
	    //       withCredentials: true
	    //     };
	    //     hash.crossDomain = true;

        return this._super(url, type, hash);
  	},
});
