describe("Tests greeting the user in the correct language selected.", function () {

    it("should be able to greet Chuma", function() {
        assert.equal("Hello, Chuma", greet("Chuma"));
      });
      
})