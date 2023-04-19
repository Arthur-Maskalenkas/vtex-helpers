// var jqry = document.createElement('script');
// jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
// document.getElementsByTagName('head')[0].appendChild(jqry);
// jQuery.noConflict();


const inputDate = $(".datepicker input[type=\"tel\"]")
const inputInit = $(".delete-modal-content > form > :nth-child(2) input[placeholder=\"00:00\"")
const inputEnd = $(".delete-modal-content > form > :nth-child(3) input[placeholder=\"00:00\"")
const buttonSubmit = $(".delete-modal-content > form > :last-child > button:first-child")

inputDate.value = "17/04/2023"
inputInit.value = "17:00"
inputEnd.value = "17:30"

buttonSubmit.click()