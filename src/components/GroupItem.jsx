import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {ArrowRight2, MinusCirlce, People} from 'iconsax-react-nativejs';
import {useEffect} from 'react';
import {getPersons} from '../db/persons/getPersons';

const GroupItem = ({data, showEdit, deleteData}) => {
  useEffect(() => {
    getPersons(data?.id);
  }, []);

  return (
    <Pressable className="bg-white flex-1 flex-row gap-2 p-4 rounded-xl mb-2.5">
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
          <Text className="text-lg text-slate-400">4</Text>
          <ArrowRight2 size={20} color="#007aff" variant="Outline" />
        </View>
      </View>
    </Pressable>
  );
};

export default GroupItem;
