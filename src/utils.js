export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw ("Input must be a string");
    }
    
    if (!/^[A-Za-z]+$/.test(word)) {
        throw ("Input must contain only alphabetic characters");
      }
  
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    const reversedWord = cleanWord.split('').reverse().join('');
  
    return cleanWord === reversedWord;
  }

