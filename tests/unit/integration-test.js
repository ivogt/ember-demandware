
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
     Ember.run(App, App.destroy);
   }
 });
 

test("Account", function() {
  expect(1);
  stop();
   Ember.run(function(){
     store.find('account','this').then(function(account){
      start();
      ok(account,"has account");
    }, function(err){
      start();
      ok(false, "rejected account error:" + (err.stack || err.message) );
    });
  });
 });
test("Account Login", function() {
  stop();
  Ember.run(function(){
     store.find('account','this').then(function(account){
          if(account.get('customer_no')){
           start();
            ok(true,"Account logged in!");
          }
          if(!account.get('customer_no')){
            var adapter = store.adapterFor(store.modelFor('account'));
            adapter.login("ivo.gtodorov@gmail.com","11111111").then(function (response){
              start();
              ok(!!account.get('customer_no'),"Account logged in!");
            });
          }


     });
  });//Ember.run
});

test("Basket", function() {
  expect(1);
  stop();
   Ember.run(function(){
     store.find('basket','this').then(function(basket){
      start();
      ok(basket);
    }, function(err){
      start();
      ok(false, "rejected error:" + (err.stack || err.message) );
    });
  });
 });