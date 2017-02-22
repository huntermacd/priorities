import store from './store';

const actions = {
  create(newP) {
    let updatedPs = store.getPriorities();
    updatedPs.unshift(newP);
    store.setPriorities(updatedPs);
  },
  update(id, newP) {
    let updatedPs = store.getPriorities();
    updatedPs[id] = newP;
    store.setPriorities(updatedPs);
  },
  delete(id) {
    let updatedPs = store.getPriorities();
    updatedPs.splice(id, 1);
    store.setPriorities(updatedPs);
  },
  increment(id) {
    let updatedPs = store.getPriorities();
    updatedPs.forEach((p, i, arr) => {
      if (p.id === id) {
        p.value++;
      }
    });
    store.setPriorities(updatedPs);
  },
};

export default actions
