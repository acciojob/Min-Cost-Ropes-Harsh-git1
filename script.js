function mincost(arr)
{ 
	
//write your code here
	let cost = 0;
	arr.sort((a,b) => {
		a-b;
	});

	while(arr.length > 1) {
		let rope1 = arr.shift();
		let rope2 = arr.shift();

		cost += rope1+rope2;
		arr.push(rope1+rope2);
		arr.sort((a,b) => {
			a-b;
		});
	}
// return the min cost
	  return cost;
}

module.exports=mincost;
