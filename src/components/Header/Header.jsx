import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex flex-row justify-between px-6"
      style={{marginTop: insets.top}}>
      <Text className="text-lg font-bold">Welcome</Text>
      <TouchableOpacity className="w-10 h-10 rounded-full">
        <Image
          source={require('../../../assets/images/login.png')}
          className="w-full h-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
