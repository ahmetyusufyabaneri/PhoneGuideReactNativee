import {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Button, FlatList} from 'react-native';
import GroupItem from '../components/GroupItem';
import AddListInput from '../components/AddListInput';
import {createGroupsTable} from '../db/groups/createGroupsTable';
import {getGroups} from '../db/groups/getGroups';
import {addNewGroup} from '../db/groups/addNewGroup';
import {deleteGroup} from '../db/groups/deleteGroup';
import {createPersonsTable} from '../db/persons/createPersonTable';

const Groups = () => {
  const [list, setList] = useState([]);
  const [showEdit, setshowEdit] = useState(false);
  const [showAddList, setShowAddList] = useState(false);
  const [newGroup, setNewGroup] = useState(null);

  const handleAddNewGroup = () => {
    setShowAddList(!showAddList);

    if (showAddList && newGroup) addNewGroup(newGroup);

    setNewGroup(null);
  };

  useEffect(() => {
    createGroupsTable();
    createPersonsTable();
    getGroups(setList);
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
