var Firstday = new Date('2020-02-03');
var toDay = new Date();

var toNow = toDay.getTime();
var toFirst = Firstday.getTime();

var PassedDay = Math.round((toNow - toFirst) / (24*60*60*1000));

document.querySelector("#accent").innerText = PassedDay;

function calcDate(days) {
	var future = toFirst + days*(24*60*60*1000);
	var someday = new Date(future);
	year = someday.getFullYear();
	month = someday.getMonth()+1;
	date = someday.getDate();
	document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);