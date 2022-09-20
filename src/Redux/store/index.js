import {configureStore} from '@reduxjs/toolkit'
import logedReducer from '../reducers'

const store =configureStore({
    reducer:{
        logedReducer
    }
});
export default store