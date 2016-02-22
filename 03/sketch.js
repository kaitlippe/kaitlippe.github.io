function setup() {
  createCanvas(width, height)
  background(255);
}

function draw() {
	var count = 0;
  	var poem = "With a deposit of that size, they could get check-guarantee cards with no waiting period. They went to Bath and opened accounts at Midland Bank under the names Tara Lucy Noe and Christopher Platt Noe. Their new checkbooks came in days, and they rented a flat on Baker Street. As the Holtes, they’d avoided being in the same M. & S. concurrently. This time, Haysom suggested that they go in at the same time but stay apart. At the last M. & S. they visited, on April 30th, a store employee noticed them and grew suspicious. She followed them onto
	";
 	for (var n = 0; n <= poem.length; n += 1) {
 		if ( n % 4 == 0){
 			console.log("yes")
 		}
 	}
  
}