var foo = require("../../app/foo");
var expect = require("expect.js");

describe("foo",function(){
    it("should return 42",function(done){
        foo().subscribe(function(value){
            expect(value).to.be(42);
            done();
        })
    })
});