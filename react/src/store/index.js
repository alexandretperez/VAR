import { createStore } from 'redux';
import messagesReducer from '../reducers/messages-reducer';

const store = createStore(messagesReducer);

export default store;
