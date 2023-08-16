export class Randomizers {
  static getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  static shuffleArr = (arr) => {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  };

  static genRandomElements = (list, count) => {
    let arrayCopy = [...list];
    let newArray = [];
    for (let i = 0; newArray.length < count; i++) {
      let randNum = Math.floor(Math.random() * arrayCopy.length);
 
      let splicedItem = arrayCopy.splice(randNum, 1)[0];
      newArray.push(splicedItem);
    }
    return newArray;
  };
}