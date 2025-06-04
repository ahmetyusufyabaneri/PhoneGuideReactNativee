import {db} from '../config';

export const getPersonsCount = (group_id, setPersonsCount, setPersons) => {
  db.transaction(txn => {
    txn.executeSql(
      `SELECT * FROM persons JOIN groups ON persons.group_id = groups.id 
       WHERE groups.id = ?;`,
      [group_id],
      (sqlTxn, results) => {
        let data = [];

        if (results?.rows?.length > 0) {
          for (let i = 0; i < results?.rows?.length; i++) {
            let item = results?.rows?.item(i);
            data.push(item);
          }
        }

        setPersonsCount(results?.rows?.length);
      },
      error => console.log(error),
    );
  });
};
