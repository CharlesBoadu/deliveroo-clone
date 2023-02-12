import { createSlice, configureStore } from '@reduxjs/toolkit'

const restaurantSlice = createSlice({
  name: 'basket',
  initialState: {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
    }
  },
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload;
    }

  }
})

export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant

// const store = configureStore({
//   reducer: restaurantSlice.reducer
// })

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// {value: 1}
// store.dispatch(incremented())
// {value: 2}
// store.dispatch(decremented())
// {value: 1}
export default restaurantSlice.reducer