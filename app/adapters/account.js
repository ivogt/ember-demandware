import Adapter from './application';
// import { raw as request  } from 'ic-ajax';
// import DS from 'ember-data';
// import Ember from 'ember';
export default Adapter.extend({
  	// host: 'https://local.demandware.com',


  	login : function (username,password){
  		 return this.ajax(this.buildURL("account", "login"), "POST", { data : {username : username, password : password} });
  	},
});