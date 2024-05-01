import { isPalindrome } from '../utils';



describe('isPalindrome', () => {
    test('should return true for a palindrome word', () => {
      expect(isPalindrome("racecar")).toBe(true);
    });
  
    test('should return false for a non-palindrome word', () => {
      expect(isPalindrome("car")).toBe(false);
    });
  
    test('should return true for a palindrome word with different cases', () => {
      expect(isPalindrome("Madam")).toBe(true);
    });
  
     test('should return false for an empty string', () => {
      expect(isPalindrome("")).toBe(false);
    });
  
    test('should throw an error for input with non-alphabetic characters', () => {
      expect(() => {
        isPalindrome("12321");
      }).toThrow();
    });
  
    test('should throw an error for input that is not a string', () => {
      expect(() => {
        isPalindrome(12321);
      }).toThrow();
    });
  });
  