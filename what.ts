// What is functional programing

/*
 * 1. Higher order functions + closures
 * 2. Immutable data + purity
 * 3. Declarative: structure of code looks like structure of data
 */

// 1. higher order functions + closures

// basic concept 1 - function = data

function greet(name: string) {
  console.log(`Hello, ${name}`);
}

const greet1 = greet;
// greet1('Oliver');

function applyGreeter(greeter: (name: string) => void, name: string) {
  greeter(name);
}

// applyGreeter(greet1, 'Oliver');

const names = ['Oliver', 'Yumi', 'Wen', 'Tom'];

// for (let i=0; i<names.length; i++) {
//     greet(names[i])
// }

// names.forEach(greet);

const forEachCustom = <T>(array: T[], f: (arg: T) => any) => {
  for (let ele of array) {
    f(ele);
  }
};

// forEachCustom(names, greet);

// Closures
// basic concept 2 - closure = function that depends on outer state

function makeGreeter(greeting: string) {
  return (name: string) => console.log(`${greeting}, ${name}`);
}

const helloGreeting = makeGreeter('hello');
// helloGreeting('Chiahong');

// Decorators
const log = (f, name = f.name) => {
  return (...args) => {
    console.log(`Called ${name} at ${new Date()}`);
    return f(...args);
  };
};

const slack = {
  sendTo: ({ channel, msg }) => {
    console.log('sent to ', channel, 'msg: ', msg);
  },
};

const notifySlack = (f, channel, name = f.name) => {
  return (...args) => {
    slack.sendTo({ channel, msg: `@${name} at ${new Date()}` });
    return f(...args);
  };
};

const loggedGreet = notifySlack(log(greet), '#greet-logs', 'greet');
loggedGreet('Hello');
