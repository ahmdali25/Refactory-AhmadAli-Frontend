//Count words
function countWord(string, word) {
    return string.split(word).length -1;
}

let text = "Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambuLa... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali"
let countFirstWord = countWord(text,"Aku");
let countSecondWord = countWord(text,"Ingin");
let countThirdWord = countWord(text,"Dapat");
console.log("word 'Aku' : " + countFirstWord, "word 'Ingin' : " + countSecondWord, "word 'Dapat' : " + countThirdWord);