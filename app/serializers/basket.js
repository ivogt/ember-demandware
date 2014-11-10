import DS from 'ember-data';

export default DS.RESTSerializer.extend( DS.EmbeddedRecordsMixin, {
	// attrs: {
	//     billing_address: { embedded: 'always' },
	//     comments: { serialize: 'ids' }
	// }
	// 
	extractSingle : function(store, type, payload, id) {
		//console.log(type.typeKey); //type
        return this._super(store, type, payload, id);
    },
	normalizePayload : function (payload){
		delete payload._v;
		payload.id = "this"; //basket is aways this
		return { "basket" : payload };
	},
});