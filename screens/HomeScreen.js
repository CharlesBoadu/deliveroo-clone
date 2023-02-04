import { View, Text, SafeAreaView, Image, TextInput} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsHorizontalIcon, SearchIcon } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })


  return (
    <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
            source={{ uri: "https://links.papareact.com/wru" }}
            className="w-7 h-7 bg-gray-300 rounded-full"
            />

            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
              <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color="00cc88"/>
              </Text>
            </View>
            <UserIcon size={35} color="00cc88"/>
        </View>
        
        {/* Search */}
        <View>
          <View>
            <SearchIcon />
            <TextInput placeholder='Restaurants and Cuisine' keyboardType='default'/>
          </View>

          <AdjustmentsHorizontalIcon color="00cc88"/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen