 

//1ci sual

// //cəm
//  var array=[2,3,4,6,7,8,9];

//  let sum=0;


//  for (let i = 0; i < array.length; i++) {
     
//     sum+=array[i];
     

    
//  }
//  console.log("Cəm " ,sum);
// //hasil
//  var araymultply=[2,3,4,6,7,8,9];
//  var multiply=1;
//  for (let i = 0; i < araymultply.length; i++) {
//     multiply*=araymultply[i]
    
//  }

//  console.log("Sum",multiply);


 
// console.log(multply);




//2 ci sual

// const array = [4, 6, 3, 4, 7, 5, 7, 2, 3];

// function deleteDublicateArray(array){
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array.indexOf(array[i], 0) !== i) { 
//       array.splice(i, 1); 
//     }
//   }
//   return array;
// }

// let result=deleteDublicateArray(array);
// console.log(result);

//3ci sual

// function reverseWord(text) {
//     let reverse= text.split('').reverse().join('');
//     return reverse;
// }
//
// let inputText = "Hello";
// let reversedText = reverseWord(inputText);
// console.log(reversedText); // "olleH"

//4 cu sual
// function reverseSentence(sentence) {
//     return sentence.split(' ').reverse().join(' ');
// }
//
// let inputText ="Ideals are peaceful, history is violent" ;
// let reversedSentence = reverseSentencene(inputText);
// console.log(reversedSentence);


//5 ci sual

// function numbertoWord(inputNumber) {
//     let result;
//     switch (inputNumber) {
//         case 1:
//             result = "bir";
//             break;
//         case 2:
//             result = "iki";
//             break;
//         case 3:
//             result = "üç";
//             break;
//         case 4:
//             result = "dörd";
//             break;
//         case 5:
//             result = "beş";
//             break;
//         default:
//             result = "undefined";
//     }
//     console.log(result);
// }
//
//
// numbertoWord(1);



//8 ci sual


// var userInput=prompt("bir cümlə girin");




// function getWordsSentence(userInput){

//     var words=userInput.split(" ");
// return words.length;

// }

// console.log("Word count:" ,getWordsSentence(userInput));


//9 cu  sual


// let text="Senden deyilen seyleri etmek";
// let removedSpaceBetweenwords=text.split(" ").join("");
// console.log(removedSpaceBetweenwords);


//10 cu sual


// const sentence="name";

// var firstLetterinsentenceuppercase=(sentence)=>{
   
//    let firstspaceindex=sentence.indexOf(' ');
    
//    let firstword=sentence.slice(0,firstspaceindex);
//    let restOfSentence=sentence.slice(firstspaceindex);

//    return firstword[0].toUpperCase() + firstword.slice(1) + restOfSentence;


// }

// console.log(firstLetterinsentenceuppercase("çəkülün namiqnən makedon vuruşceylər"));




//11 ci sual;

// let array1 = [1, 4, 3];
// let array2 = [1, 2, 3];


// function equalityArrays( array1,array2){
//    if (array1.length !== array2.length) {
//         console.log("uzunluqlar beraber deyl");
//         return;
//     }
//
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//         console.log("beraber deyl");
//         return;
//     }
// }

//
//     console.log("beraberdir");
    

// }

// equalityArrays(array1,array2);



//12
//selection sort mentiqi istifadə eledim
//artma
//  var exampleArray=[3,4,6,7,9,34,65,73,2,8,]


//   function ArrayGrowing(exampleArray){
//     let lengthArray=exampleArray.length;
//      for (let i = 0; i < exampleArray.length; i++) {
//          let minimumIndex=i;
//          //console.log(` this is minimum index=> ${minimumIndex}`);
// debugger;

//          for (let j = i+1; j < exampleArray.length; j++) {
//             if (exampleArray[j]<exampleArray[minimumIndex]) {
//                 minimumIndex=j
                
//             }
            
//          }
//          let temp=exampleArray[minimumIndex];
//           exampleArray[minimumIndex]=exampleArray[i];
//           exampleArray[i]=temp;

//      }
//      return exampleArray;

    

//   }


//   console.log(ArrayGrowing(exampleArray));

//azalma
//  var exampleArray = [3, 4, 6, 7, 9, 34, 65, 73, 2, 8];

//  function ArrayDecrasing(exampleArray) {
//     let lengthArray=exampleArray.length;
//     for (let i = 0; i < lengthArray; i++) {
//          let maximumIndex=i;

//          for (let j = i+1; j < lengthArray; j++) {
//             if (exampleArray[j]>exampleArray[maximumIndex]) {
//                 maximumIndex=j
//             }

         
            
//          }
//          let temp=exampleArray[maximumIndex];
//          exampleArray[maximumIndex]=exampleArray[i];
//          exampleArray[i]=temp;
        
//     }
//     return exampleArray
    
//  }


//    console.log(ArrayDecrasing(exampleArray));
//13 cu sual
//  var text=" ADNA da oldugun muddetce ADNA da qalmalısan";
//
// var result= text.replaceAll("ADNA","ADNSU");
// console.log(result);

//14 cu sual

// function monthlSalary(hourssalary,workhourWeek ) {
//      if (workhourWeek>40){
//        let result2=  hourssalary*workhourWeek*2
//          return result2;
//      }
//
//     var result= hourssalary*workhourWeek;
//     console.log(result);
//
//     return result;
//
//
//
// }
// console.log( `işçinin aylıq emekk haqqı ${monthlSalary(5,100)}`)


//15
//
// function sumdigitsNumber(number) {
//     if (number<100||number>999){
//         console.log("3 reqemli eded daxil edilmelidir")
//       return;
//     }
//
//     let hunderds=Math.floor(number/100);
//     let tens=Math.floor((number%100)/10);
//     let ones=number%10;
//
//     const sum =hunderds+tens+ones;
//     return sum;
//
// }
//
// const number=689;
// const sum = sumdigitsNumber(number);
// console.log(`'${number}' ədədinin rəqəmlərinin cəmi: ${sum}`);
//


//16


// function findequalentnumberOfText (text1,text2){
//     const words1 = text1.split(/\s+/);
//     const words2 = text2.split(/\s+/);
//     let equvalentcount=0;
//
//     for (let i = 0; i <words1.length-2 ; i++) {
//         for (let j = 0; j <words2.length-2 ; j++) {
//             if (words1[i]===words2[j] && words1[i + 1] === words2[j + 1] && words1[i + 2] === words2[j + 2]){
//                 equvalentcount++;
//                 i+=2;
//                 break;
//             }
//         }
//     }
// return equvalentcount;
//
// }
//
// const text1 = "Avtobusdan əl elədim amma maşınıvuzdan eləmədüz də da bə ";
// const text2 = "Getdim çıxdım salyanın kruquna Avtobusdan əl elədim amma siz eləmədüz  də da bə ";
//
// console.log(findequalentnumberOfText(text1, text2));












//17
// var exampleText="salam sən necəsən salam mən də yaxşıyam necəsən"


// function duplicateWordsCount(exampleText) {
// var words=exampleText.split(" ");
// var countofwords=[];
// var duplicatecount=0;


// for (let i = 0; i < words.length; i++) {
//     var word=words[i];
//     var wordCount=0;

//     if (!countofwords.includes(word)) {
//         for (let j = 0; j < words.length; j++) {
//             if (word===words[j]) {
//                  wordCount++;
//             }
            
//         }

//         if (wordCount>1) {
//             duplicatecount++;
//             countofwords.push(word);
            
//         }

        
//     }
    
// }
// return duplicatecount;


    
// }


// console.log(duplicateWordsCount(exampleText));

// var text1=" Slam burdan kecirem sen neynedin abi ";
// var  text2="Salam burdan kecirdiler sen neynedin abi";


// for (let i = 0; i < array.length; i++) {
//     exampleText.split(" ").join();


     
// }



//

//  var prosesWorker=function ()=>{}







