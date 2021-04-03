// pure functions

let num = 123;

function toString(val: number): string {
  num = val;
  return val.toString();
}

const str = toString(num);

// immutable data

const data = Object.freeze([1, 2, 3, 4, 5, 6]);

// functions as arguments

const addEmoji = val => toString(val) + ' 😁️ ';

const emojiData = data.map(addEmoji);
console.log(emojiData);

// functions as return value

const appendEmoji = fixed => dynamic => fixed + dynamic;

const rain = appendEmoji('🌧️');
const sun = appendEmoji('🌞️');

console.log(rain('  today'));
console.log(sun(' tomorrow'));
