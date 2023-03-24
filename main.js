
const employees=[
 { 
	name:"David Carlson",
	age:30 
 },
 
 {
	 name:"John Cena",
	 age:34 
 },
 {
   name:"Mike Sheridan",
   age:25
 },
 { name:"John Carte",
   age:50 
   
 }
];

let res=employees.find(function(val){
	return val.name.indexOf("John")>=0;
		
		

});

console.log(res);


let result=employees.findIndex(function(val){
	return val.name.indexOf('John')>=0
});
console.log(result);