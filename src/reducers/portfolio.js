import { CREATE, FETCH_ALL, FETCH_DATA_USER, EDIT, DELETE } from '../constants/actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_DATA_USER:
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case EDIT:
            return state.map((portfolio) => portfolio._id === action.payload._id ? action.payload : state)
        case DELETE:
            return state.filter((portfolio) => portfolio._id !== action.payload);
        default:
            return state;
    }
}