function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const concatenatedStr1 = str1 + str1;
  
    return concatenatedStr1.includes(str2);
  }
  
  console.log(isRotation("waterbottle", "erbottlewat")); // Should output true
  console.log(isRotation("hello", "lohel")); // Should output true
  console.log(isRotation("abc", "bca")); // Should output false
  