const even = () => {
	let result = []
	for(let i = 0; i <= 50; i++){
		if(i % 2 === 0){
			result.push(i)
		}
	}
return result;
}
console.log(even())
