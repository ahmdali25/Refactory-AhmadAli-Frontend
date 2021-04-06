// Censorinh Words
const str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
const arr = [12, 13, 14, 15, 16, 52, 53, 54, 55, 150, 151, 152, 153, 192, 193, 194, 195, 313, 314, 315, 316, 317, 318, 374, 375, 376, 377, 378, 379, 380, 381, 438, 439, 440, 441, 442, 443, 444];
const replceWithAsterisk = (str, indices) => {
   let res = '';
   res = indices.reduce((acc, val) => {
      acc[val] = '*';
      return acc;
   }, str.split('')).join('');
   return res;
};
console.log(replceWithAsterisk(str, arr));