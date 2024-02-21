let db;
const open = indexedDB.open("managerDB");

open.onerror = (event) => {
	console.error(`Database error: ${event.target.errorCode}`);
};
open.onsuccess = (event) => {
	db = event.target.result;
};

open.onupgradeneeded = (event) => {
	// Save the IDBDatabase interface
	const db = event.target.result;

	// Create an objectStore for this database
	var store = evt.currentTarget.result.createObjectStore(DB_STORE_NAME, { keyPath: "id", autoIncrement: true });
      store.createIndex('biblioid', 'biblioid', { unique: true });
      store.createIndex('title', 'title', { unique: false });
      store.createIndex('year', 'year', { unique: false });

function addItem() {
    const item = {
        name: 'banana',
        price: '$2.99',
        description: 'It is a purple banana!',
        created: new Date().getTime(),
    };
    const tx = db.transaction("myDatabaseStore", "readwrite");
    const store = tx.objectStore('myDatabaseStore');
    store.add(item);
}
};
