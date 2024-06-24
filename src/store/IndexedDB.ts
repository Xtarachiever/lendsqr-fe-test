export const openIndexedDB = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const openRequest: IDBOpenDBRequest = indexedDB.open('LendsqrUserDB', 1);
  
      openRequest.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db: IDBDatabase = (event.target as any).result;
        db.createObjectStore('userDetails', { keyPath: 'username' });
      };
  
      openRequest.onsuccess = (event: Event) => {
        const db: IDBDatabase = (event.target as any).result;
        resolve(db);
      };
  
      openRequest.onerror = () => {
        reject(new Error('Failed to open IndexedDB'));
      };
    });
};

export const storeUserDetailsInIndexedDB = (userDetails: any) => {
    openIndexedDB()
      .then((db) => {
        const transaction = db.transaction('userDetails', 'readwrite');
        const userDetailsStore = transaction.objectStore('userDetails');
        userDetailsStore.add(userDetails);
      })
      .catch((error) => {
        console.error('Error storing user details in IndexedDB:', error);
      });
  };

  export const retrieveUserDetailsFromIndexedDB = (username: string) => {
    return new Promise<any>((resolve, reject) => {
      openIndexedDB()
        .then((db) => {
          const transaction = db.transaction('userDetails', 'readonly');
          const userDetailsStore = transaction.objectStore('userDetails');
  
          const getDetailsRequest = userDetailsStore.get(username);
  
          getDetailsRequest.onsuccess = () => {
            const storedUserDetails = getDetailsRequest.result;
            if (storedUserDetails) {
              resolve(storedUserDetails);
            } else {
              reject(new Error('User details not found in IndexedDB.'));
            }
          };
  
          getDetailsRequest.onerror = () => {
            reject(new Error('Failed to retrieve user details from IndexedDB.'));
          };
        })
        .catch((error) => {
          console.error('Error opening IndexedDB:', error);
          reject(error);
        });
    });
  };