try {
	undefinedFunction();
	console.log("Excepction handler when call undefined function");
}
 catch(er){
	console.log("Catch exception: " + er.message);
 }
 finally{
 	console.log("Finally undefined exception");
 }