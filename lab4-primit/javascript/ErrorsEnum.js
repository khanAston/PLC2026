const prompt=require("prompt-sync")({sigint:true}); 

const Error_enumobj = {
	FP_ROUNDING: "FP_ROUNDING",
	FP_OVERFLOW: "FP_OVERFLOW",
	FP_UNDERFLOW: "FP_UNDERFLOW",
	INT_OVERFLOW: "INT_OVERFLOW"
}

const Result_enumobj = {
    A_BIT_DIFFERENT: "A_BIT_DIFFERENT", 
    INFINITY: "INFINITY", 
    ZERO: "ZERO", 
    VERY_DIFFERENT: "VERY_DIFFERENT"
}

function error2Result(result){
    switch (result) {
	case Result_enumobj.A_BIT_DIFFERENT:
	 return Error_enumobj.FP_ROUNDING;
	break;
	case Result_enumobj.INFINITY:
	    return Error_enumobj.FP_OVERFLOW;
	break;
	case Result_enumobj.ZERO:
	    return Error_enumobj.FP_UNDERFLOW;
	break;
	case Result_enumobj.VERY_DIFFERENT:
	    return Error_enumobj.INT_OVERFLOW;
	break;
	default:
		return 'Invalid Error value';
}

}

console.log('Error list: ', Object.values(Error_enumobj));
var validArg = false;
while(!validArg){
    var input = prompt("Input: ");
    let result = error2Result(input);
    if (Object.values(Result_enumobj).includes(result)){
        validArg = true;
		console.log(input + " results in " + error2Result(input));
    }
    else{
        console.log(result);
    }
}
