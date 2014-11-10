import DS from 'ember-data';
import Singleton from '../mixins/singleton';

var AccountModel = DS.Model.extend(Singleton,{
  birthday	: DS.attr('date'), 			//	 	The customers birthday in the format yyyy-MM-dd.
  company_name	: DS.attr('string'), 	//	 	The company name.
  customer_no	: DS.attr('string'), 	//	 	The customer number.
  email	: DS.attr('string'), 			//	 	The email address. This property is mandatory.
  fax	: DS.attr('string'), 			//	 	The fax number.
  first_name	: DS.attr('string'), 	//	 	The first name.
  gender	: DS.attr('string'), 		//	 	The customers gender.
  job_title	: DS.attr('string'), 		//	 	The job title.
  last_login_time	: DS.attr('date'), 	//	 	The customers last login time.
  last_name	: DS.attr('string'), 		//	 	The last name. This property is mandatory.
  last_visit_time	: DS.attr('date'), 		//	 	The time, when the customer has visited the storefront the last time (with enabled remember me functionality).
  phone_business	: DS.attr('string'), 	//	 	The business phone number.
  phone_home	: DS.attr('string'), 		//	 	The home phone number.
  phone_mobile	: DS.attr('string'), 		//	 	The mobile phone number.
  preferred_locale	: DS.attr('string'), 	//	 	The customers preferred locale.
  previous_login_time	: DS.attr('date'), 	//	 	The time the customer logged in prior to the current login.
  previous_visit_time	: DS.attr('date'), 	//	 	The time the customer visited the store prior to the current visit.
  salutation	: DS.attr('string'), 		//	 	The salutation.
  second_name	: DS.attr('string'), 		//	 	The second name.
  suffix	: DS.attr('string'), 			//	 	The suffix.
  title	: DS.attr('string'), 				//	 	The title.
});


export default AccountModel;