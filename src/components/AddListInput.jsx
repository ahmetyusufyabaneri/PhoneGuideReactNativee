import {View, Pressable, TextInput} from 'react-native';
import {People} from 'iconsax-react-nativejs';

const AddListInput = ({onChangeText, newGroup}) => {
  return (
    <Pressable className="bg-white flex-1 flex-row gap-2 p-4 rounded-xl mb-2.5">
      <View>
        <People size={32} color="#007aff" variant="Outline" />
      </View>
      <View className="flex-1">
        <TextInput
          value={newGroup}
          className="text-lg font-semibold"
          onChangeText={text => onChangeText(text)}
        />
      </View>
    </Pressable>
  );
};

export default AddListInput;
