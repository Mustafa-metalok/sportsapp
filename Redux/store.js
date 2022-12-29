/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from 'redux';
import { TeamTokenDataReducer, MatchDataReducer, TransactionDataReducer } from './Reducers';

const rootReducer = combineReducers({
  TeamTokenData: TeamTokenDataReducer,
  MatchData: MatchDataReducer,
  TransactionData: TransactionDataReducer
});

const store = createStore(rootReducer)

export default store;