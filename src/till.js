'use strict';

function Till() {
  this.shopName = name;
  this.address = address;
  this.priceList = menu;
  this.order = [];
  this.orderName = []
}

var coffeeShop;
var menu = coffeeShop[0].prices[0];
var name = coffeeShop[0].shopName;
var address = coffeeShop[0].address;
var customerName;

Till.prototype.inputOrderName = function(customerName){
  this.orderName.push(customerName);
}

Till.prototype.inputOrder = function(item, quantity){
  var basket = {};
  basket[item] = quantity;
  this.order.push(basket);
}
