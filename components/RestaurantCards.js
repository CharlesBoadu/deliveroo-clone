import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'

const RestaurantCards = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image 
        source={{
            uri: urlFor(imgUrl).url(),
        }}
        className="h-64 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon opacity={0.5} color="green" size={22}/>
            <Text>
              <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opacity={0.4} size={22}/>
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards