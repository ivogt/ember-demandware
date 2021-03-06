
 import Ember from "ember";
 import { test  } from 'ember-qunit';
 import startApp from '../helpers/start-app';
 var App,store;
 
 module('Integration tests', {
   setup: function() {
     App = startApp();
     store = App.__container__.lookup('store:main');
   },
   teardown: function() {
    // Ember.run(App, App.destroy);
   }
 });
 

test("Account", function() {

  stop();
   Ember.run(function(){
     store.find('account','this').then(function(account){
      start();
      ok(account,"Found account!");
    }, function(err){
      start();
      ok(false, "Account request is rejected, error:" + (err.stack || err.message) );
    });
  });

  stop();
  Ember.run(function(){
     store.find('account','this').then(function(account){
          if(account.get('customer_no')){
           start();
            ok(true,"Account is logged in!");
          }
          if(!account.get('customer_no')){
            var adapter = store.adapterFor(store.modelFor('account'));
            adapter.login("ivo.gtodorov@gmail.com","11111111").then(function (response){
              start();
              var loggedin = !!account.get('customer_no') && account.get('customer_no').length > 3 ? true :false;
              ok(loggedin,"Account logged in after login request?");
            });
          }


     });
  });//Ember.run


  stop();
   Ember.run(function(){
     store.find('basket','this').then(function(basket){
      start();
      ok(basket);
    }, function(err){
      start();
      ok(false, "Basket rejected error:" + (err.stack || err.message) );
    });
  });


  stop();
  Ember.run(function(){
     store.find('ProductSearch').then(function(SearchResult){
      start();
        var result = SearchResult.content;
       ok(result.length , "Search has records[" + result.length + "]!" );
       ok(!!SearchResult , "Search OK!" );
     },
     function(err){
      start();
      ok(false, "ProductSearch rejected error:" + (err.stack || err.message) );
    });
   });



 });