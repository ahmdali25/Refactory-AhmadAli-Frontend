let str = '23dn3ir30fd2eddd';
let replaced = str.replace(/.(?=.{3,}$)/g, '*');
console.log(replaced);