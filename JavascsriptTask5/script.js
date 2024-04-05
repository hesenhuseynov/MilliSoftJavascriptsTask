
// 1
// let firstNumberInput =document.getElementById("input1")
// let secondNumberInput =document.getElementById("input2");
//
//
//
//    let sum=document.getElementById("sum");
//    let minus=document.getElementById("minus");
//    let multply=document.getElementById("multply");
//    let divide=document.getElementById("substr");
//
//
//    function calculate(operation){
//       const firstNumber=Number(firstNumberInput.value);
//       const secondNumber=Number(secondNumberInput.value);
//
//       if (!isNaN(firstNumber) && !isNaN(secondNumber)){
//          let result;
//          switch (operation){
//             case 'add':
//                result=firstNumber+secondNumber;
//                break;
//
//             case 'minus':
//                result=firstNumber-secondNumber;
//                break;
//
//             case 'multiply':
//                result=firstNumber*secondNumber;
//                break;
//
//             case 'divide':
//                if (secondNumber!==0){
//                   result =firstNumber/secondNumber
//                }
//                else{
//                   console.log(" 0 a bolune bilmez")
//
//                   return;
//
//                }
//                break;
//
//          }
//           console.log(result);
//
//
//       }
//       else {
//          console.log("  reqem daxil edilmelidir  ")
//       }
//
//
//
//    }
//
// sum.addEventListener("click", () => calculate('add'));
// minus.addEventListener("click", () => calculate('minus'));
// multply.addEventListener("click", () => calculate('multiply'));
// divide.addEventListener("click", () => calculate('divide'));
//
//


//2 ci
// let input1=document.getElementById("inputText");
//
// let convert=document.getElementById("convertt");
//
//
//
//    function reverseWord(input1){
//       let inputValue=input1.value;
//
//       if ( !isNaN(inputValue)) {
//
//          console.log("enter a cahracter not a number");
//       }
//       else{
//          //eger tek soz yox cumle  olaraq  giribse cumleni  burada tersine cevirirem
//          if (inputValue.includes('')){
//             let words = inputValue.split(' ');
//             let reversedWords = words.map(word => word.split('').reverse().join(''));
//             let result = reversedWords.join(' ');
//             console.log(result);
//          }
//          else {
//
//
//             let result = inputValue.split('').reverse().join('');
//             console.log(result);
//          }
//
//       }
//
//
//    }
//
//
//    convert.addEventListener("click",()=>reverseWord(input1));

//3 cu tapsiriq
// let input1=document.getElementById("inputfirst");
// let input2=document.getElementById("inputsecond");
// let input3=document.getElementById("inputthird");
// let button=document.getElementById("submitbutton");
// let changedDiv=document.getElementById("changediv");
//
//
// function addParameters() {
//     let inputwidthvalue = input1.value;
//     let inputheightvalue = input2.value;
//     let inputthirdValue = input3.value;
//
//     let borderStyleValue = document.getElementById("firstselectionsection").value;
//     let borderColorValue = document.getElementById("secondselectionsection").value;
//     let divColorValue = document.getElementById("thirdselectionSection").value;
//     let backgroundColorValue = document.getElementById("fourthselectionSection").value;
//
//     console.log(backgroundColorValue);
//
//     changedDiv.style.width = inputwidthvalue + "px";
//     changedDiv.style.height = inputheightvalue + "px";
//     changedDiv.style.borderWidth = inputthirdValue + "px";
//     changedDiv.style.borderStyle = borderStyleValue;
//     changedDiv.style.borderColor = borderColorValue;
//     changedDiv.style.color = divColorValue;
//     changedDiv.style.backgroundColor = backgroundColorValue;
// }
//
// button.addEventListener("click", addParameters);

//4 cu tapsiriq

