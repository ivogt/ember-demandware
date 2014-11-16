import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend( DS.EmbeddedRecordsMixin, {
	primaryKey : "product_id",
	extractMeta : function (store, type, payload){
		payload.meta = Ember.Object.create({
			"count" : payload.count,
			"next" : payload.next,
			"start" : payload.start || 0,
			"total" : payload.total || 0,
			"refinements" : Ember.A(payload.refinements),
			"selected_refinements" : Ember.Object.create(payload.selected_refinements),
		});
		delete payload.count;
		delete payload.next;
		delete payload.start;
		delete payload.total;
		delete payload.refinements;
		delete payload.selected_refinements;
		return this._super(store, type, payload);
	},
	normalizePayload : function (payload){
		delete payload._v;
		var hits = payload.hits || [];
		delete payload.hits;
		return { "ProductSearch" : hits};
	},
});