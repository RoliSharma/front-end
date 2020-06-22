alert("connected");
var p1=document.querySelector("#One");
var p2=document.querySelector("#Two");
var one=document.querySelector("#one");
var two=document.querySelector("#two");
var input=document.querySelector("input");
var reset=document.querySelector("#reset");
input.value=5;
gameover=false;
var i=0;
var j=0;
p1.addEventListener("click",function(){
	
	console.log("yes1");
	if(!gameover){
	if(input.value>i)
	 one.innerText=++i;
}
	if(input.value==i)
	{
		one.classList.add("win");
		gameover=true;
	}

});
p2.addEventListener("click",function(){
		console.log("yes2");
		if(!gameover){
		if(input.value>j)
	two.innerText=++j;
}
if(input.value==j)
	{
		two.classList.add("win");
		gameover=true;
	}
});
input.addEventListener("change",function(){

	input.value=this.value;
 resetg();
});
reset.addEventListener("click",function(){resetg();});
function resetg(){
	one.innerText=0;
	two.innerText=0;
	i=0;
	j=0;
	one.classList.remove("win");
	two.classList.remove("win");
	gameover=false;
}