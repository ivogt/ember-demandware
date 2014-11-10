export function initialize( container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.deferReadiness();
  var store = container.lookup('store:main');
  store.find('account','this').then(function(account){
  	console.log(account);
  	application.advanceReadiness();
  });
}

export default {
  name: 'current-user',
  after : 'store',
  initialize: initialize
};
