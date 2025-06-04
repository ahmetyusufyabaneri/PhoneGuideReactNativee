import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {ArrowRight2, MinusCirlce, People} from 'iconsax-react-nativejs';
import {useEffect, useState} from 'react';
import {getPersonsCount} from '../db/persons/getPersons';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../constants';

const GroupItem = ({data, showEdit, deleteData}) => {
  console.log('data:', data);
  const navigation = useNavigation();

  const [personsCount, setPersonsCount] = useState(0);

  useEffect(() => {
    getPersonsCount(data?.id, setPersonsCount);
  }, []);

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(screenNames.ContactList, {
          group_id: data?.id,
          title: data?.title,
        })
      }
      className="bg-white flex-1 flex-row gap-2 p-4 rounded-xl mb-2.5">
      {showEdit && (
        <TouchableOpacity onPress={() => deleteData(data?.id)}>
          <MinusCirlce size={32} color="#e55050" variant="Bold" />
        </TouchableOpacity>
      )}
      <View>
        <People size={32} color="#007aff" variant="Outline" />
      </View>
      <View className="flex-1 flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-semibold">{data?.title}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Text className="text-lg text-slate-400">{personsCount}</Text>
          <ArrowRight2 size={20} color="#007aff" variant="Outline" />
        </View>
      </View>
    </Pressable>
  );
};

export default GroupItem;
