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
		if(lang === undefined){
			
			return "please select a language";
		}
		if(igama === undefined){
			
			return "please enter your name";
		}
		if(igama && lang === undefined){
			
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
	return {
		setGreetNames,
		languages,
		greetNameCounter,
		getGreetNames,
		errorHandler
	}
}