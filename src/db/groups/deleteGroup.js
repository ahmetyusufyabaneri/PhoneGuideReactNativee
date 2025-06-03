import {db} from '../config';

export const deleteGroup = id => {
  db.transaction(txn => {
    txn.executeSql(
      `DELETE FROM groups WHERE id = ?;`,
      [id],
      (sqlTxn, results) => console.log('Group deleted', sqlTxn, results),
      error => console.log(error),
    );
  });
};
