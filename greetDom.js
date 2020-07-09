const message = document.querySelector(".message");
const errMsg = document.querySelector(".errMsg");
const Name = document.querySelector(".Name");
const nameBtn = document.querySelector(".nameBtn");
const languageType = document.querySelector(".languageType");
const chumaNumber = document.querySelector(".chumaNumber");
const resetBtn = document.querySelector(".resetBtn")

var stringNames;
if(localStorage['igama']){
	stringNames = JSON.parse(localStorage.getItem('igama'));
}


var greetingInstance = Greetings()

nameBtn.addEventListener("click", function () {
	var checkedRadioBtn = document.querySelector(".languageType:checked");
	if (checkedRadioBtn) {
		var lang = checkedRadioBtn.value
		var igama = Name.value
		// var newName = igama[0].toUpperCase() + igama.slice(1).toLowerCase();
		greetingInstance.setGreetNames(igama)
	}
		const errMsg = greetingInstance.errorHandler(lang, igama);
	 	

	
	if(!errMsg){
		
		
		chumaNumber.innerHTML = greetingInstance.greetNameCounter();
		message.innerHTML = greetingInstance.languages(lang, igama);

		localStorage.setItem('igama', JSON.stringify(greetingInstance.getGreetNames()))
	}
	else{
		message.innerHTML = errMsg;
	}
	setTimeout(function(){ message.innerHTML = "" }, 3000)
});



resetBtn.addEventListener("click", function (){
	localStorage.clear()
	location.reload()
})