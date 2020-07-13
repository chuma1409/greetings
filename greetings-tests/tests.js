describe("Greeting exercise tests", function () {
  describe("Greeting people", function () {
    it("should be able to greet Chuma once", function () {
      let greetings = Greetings()
      greetings.setGreetNames("chuma")
      assert.equal(1, greetings.greetNameCounter());
    });
    it("should be able to greet Lineo once", function () {
      let greetings = Greetings()
      greetings.setGreetNames("lineo")
      assert.equal(1, greetings.greetNameCounter());
    });
    it("should be able to greet Chuma and Lineo once", function () {
      let greetings = Greetings()
      greetings.setGreetNames("Chuma")
      greetings.setGreetNames("lineo")
      assert.equal(2, greetings.greetNameCounter());
    });
  });
    describe("Greeting people in different languages", function () {
      it("should be able to greet Chuma in isiXhosa", function () {
        let greetings = Greetings()
        greetings.languages("isiXhosa", "chuma")
        const language = greetings.languages("isiXhosa", "chuma")
        assert.equal("Molo, chuma!", language);
      });
      it("should be able to greet Lineo in English", function () {
        let greetings = Greetings()
        greetings.languages("English", "Lineo")
        const language = greetings.languages("English", "Lineo")
        assert.equal("Hello, Lineo!", language);
      });
      it("should be able to greet Esihle in Afrikaans", function () {
        let greetings = Greetings()
        greetings.languages("Afrikaans", "Esihle")
        const language = greetings.languages("Afrikaans", "Esihle")
        assert.equal("Halo, Esihle!", language);
      });
    });
      describe("Displaying error messages", function () {
        it("should return error message displaying Please select language", function () {
          let greetings = Greetings()
          greetings.errorHandler("", "Chuma")
          assert.equal("Please select language".error);
        });
        it("should return error message displaying Please eneter name", function () {
          let greetings = Greetings()
          greetings.errorHandler("isiXhosa", "")
          assert.equal("Please enter name".error);
        });
        it("should return error message displaying Please eneter name and select language", function () {
          let greetings = Greetings()
          greetings.errorHandler("", "")
          assert.equal("Please enter name and select language".error);
        });
      });
        describe("Should keep count of users", function () {
          it("count names stoerd in local storage", function () {
            let greetings = Greetings()
            greetings.greetNameCounter()
            assert.equal(0,   greetings.greetNameCounter())
          
        });
      });
   

});