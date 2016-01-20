describe ('till',function(){

  var till;

  beforeEach(function(){
    till = new Till();
  })


  it('has a shope name',function(){
    expect(till.shopName).toEqual("The Coffee Connection");
  });

  it('has an address',function(){
    expect(till.address).toEqual("123 Lakeside Way");
  });

  it('has a price list',function(){
    expect(till.priceList).toEqual(menu);
  });

  it('has an order', function(){
    expect(till.order).toBeDefined();
  });

  it('inputs customer\'s name in an order',function() {
    till.inputOrderName("Amy");
    expect(till.orderName).toEqual(["Amy"]);
  });

  it('takes an order of item and quantity',function(){
    till.inputOrder(quantity, item);
    expect(till.order).toEqual([{quantity, item}]);
  });
})
