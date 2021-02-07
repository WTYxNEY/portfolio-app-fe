import * as api from '../api'
import { AUTH } from '../constants/actionTypes'

export const signIn = (formData, history) => async (dispatch) => {
    try {
        // log in 
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })
        history.push('/')
    } catch (error) {

        console.log(error)
        
        if (error) {
            return error.message
        }

    }

};
export const signUp = (formData, history) => async (dispatch) => {
    try {
        // Sign up 
        const { data } = await api.signUp(formData);


        dispatch({ type: AUTH, data })

        history.push('/')
    } catch (error) {
        console.log(error)

    }
};