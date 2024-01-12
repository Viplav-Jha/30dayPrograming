function anagram(str1,str2){
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('')

}

const string1 ="listen";
const string2 ="slient";

if(anagram(string1,string2)){
    console.log(`${string1} and ${string2} are anagram`)
} else{
    console.log(`${string1} and ${string2} are not anagram`)
}