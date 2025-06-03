import {db} from '../config';

export const createGroupsTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT
      );`,
      [],
      (sqlTxn, results) => console.log('Groups table created', sqlTxn, results),
      error => console.log(error),
    );
  });
};
