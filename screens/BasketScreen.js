import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, {useMemo, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';


const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[items.id] = results[items.id] || []).push(item);
            return results;
        }, {})

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    console.log(groupedItemsInBasket)
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
            <View>
                <Text className="text-lg font-bold text-center">Basket</Text>
                <Text className="text-center text-gray-400">
                    {restaurant.title}
                </Text>
            </View>

            <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            >
                <XCircleIcon color="#00CCBB" size={50}/>
            </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image 
            source={{
                uri: "https://links.papareact.com/wru"
            }}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1">Deliver in 50-75 min</Text>
            <TouchableOpacity>
                <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
            <ScrollView>
                {Object.entries(groupedItemsInBasket).map(([key, items]) => {
                    <View key={key}>
                        <Image 
                        source={{
                            uri: urlFor(items[0]?.image).url()
                        }}
                        />
                        <Text>{items.length} x</Text>
                    </View>
                })}
            </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen