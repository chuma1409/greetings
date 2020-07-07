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
		var newName = igama[0].toUpperCase() + igama.slice(1).toLowerCase();
		greetingInstance.setGreetNames(newName)
		 chumaNumber.innerHTML = greetingInstance.greetNameCounter();
		localStorage.setItem('igama', JSON.stringify(greetingInstance.getGreetNames()))
	
	}
	
	message.innerHTML = greetingInstance.languages(lang, newName);
	errMsg.innerHTML = greetingInstance.errorHandler(lang, igama);
});



resetBtn.addEventListener("click", function (){
	localStorage.clear()
	location.reload()
})