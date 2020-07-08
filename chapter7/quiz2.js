var list = [];
list[0] = String.fromCharCode(34) + "자존심은 어리석은 자의 소유물이다" +  String.fromCharCode(34);
list[1] = String.fromCharCode(34) + "후회를 최대한 이용하라." +  String.fromCharCode(34);
list[2] = String.fromCharCode(34) + "깊이 후회한다는 것은 새로운 삶을 산다는 것이다." +  String.fromCharCode(34);

var number = Math.floor(Math.random() * 3);
//document.write("<p>&quot;" + list[number] + "&quot;</p>")
var printer = document.querySelector("#gle").innerHTML= list[number];