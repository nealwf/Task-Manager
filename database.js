let db;
const open = indexedDB.open("managerDB");

open.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
};
open.onsuccess = (event) => {
  db = event.target.result;
};