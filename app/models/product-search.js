import DS from 'ember-data';

export default DS.Model.extend({
  	image 	: DS.attr('string'),	//	Image	 	The first image of the product hit for the configured viewtype.
	link 	: DS.attr('string'),//	String	 	URL addressing the product.
	orderable	: DS.attr('boolean'),//	Boolean	 	Flag indicating, whether the product is orderable.
	price : DS.attr('number'),	//	Decimal	 	The sales price of the product. In case of complex products like master or set this is the minimum price of related child products.
	price_max	: DS.attr('number'), //	Decimal	 	The maximum sales of related child products in case of complex products like master or set.
	product_id : DS.attr('string'),	//	String	 	The id (SKU) of the product.
	product_name  : DS.attr('string'),	//	String	 	The localized name of the product.
	variation_attributes : DS.hasMany(VariationAttribute,{embedded: true}),	 // [VariationAttribute]	 	Array of represented variation attributes. Can be empty. For master product only.

	//Meta:
	  // count		//	Integer	 	The requested count parameter value.
	  // next		//	String	 	URL addressing the next result page.
	  // previous	//	String	 	URL addressing the previous result page.
	  // query		//	String	 	The query String that was searched for.
	  // refinements 		//	[ProductSearchRefinement]	 	The sorted array of search refinements. Can be empty.
	  // selected_refinements		//	Map[String, String]	 	Map of selected refinement attribute id/value(s) pairs. The sorting order is the same like in request URL.
	  // selected_sorting_option	//	String	 	The id of the applied sorting option.
	  // sorting_options			//	[ProductSearchSortingOption]	 	The sorted array of search sorting options. Can be empty.
	  // start		//	Integer	 	The requested start parameter value.
	  // total		//	Integer	 	The total number of items across all pages.
});
