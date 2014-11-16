import Ember from 'ember';

export default Ember.Route.extend({
	model : function SearchRoute$model (params, transition, queryParams) {
		return this.store.find('ProductSearch', {refine_0 : 'cgid=root'});
	},
});
