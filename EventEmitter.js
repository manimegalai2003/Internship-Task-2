class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  off(eventName, listener) {
    if (!this.events[eventName]) return;
    
    this.events[eventName] = this.events[eventName].filter(
      fn => fn !== listener
    );
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return;
    
    this.events[eventName].forEach(listener => {
      listener(...args);
    });
  }

  once(eventName, listener) {
    const onceListener = (...args) => {
      listener(...args);
      this.off(eventName, onceListener); 
    };
    this.on(eventName, onceListener);
  }
}

const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

emitter.on('greet', greet);
emitter.on('greet', sayGoodbye);

emitter.emit('greet', 'John'); 

emitter.off('greet', sayGoodbye);
emitter.emit('greet', 'Jane'); 

emitter.once('welcome', (name) => {
  console.log(`Welcome, ${name}!`);
});

emitter.emit('welcome', 'Alice'); 
emitter.emit('welcome', 'Bob'); 