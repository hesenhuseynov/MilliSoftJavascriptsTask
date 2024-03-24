//1 ci sual
// let exampleArray=[1,3,4,5,9,2,7]
// for(let i = 0; i < exampleArray.length; i++) {
//
//  if(i % 2 === 0) {
//   console.log(exampleArray[i]);
//  }
// }

//2 ci tapşırıq
// var exampleArray=[3,6,8,10,47,45,15,60,23,35]
//
// let count=0;
// for (let i = 0; i < exampleArray.length; i++) {
//
//     if (exampleArray[i]%5===0){
//         count++
//     }
//
// }
// console.log(count);

//3 cü tapşırıq
// function findComplexNumber(number) {
//     if (number<=1) return ;
//
//     for (let i = 2; i <number ; i++) {
//         if (number%i==0){
//             return `${number}  mürəkkəb ədəddir`
//         }
//
//     }
//     return `${number}  sadə ədəddir `;
//
// }
// let inputUser=Number(prompt("bir ədəd daxil dein"));
// console.log(findComplexNumber(inputUser));

//4 cu tapsiriq

// let exampleArray=[46,78,45,34,22,33,49,15,29];
//
// function foundLastNumeric(array){
//     for (let i = array.length-1; i >=0 ; i--) {
//          if (array[i]%7===0){
//
//             return array[i];
//
//          }
//
//
//     }
//     return "7-ə bölünən sonuncu ədəd tapılmadı.";
//
// }
//
// console.log(`Array elementləri daxilində 7-ə bölünən sonuncu ədəd: ${foundLastNumeric(exampleArray)}`);


//5 ci tapşırıq

// let exampleArray = [3, 4, 8, 34, 13, 20, 34, 23, 26, 98, 225, 350, 192];
//
// function findMaxAndMin(array) {
//     let max = array[0];
//     let min = array[0];
//
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         } else if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     console.log(`maxsimum dəyər  => ${max}`);
//     console.log(`minimum dəyər  => ${min}`);
// }
//
// findMaxAndMin(exampleArray);


//6 cı tapşırıq
//  let shiftArray = [3, 4, 8, 34, 13, 20, 34, 23, 26, 98, 225, 350];
//
//  let min=Math.min(...shiftArray);
//  let max=Math.max(...shiftArray);
//
//  let minIndex=shiftArray.indexOf(min);
//  let maxIndex=shiftArray.indexOf(max);
//
//  let temp=shiftArray[minIndex];
//  shiftArray[minIndex]=shiftArray[maxIndex];
//  shiftArray[maxIndex]=temp;
//
//   console.log(shiftArray)

//7 ci tapşırıq
//
// let number=24;
//
// for (let i = 0; i <24 ; i++) {
//    if (24%i===0){
//        console.log(i);
//    }
// }

//8 ci tapşırıq
// let exampleArray=[3,4,6,7,32,2,8,0,4,32]
//  function randomElement(array){
//   let randomIndex=Math.floor(Math.random()*array.length);
//
//
//   return array[randomIndex]
//
// }
// console.log(randomElement(exampleArray));

// //9 cu tapşırıq
//
//    function unitueDigitsNumber(){
//
//     for (let i = 1; i < 100; i++) {
//     let unique=true;
//     let number=i.toString();
//
//      for (let j = 0; j <number.length ; j++) {
//       for (let k = 0; k < number.length; k++) {
//        if (j!==k&&number[j]===number[k]){
//         unique=false;
//         break;
//        }
//       }
//       if (!unique) break;
//      }
//      if (unique) {
//       console.log(i);
//      }
//     }
//    }
// unitueDigitsNumber();





// //10 cu tapşırıq
// let text1="abu";
// let text2="abas";
//
//   function checkPlindromOrnot(text) {
//
//    if (text.split( "").join()===text.split("").reverse().join()){
//      return  "polidromdur"
//    }
//    else{
//       return "polidrom deyl"
//    }
//
//
//   }
//
//   console.log(checkPlindromOrnot(text2));

//11 ci tapşırıq

//bu sort methodundan istifadə edilən birinci method

// let text1="oslo";
// let text2="solo";
//
//
// function checkAnagram(text1,text2){
//   let sortText1=text1.toLowerCase().split("").sort().join("");
//   let sortText2=text2.toLowerCase().split("").sort().join("");
//
//   if (sortText1==sortText2){
//    return "bu metnler anagramdır"
//   }
//   else{
//    return "bu mətnlər anagram deyl"
//   }
//
//
// }
//
// console.log(checkAnagram(text1,text2));

// bu da  sort methodu istifadə olunmayan ikinci method
// let text1="oslo";
// let text2="solo";
// function  checkAnagram(text1,text2){
//  if (text1.length!==text2.length){
//   return "anagram deyller"
//  }
//
//  text1=text1.toLowerCase();
//  text2=text2.toLowerCase();
//  for (let i = 0; i < text1.length; i++) {
//   let foundIndex=text2.indexOf(text1[i]);
//
//   if (foundIndex===-1){
//    return "anagram deyllər"
//   }
//   else{
//    text2=text2.slice(0,foundIndex)+text2.slice(foundIndex+1)
//   }
//
//  }
//  return "Angramdır"
//
//
// }
// console.log(checkAnagram(text1,text2))


// //12 ci tapşırıq
//  let example1Array=[3,4,8,3,9,2,12];
//  let example2Array=[4,6,8,4,2,7,3];
//  let finallyArray=[]
//
// for (let i = 0; i < example1Array.length; i++) {
//
//     let result= example1Array[i]*example2Array[i];
//  finallyArray.push(result)
// }
//
// console.log(finallyArray)

//13 cu tapsiriq
// let saitler=[ "a", "ı", "o", "u","e","ə","i","ö","ü"];
//
// let text="salam necesen";
//  function removeSait(text) {
//   let newText="";
//   for (let i = 0; i <text.length ; i++) {
//    if (!saitler.includes(text[i])){
//     newText+=text[i]
//    }
//
//   }
//
//   return newText;
//
//  }
// console.log(removeSait(text));
// alternativ filter methodlu   forması *_* he he he  love you filter (-_-)
// const removeSait = (text) => {
//  return text.split('').filter(c => !saitler.includes(c)).join('');
// }
//
// console.log(removeSait("salam necesen"));




//14 cü tapşırıq
// function generateRandomString(length) {
//  let result = '';
//  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//  const charactersLength = characters.length;
//  for (let i = 0; i < length; i++) {
//   result += characters.charAt(Math.floor(Math.random() * charactersLength));
//  }
//  return result;
// }
//
//
// console.log(generateRandomString(9));


//15 ci sual

// let numbers=[4,5,6,3,4,7,8,10,23]
// function EdediOrta(numbers) {
//  let sum=0;
//  for (let i = 0; i <numbers.length; i++) {
//   sum+=numbers[i];
//  }
//  let result=sum/(numbers.length-1)
// return result;
//
// }
// let average = EdediOrta(numbers);
// console.log(average);

//16 cı sual
// const vowels = ["a", "e", "ə", "i", "ı", "o", "ö", "u", "ü"];
// const consonants = ["b", "c", "ç", "d", "f", "g", "ğ", "h", "x", "j", "k", "q", "l", "m", "n", "p", "r", "s", "ş", "t", "v", "y", "z"];
//
// let exampleText="HHAalleluuyyya";
// let exmpText=exampleText.toLowerCase()
//
// function countVowelsConsonants(text) {
//  let vovelcount=0;
//  let consonantscount=0;
//  for (let i = 0; i <exmpText.length ; i++) {
//   if (vowels.includes(exmpText[i])){
//    vovelcount++;
//   }
//   else if(consonants.includes(exmpText[i])){
//    consonantscount++
//   }
//   else{
//    console.log("textin dili ve yaxud formatı uygun deyl ")
//   }
//  }
//
//  return ` sait sayı: ${vovelcount} və samit sayı: ${consonantscount}`;
//
//
// }
// console.log(countVowelsConsonants(exampleText))
//17 ci sual

//
// function isPerfrectNumber(number){
//     let sum=0;
//  for (let i = 0; i < number; i++) {
//      if (number%i===0){
//        sum+=i;
//      }
//
//  }
//  if (sum===number){
//   console.log(`${number} mukemmel ededdir`)
//  }
//  else{
//   console.log( `${number} mukemmel eded deyl`)
//  }
// }
// isPerfrectNumber(6);

//18 ci sual

// function sumNumber(number){
//   let sum=0;
//    let currenNumber=number;
//      while (currenNumber>0){
//        sum+=currenNumber%10;
//        currenNumber=Math.floor(currenNumber/10);
// }
//  return sum;
// }
// console.log(sumNumber(326));

// mırta forla  da etmeye calisdim whıle varken sırf bu sert olan bir taskda  for yazma menasiz olsa da

// function sumNumber(number) {
//   let sum=0;
//  for ( let currentNumber=number; currentNumber>0 ;currentNumber=Math.floor(currentNumber/10)) {
//   sum+=currentNumber%10;
//
//  }
//  return sum;
// }

// console.log(sumNumber(326))

//19 cu tapsiriq
//  let text="Hesendir";
//
//
//  function customSubstringMethod(index1,index2) {
//   if (index1>index2 || index1<0 || index2>=text.length){
//    return "girdiyini parametre duz deyl"
//   }
//
//   let newTextArray=[];
//
//   for (let i = index1; i <index2 ; i++) {
//
//     newTextArray.push(text[i])
//
//   }
//   return newTextArray.join('')
//
//  }
//
// console.log(customSubstringMethod(2,6))
//20 ci tapşırıq
//IndeOf methodunun 2 ci optional olan  parametrini(fromIndex) de ele aldim bu customMethodda
// let exampleArray=[3,4,6,3,7,3];
//   function customIndexOf(searchElement,fromIndex=0) {
//    if (fromIndex>=exampleArray.length){
//     return -1;
//    }
//     let customFromIndex=fromIndex<0?Math.max(exampleArray.length+fromIndex,0):fromIndex;
//
//    for (let i = customFromIndex; i <exampleArray.length ; i++) {
//     if (exampleArray[i]===searchElement){
//          return i;
//      }
//    }
//    return -1
//   }
// console.log(customIndexOf(7,-145));


