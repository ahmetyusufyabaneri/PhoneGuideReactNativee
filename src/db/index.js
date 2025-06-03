import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase('myDatabase.db', '1.0', '', 1);

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT
        );`,
      [],
      (sqlTx, res) => console.log('Table created'),
      err => console.log(err),
    );
  });
};

export const getGroups = () => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM groups`,
      [],
      (sqlTx, res) => console.log('Groups recieved'),
      err => console.log(err),
    );
  });
};

export const addNewGroup = title => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO groups (title) VALUES (?)`,
      [title],
      (sqlTx, res) => console.log('New group added'),
      err => console.log(err),
    );
  });
};
