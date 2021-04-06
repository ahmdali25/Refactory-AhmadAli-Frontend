const string1 = 'Mammals';
const string2 = "Bruiser build";
const countFrequency = str => {
   const frequency = {};
   for(char of str.toLowerCase()){
      if(!frequency[char]){
         frequency[char] = 1;
      }else{
         frequency[char]++;
      };
   };
   return frequency;
};
console.log(countFrequency(string1));
console.log(countFrequency(string2));