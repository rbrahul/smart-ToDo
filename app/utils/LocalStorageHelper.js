import store from './../stores/store.js';

export function getStoreFromLocalStorage(){
    const localStorageJSON = localStorage.getItem('todos');
    const localStore=JSON.parse(localStorageJSON);
    return localStore;
}
