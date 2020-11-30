
function convertPhoneLetters(input) {

  // 1. You forgot to verify the length of the string
  if (input.length !== 10) return false;

  input = input.toLowerCase();
  // 2. Use 'let' to declare variables
  // 3. The variable name is changed to the camel case.
  let phoneNumber = '';
  // 4. for..of loop is better in this situation
  for (let character of input) {

    switch (character) {
      // 5. I changed all your double quotes to single quotes to make them uniform
      case '0': phoneNumber += '0'; break;
      case '1': phoneNumber += '1'; break;
      case '2': phoneNumber += '2'; break;
      case '3': phoneNumber += '3'; break;
      case '4': phoneNumber += '4'; break;
      case '5': phoneNumber += '5'; break;
      case '6': phoneNumber += '6'; break;
      case '7': phoneNumber += '7'; break;
      case '8': phoneNumber += '8'; break;
      case '9': phoneNumber += '9'; break;

      // 6. I added some spaces to make the code more readable
      case 'a': case 'b': case 'c':           phoneNumber += '2'; break;
      case 'd': case 'e': case 'f':           phoneNumber += '3'; break;
      case 'g': case 'h': case 'i':           phoneNumber += '4'; break;
      case 'j': case 'k': case 'l':           phoneNumber += '5'; break;
      case 'm': case 'n': case 'o':           phoneNumber += '6'; break;
      case 'p': case 'q': case 'r': case 's': phoneNumber += '7'; break;
      case 't': case 'u': case 'v':           phoneNumber += '8'; break;
      case 'w': case 'x': case 'y': case 'z': phoneNumber += '9'; break;

      default: 
        // 7. The default behaviour for unrecognised character is better to throw an error.
        return false;
    }
  }

  return phoneNumber;
}
// Considering this is only the 2nd day you been into JavaScript, you did an
// excellent job. Don't treat my modifications as critics. If I really don't
// like your code, you probably won't recognise your function at all after
// my modification. Such thing happened a lot when I review codes from others.