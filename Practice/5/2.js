var a, b;
a = prompt("비교할 첫 번째 숫자:");
b = prompt("비교할 두 번째 숫자:");

if(a != null && b != null){
	if(a > b){
		alert(a + "(이)가 " + b + "보다 큽니다.");
	}
	else if ( b > a){
		alert(b + "(이)가 " + a + "보다 큽니다.");
	}
	else{
		alert(a+"와 "+b+"가 같습니다.");
	}
}