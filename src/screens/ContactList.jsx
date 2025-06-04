import {useNavigation, useRoute} from '@react-navigation/native';
import {Add, Sms} from 'iconsax-react-nativejs';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {screenNames} from '../constants';
import {useEffect, useState} from 'react';
import {getPersons} from '../db/persons/getPersons';

const ContactList = () => {
  const {group_id, title} = useRoute().params;

  const navigation = useNavigation();

  const [persons, setPersons] = useState([]);

  return (
    <SafeAreaView className="container">
      <View className="flex-row items-center justify-between">
        <Button
          title="Lists"
          onPress={() => navigation.navigate(screenNames.Groups)}
        />
        <View className="flex-row items-center gap-6 mr-2">
          <Sms size={28} color="#007aff" />
          <Add size={32} color="#007aff" />
        </View>
      </View>
      <Text className="text-5xl font-bold my-6 ml-3">{title}</Text>
    </SafeAreaView>
  );
};

export default ContactList;
