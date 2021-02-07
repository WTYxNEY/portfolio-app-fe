import * as api from '../api'
import { CREATE, FETCH_ALL, FETCH_DETAIL, FETCH_DATA_USER, EDIT, DELETE } from '../constants/actionTypes'


export const getPortfolio = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPortfolio();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getPortfolioByID = (portfolio_id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPortfolioByID(portfolio_id);

        dispatch({ type: FETCH_DETAIL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const fetchUserPortfolio = (user_id) => async (dispatch) => {
    try {
        const { data } = await api.fetchUserPortfolio(user_id);

        dispatch({ type: FETCH_DATA_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPortfolio = (portfolio) => async (dispatch) => {
    try {
        const { data } = await api.createPortfolio(portfolio);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error)
    }
};

export const updatePortfolio = (portfolio_id, editPortfolio) => async (dispatch) => {
    try {
        const { data } = await api.updatePortfolio(portfolio_id, editPortfolio);

        dispatch({ type: EDIT, payload: data });
    } catch (error) {
        console.log(error)
    }
};

export const deletePortfolio = (portfolio_id) => async (dispatch) => {
    try {
        await api.deletePortfolio(portfolio_id);

        dispatch({ type: DELETE, payload: portfolio_id });
    } catch (error) {
        console.log(error)
    }
};