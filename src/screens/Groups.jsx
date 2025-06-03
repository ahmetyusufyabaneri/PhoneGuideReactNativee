import {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Button, FlatList} from 'react-native';
import SQLite from 'react-native-sqlite-2';
import GroupItem from '../components/GroupItem';
import AddListInput from '../components/AddListInput';

const Groups = () => {
  const [list, setList] = useState([]);
  const [showEdit, setshowEdit] = useState(false);
  const [showAddList, setShowAddList] = useState(false);
  const [newGroup, setNewGroup] = useState(null);

  console.log('list:', list);

  const db = SQLite.openDatabase('myDatabase.db', '1.0', '', 1);

  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT
        );`,
        [],
        (sqlTxn, results) => console.log('Table created', sqlTxn, results),
        error => console.log(error),
      );
    });
  };

  const getGroups = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM groups`,
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

  const addNewGroup = title => {
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO groups (title) VALUES (?)`,
        [title],
        (sqlTxn, results) => console.log('New group added', sqlTxn, results),
        error => console.log(error),
      );
    });
  };

  const deleteGroup = id => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM groups WHERE id = ?`,
        [id],
        (sqlTxn, results) => console.log('Group deleted', sqlTxn, results),
        error => console.log(error),
      );
    });
  };

  const handleAddNewGroup = () => {
    setShowAddList(!showAddList);

    if (showAddList && newGroup) addNewGroup(newGroup);

    setNewGroup(null);
  };

  useEffect(() => {
    createTable();
    getGroups();
  }, []);

  return (
    <SafeAreaView className="container">
      <View className="px-2">
        <View className="flex-row justify-between">
          <Button
            title={showEdit ? 'Done' : 'Edit'}
            onPress={() => setshowEdit(!showEdit)}
          />
          <Button title="Add List" onPress={handleAddNewGroup} />
        </View>
        <Text className="text-5xl font-bold my-6 ml-3">Lists</Text>
        <Text className="text-2xl font-bold mb-4 ml-8">iPhone</Text>
        <FlatList
          data={list}
          renderItem={({item}) => (
            <GroupItem
              data={item}
              showEdit={showEdit}
              deleteData={id => deleteGroup(id)}
            />
          )}
          contentContainerClassName="px-2"
          ListFooterComponent={
            showAddList && (
              <AddListInput
                onChangeText={text => setNewGroup(text)}
                newGroup={newGroup}
              />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Groups;
