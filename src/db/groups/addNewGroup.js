import {db} from '../config';

export const addNewGroup = title => {
  db.transaction(txn => {
    txn.executeSql(
      `INSERT INTO groups (title) VALUES (?);`,
      [title],
      (sqlTxn, results) => console.log('New group added', sqlTxn, results),
      error => console.log(error),
    );
  });
};
