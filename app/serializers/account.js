import BasketSerializer from './basket';

export default BasketSerializer.extend({
	//primaryKey : "customer_no",
	extractSingle : function(store, type, payload, id) {
		payload.id = id === "this" ? id : payload.customer_no; 
        return this._super(store, type, payload, id);
    },
	normalizePayload : function (payload){
		delete payload._v;
		return { "account" : payload };
	},
});
