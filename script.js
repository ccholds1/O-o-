// function Teacher(name) { //This is my class teacher 
// 	this.name = name;	//Set key 'name' with value to variable name 
// 	this.teach = function() {	//set key 'teach' with function()
// 		console.log(this.name + " says constructors are cool");
// 	}
// }

// var teacher1 = new teacher('Brian');


// console.log(teacher1);
// var teacher2 = new teacher('Jon');
// var teacher3 = new teacher('Blake');
// var teacher4 = new teacher('Kate');

// teacher1.teach();
// teacher2.teach();
// teacher3.teach();
// teacher4.teach();

//______________________________________________________________________________________________________________________________________________________________

function Particle(startX,startY) {
	this.x = startX;
	this.y = startY;
	this.velocity = {x: 0, y: 0}
}

var particles = [];

for(var i = 0; //what number to start with
 	i < 100; //keep cycling through until this fails
 	i++ //what to do at the end of each cycle
 	) {
	particles.push(new Particle(i,Math.random()*500));
}

console.log(particles);