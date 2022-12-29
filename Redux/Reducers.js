/* eslint-disable prettier/prettier */
import { GET_TEAM_TOKEN_DATA, GET_MY_TEAM_TOKEN_DATA, GET_MATCH_DATA, GET_TRANSACTION_DATA } from './Actions';
import data from '../data/TeamTokenData.js';
import myTokensData from "../data/MyTeamTokenData"
import matchData from '../data/MatchData';
import transactions from "../data/transactions"

const initialState = {
  tokens: data,
  mytokens: myTokensData,
  matchData: matchData,
  transactionData: transactions

};

export const TeamTokenDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM_TOKEN_DATA:
      return { ...state, tokens: action.payload };
    case GET_MY_TEAM_TOKEN_DATA:
      return { ...state, mytokens: action.payload }
    default:
      return state;
  }
}

export const MatchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATCH_DATA:
      return { ...state, matchData: action.payload }
    default:
      return state
  }
}

export const TransactionDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_DATA:
      return { ...state, transactionData: action.payload }
    default:
      return state
  }
}


