import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description}) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }[0]
    `, 
    { id }
    )
    .then((data) => {
      setRestaurants(data?.restaurants);
    });
  }, []);

// console.log(restaurants)

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="00cc88" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsVerticalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        {/* {console.log(restaurants)}
        {restaurants?.map((restaurant) => (
          <RestaurantCards
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}  
          />
        ))} */}
        {restaurants?.map((restaurant) => (
          <RestaurantCards 
            imgUrl={restaurant.image}
          />
        ))}
        <RestaurantCards 
        id={123}
        // imgUrl="https://links.papareact.com/gn7"
        title="Yo Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 main st"
        short_description="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantCards 
        id={123}
        // imgUrl="https://links.papareact.com/gn7"
        title="Yo Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 main st"
        short_description="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantCards 
        id={123}
        // imgUrl="https://links.papareact.com/gn7"
        title="Yo Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 main st"
        short_description="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantCards 
        id={123}
        // imgUrl="https://links.papareact.com/gn7"
        title="Yo Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 main st"
        short_description="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow