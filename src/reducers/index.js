import { combineReducers } from 'redux'

import auth from './auth'
import portfolio from './portfolio'
import portfolioById from './portfolioById'

export default combineReducers({ auth, portfolio, portfolioById });