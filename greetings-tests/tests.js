describe("Greeting exercise tests", function () {
  describe("Greeting people", function () {
    it("should be able to greet Chuma once", function() {
      let greetings = Greetings()
      greetings.setGreetNames("chuma")
        assert.equal(1, greetings.greetNameCounter());
      });
      it("should be able to greet lineo once", function() {
        let greetings = Greetings()
        greetings.setGreetNames("lineo")
          assert.equal(1, greetings.greetNameCounter());
        });
        it("should be able to greet chuma and Lineo once", function() {
          let greetings = Greetings()
          greetings.setGreetNames("Chuma")
          greetings.setGreetNames("lineo")
            assert.equal(2, greetings.greetNameCounter());
          });
    }); 
});