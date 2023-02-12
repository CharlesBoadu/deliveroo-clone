import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurantReducer from './features/restaurantSlice'
import restaurant from './sanity/schemas/restaurant'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    // todos: todosReducer,
    // filters: filtersReducer
    basket: basketReducer,
    restaurant: restaurantReducer,
  }
})