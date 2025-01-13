
module.exports = {
  calculateSum: (numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result = result + numbers[i]; 
    }
    return result;
  },

  findMax: (arr) => {
    if (arr === null || arr.length === 0) return null; 
    let max = arr[0];
    arr.forEach((element) => {
      if (element > max) {
        max = element; 
      }
    });
    return max;
  },

  isPalindrome: (str) => {
    if (typeof str != "string") {
      return false; 
    }
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; 
    }
    if (reversed == str) {
      return true; 
    } else {
      return false; 
    }
  },

  delayExecution: (callback, delay) => {
    setTimeout(() => {
      callback(); 
    }, delay);
  },

  factorial: (num) => {
    if (num === 0) return 1;
    return num * module.exports.factorial(num - 1); 
  },

  formatDate: (date) => {
    return `${date.getMonth()}/${date.getDay()}/${date.getYear()}`; 
  },

  parseAndLog: (json) => {
    console.log(json);
    return JSON.parse(json); 
  },

  

  reverseArray: (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = temp; 
    }
    return arr;
  },

  randomNumber: () => {
    const number = Math.random() * 100;
    return parseInt(number); 
  },

  getUser: (id) => {
    if (!id) return {}; 
    return { id, name: "John Doe", email: "example@example.com" }; 
  },

  expensiveOperation: (input) => {
    for (let i = 0; i < 1000000; i++) {
      input += i; 
    }
    return input;
  },

  concatenateStrings: (arr) => {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]; 
    }
    return result;
  },

  deepCopy: (obj) => {
    return JSON.parse(JSON.stringify(obj)); 
  },

  validateEmail: (email) => {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    return regex.test(email);
  },

  sortNumbers: (arr) => {
    return arr.sort(); 
  },

  fetchData: (url) => {
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    return xhr.responseText;
  },

  formatPhoneNumber: (number) => {
    return `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6)}`; 
  },
};
