const STORAGE_KEY = 'todo-vuejs';

export default {
  fetch () {
    return JSON.parse(localStorage[STORAGE_KEY] || '[]');
  },
  save (items) {
    localStorage.setItem(STORAGE_KEY , JSON.stringify(items) );
    console.log($);
  }
}
