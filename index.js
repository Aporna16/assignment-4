//Problem 1: Let's play a mind game
function mindGame(number){
    let number1 = number;
    const number2 = number1 * 3; 
    const number3 = number2 + 10;
    const number4 = number3 / 2;
    const total = number4 - 5;
    if(number > 0){
    //console.log(total);
    return total;
    }  
    else{
        return ('error') //Error: only put positive number && If number is not 'number'type variable use-->if(typeof number!='number'){return 'enter a number..}
     }
}
//let ans = mindGame(50); 
//console.log(ans);
mindGame();
//Description: Simple math calculation using multiplication, addition, division, subtraction and return total value... 


//Problem 2:Finding even or odd
function evenOdd(){
    let evenOdd = 'Batch7';
    if(evenOdd.length %2 == 0){
        console.log('even');
        return ('even');
    }
    else{
        console.log('odd');
        return ('odd');
    }
}
evenOdd();
//Description: From the length of string data type, shown the output even or odd.When % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd...


//Problem 3: Is less or greater than???
function isLGSeven(number){
    let num1 = number;
    let num2 =num1 * 2;
    let difference = num1 - 7;
    if( difference < 7){
     //console.log(difference);
     return difference;
    }
    else{
     //console.log(num2);
     return num2;
    }
 }
 //let result = isLGSeven(-15);
 //console.log(result);
 isLGSeven();
//Description: It is required to compare the value of one variable with other. The comparison operators take simple values (numbers or string) as arguments and evaluate either true or false.


//Problem 4: Finding Bad Data
/*
let array = [-4,-9,-5,-33,-55];
let count = 0;
for(let i = 0; i<array.length; i++){
    const element = array[i];
    console.log(element)
    if(element >= 0){
        console.log("Good Data.")
    }
    else{
        console.log("Bad Data.")
    }
}*/
function findingBadData(array){
    let count =0;
    for(let i = 0; i<array.length; i++){
        const element =array[i];
        if(element < 0) count++
    }
    return count;
}
//let result =findingBadData([-4,-9,-5,-33,-55]);
//console.log(result);
//Description:Traverse the elements in the array one by one.For each element, check if the element is less than 0. If it is, then increment the count of negative elements.For each element, check if the element is greater than 0. If it is, then increment the count of positive elements.Print the count of negative and positive elements...

          
//problem 5:Convert gems into diamond... 
function gemsToDiamond(gem1, gem2, gem3){
    let firstFrienderGemsPower = gem1 * 21 ;
    let secondFrienderGemsPower =gem2 * 32 ;
    let thirdFrienderGemsPower =gem3 * 43;
    let totalGems = firstFrienderGemsPower + secondFrienderGemsPower + thirdFrienderGemsPower;
    let totalGems1= 1000*2;
    let ans = totalGems - 2000;
    if(totalGems>totalGems1){
     //console.log(ans);
     return ans;
    }
    else {
     //console.log(totalGems);
    return totalGems;
    }
}
//let gems = gemsToDiamond(20,200,50);
//console.log(gems);
gemsToDiamond();
//Description: If totalGems is greater than totalGems1 then return answer(subtraction).Otherwise shown totalGems...