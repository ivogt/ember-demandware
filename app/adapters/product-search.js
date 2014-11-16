import Adapter from './application';
export default Adapter.extend({
	defaultExpand : ['images','prices','variations'],
	
	ajaxOptions: function(url, type, options) {
  		var hash = options || {};
  			hash.data = hash.data || {};
  			if(!hash.data.expand)
  			hash.data.expand = this.get('defaultExpand').join(',');
  		// hash.xhrFields = {
	    //       withCredentials: true
	    //     };
	    //     hash.crossDomain = true;

        return this._super(url, type, hash);
  	},
});