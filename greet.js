function Greetings(greeted) {

	const namesGreeted = greeted || {};
	var errMsg = " "

	function setGreetNames(igama) {
		if (igama) {
			if (namesGreeted[igama] === undefined) {
				namesGreeted[igama] = 0;
			}
		}
	}

	function languages(lang, igama) {
		if (lang === "English") {
			return "Hello, " + igama + "!";
		}
		if (lang === "Afrikaans") {
			return "Halo, " + igama + "!";
		}
		if (lang === "isiXhosa") {
			return "Molo, " + igama + "!";
		}
	}
	function errorHandler(lang, igama){
		if(!lang){
			
			return "please select a language";
		}
		if(!igama){
			
			return "please enter your name";
		}
		if(!lang && !igama){
			
			return "please enter your name and select a language";
		}
	}
	function greetNameCounter() {
		var listOfNames = Object.keys(namesGreeted)
		return listOfNames.length
	}
	function getGreetNames() {
		return namesGreeted;
	}
	function regFunction(igama){
		var regNames = /^[a-zA-Z]+$/;
		newRegex = new  RegExp(regNames);
		regexTest = newRegex.test(igama);
		console.log(regexTest) 
		if(regexTest){
			var newName = igama.charAt(0).toUppercase() +igama.slice(1).toLowerCase()
			alert(newName)
			return newName;
		}
		return " ";
	}
	return {
		setGreetNames,
		languages,
		greetNameCounter,
		getGreetNames,
		errorHandler,
		regFunction
	}
}