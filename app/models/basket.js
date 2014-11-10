import DS from 'ember-data';
import OrderAddress from './order-address';
import CouponCode from './coupon-item';
import CustomerInfo from './customer-info';
import PriceAdjustment from './price-adjustment';
import OrderPaymentInstrument from './order-payment-instrument';
import ProductItem from './product-item';
import Shipment from './shipment';
var attr = DS.attr;
export default DS.Model.extend({
   	billing_address : DS.belongsTo(OrderAddress, {embedded: true}),			//	OrderAddress	The billing address. This property is part of basket checkout information only.
	coupon_items	: DS.hasMany(CouponCode, {embedded: true}),				//	[CouponItem]	 	The sorted array of coupon items. Can be empty.
	currency : attr('string'),									//	String	 	The ISO 4217 mnemonic code of the currency.
	customer_info : DS.belongsTo(CustomerInfo, {embedded: true}),			//	CustomerInfo	 	The customer information for logged in customers. This property is part of basket checkout information only.
	order_price_adjustments : DS.hasMany(PriceAdjustment, {embedded: true}), 	//	[PriceAdjustment]	 	Array of order level price adjustments. Can be empty.
	order_total : attr('number'), 								//	Decimal	 	Total price of the order, including products, shipping and tax. This property is part of basket checkout information only.
	payment_instruments	: DS.hasMany(OrderPaymentInstrument, {embedded: true}),//	[OrderPaymentInstrument]	 	The sorted array of payment instruments.
	product_items : DS.hasMany(ProductItem, {embedded: true}),					//	[ProductItem]	 	The sorted array of product items (up to a maximum of 50 items). Can be empty.
	product_sub_total : attr('number'),							//	Decimal	 	Total price of all product items after all product discounts.
	product_total : attr('number'),								//	Decimal	 	Total price of all product items after all product and order discounts.
	shipments :  DS.hasMany(Shipment, {embedded: true}),						//	[Shipment]	 	The array of shipments. This property is part of basket checkout information only.
	shipping_total : attr('number'),							//	Decimal	 	Total shipping price of the order after all shipping discounts. Excludes tax if taxation policy is net. Includes tax if taxation policy is gross. This property is part of basket checkout information only.
	tax_total : attr('number'),									//	Decimal	 	Total tax amount of the order. This property is part of basket checkout information only.
 });
