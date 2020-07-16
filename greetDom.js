const message = document.querySelector(".message");
const errMsg = document.querySelector(".errMsg");
const name = document.querySelector(".name");
const nameBtn = document.querySelector(".nameBtn");
const languageType = document.querySelector(".languageType");
const chumaNumber = document.querySelector(".chumaNumber");
const resetBtn = document.querySelector(".resetBtn")

var stringNames;
if (localStorage['igama']) {
	stringNames = JSON.parse(localStorage.getItem('igama'));
}


var greetingInstance = Greetings()

nameBtn.addEventListener("click", function () {
	var checkedRadioBtn = document.querySelector(".languageType:checked");
	if (checkedRadioBtn) {
		var lang = checkedRadioBtn.value
		var igama = name.value
		const reggie = greetingInstance.regFunction(igama);
		greetingInstance.setGreetNames(reggie)

		const errMsg = greetingInstance.errorHandler(lang, reggie);
		message.innerHTML = reggie;

		if (reggie) {
			greetingInstance.getGreetNames()
		}
		else {
			message.innerHTML = "";
		}

		if (!errMsg) {


			chumaNumber.innerHTML = greetingInstance.greetNameCounter();
			message.innerHTML = greetingInstance.languages(lang, reggie);


			localStorage.setItem('igama', JSON.stringify(greetingInstance.getGreetNames()))
		}
		else {
			message.innerHTML = errMsg;
		}

		setTimeout(function () { message.innerHTML = "" }, 5000)
	}


})



resetBtn.addEventListener("click", function () {
	localStorage.clear()
	location.reload()
})