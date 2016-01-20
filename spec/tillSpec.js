'use strict';

describe ('till',function(){

  var till;

  beforeEach(function(){
    till = new Till();
  })

  it('has a shop name',function() {
    expect(till.shopName).toEqual("The Coffee Connection");
  });

  it('has an address',function() {
    expect(till.address).toEqual("123 Lakeside Way");
  });

  it('has a price list',function() {
    expect(till.priceList).toEqual(menu);
  });

  it('has an order', function() {
    expect(till.order).toBeDefined();
  });

  it('inputs customer\'s name in an order',function() {
    till.inputOrderName("Amy");
    expect(till.orderName).toEqual(["Amy"]);
  });

  it('takes an order of item and quantity',function() {
    till.inputOrder("Tea", 2);
    expect(till.order).toEqual([{Tea:2}]);
  });

  it('takes multiple order of items', function() {
    till.inputOrder("Tea", 2);
    till.inputOrder("Burger", 5);
    expect(till.order).toEqual([{Tea:2}, {Burger:5}])
  });

  it('calculates the sum total of items',function() {
    till.inputOrder("Tea",2);
    till.calculateSum();
    expect(till.sumTotal).toEqual(4);
  });
})
