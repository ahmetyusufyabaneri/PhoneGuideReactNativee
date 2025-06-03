import {db} from '../config';

export const createPersonsTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        surname TEXT,
        phone TEXT,
        company TEXT,
        email TEXT,
        address TEXT,
        FOREIGN KEY (group_id) REFERENCES groups(id)
      );`,
      [],
      (sqlTxn, results) =>
        console.log('Persons table created', sqlTxn, results),
      error => console.log(error),
    );
  });
};
