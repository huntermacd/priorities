import { EventEmitter } from 'fbemitter';

let priorities;
const emitter = new EventEmitter();

const store = {
  init() {
    const storage = 'localStorage' in window
      ? localStorage.getItem('priorities')
      : null;

    if (!storage) {
      priorities = [{}];
    } else {
      priorities = JSON.parse(storage);
    }
  },
  getPriorities() {
    return priorities;
  },
  setPriorities(newPs) {
    priorities = newPs;
    if ('localStorage' in window) {
      localStorage.setItem('priorities', JSON.stringify(newPs));
    }
    emitter.emit('change');
  },
  addListener(eType, func) {
    emitter.addListener(eType, func);
  },
};

export default store
