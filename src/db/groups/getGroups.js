import {db} from '../config';

export const getGroups = setList => {
  db.transaction(txn => {
    txn.executeSql(
      `SELECT * FROM groups;`,
      [],
      (sqlTxn, results) => {
        let data = [];

        if (results?.rows?.length > 0) {
          for (let i = 0; i < results?.rows?.length; i++) {
            let item = results?.rows?.item(i);
            data.push(item);
          }

          setList(data);
        }
      },
      error => console.log(error),
    );
  });
};
