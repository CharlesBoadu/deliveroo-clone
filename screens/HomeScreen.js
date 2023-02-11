import { View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `).then(data => {
      setFeaturedCategories(data)
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-2 space-x-2 px-2">
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
        <View className="flex-row items-center space-x-2 pb-2 mx-2 px-2">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2">
            <MagnifyingGlassIcon color={"grey"}/>
            <TextInput placeholder='Restaurants and Cuisine' keyboardType='default'/>
          </View>

          <AdjustmentsHorizontalIcon color="00cc88"/>
        </View>

        {/* Body View */}
        <ScrollView className="bg-gray-100">
          {/* Categories */}
          <Categories /> 

          {/* Featured */}
         
         {/* {console.log(featuredCategories)} */}
          {featuredCategories?.map((category) => (
            <FeaturedRow
                key={category._id} 
                id={category._id}
                title={category.name}
                description={category.short_description}
            />
          ))}
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen