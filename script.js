function deepCopy (obj) {
	let newObj = new obj.constructor();
	Object.entries(obj).forEach(([key]) => {
		if( typeof obj[key] === 'object' ){
            newObj[key] = deepCopy(obj[key]);   
		}else{
			Object.defineProperty(newObj, key, Object.getOwnPropertyDescriptor(obj, key));
		}
	});
	return newObj;
}