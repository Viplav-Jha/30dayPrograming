function anagram(str1,str2){
     if(str1.length !==str2){
        return false
     }

     const charCount ={}

     //Increment the character count for str1
     for(const char of str1){
        charCount[char] =(charCount[char] || 0)+1
     }
    //Decrement the character count for str1
     for(const char of str2){
       if(!charCount[char]){
        return false
       }
     charCount[char]   -= 1;
}
}
const string1 ="listen"
const string2="slient"

if(anagram(string1,string2)){
     console.log(`${string1} and ${string2} are anagram`)
} else{
    console.log(`${string1} and ${string2} are not anagram`)
}
