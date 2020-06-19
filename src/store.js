import  {createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import Allreducer from './reducers/rootreducers'
const initialstate={}
const middleware=[thunk]
const store=createStore(Allreducer,initialstate,  applyMiddleware(...middleware))

export default store;