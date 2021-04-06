const findMissingLetter = (array) => {
    for (let i = 1; i < array.length; i++) {
      const prev = array[i - 1].charCodeAt();
      const current = array[i].charCodeAt();
      if (current - prev !== 1) {
        return String.fromCharCode(prev + 1);
      }
    }
    
    return undefined;s
  }
  const list_letters_first = ["c","d","e","g","h"];
  const list_letters_second = ["X","Z"];
  
  console.log("list_letters_first = " + findMissingLetter(list_letters_first));
  console.log("list_letters_second = " + findMissingLetter(list_letters_second));