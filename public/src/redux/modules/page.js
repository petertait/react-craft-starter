import axios from 'axios'

const API_URL = "http://craft-react.dev/api"
const GET_PAGE_DATA = "GET_PAGE_DATA"
const GET_PAGE_DATA_ERROR = "GET_PAGE_DATA_ERROR"
const GET_SINGLE_PAGE_DATA = "GET_SINGLE_PAGE_DATA"
const GET_SINGLE_PAGE_DATA_ERROR = "GET_SINGLE_PAGE_DATA_ERROR"

export function getPage(page){
  let pageUrl = `${API_URL}/${page}.json`
  return function(dispatch){
    axios.get(pageUrl)
      .then( (response) => dispatch ({
        type: GET_PAGE_DATA,
        response
      }))
      .catch( (error) => dispatch({
        type: GET_PAGE_DATA_ERROR,
        error
      }))
    }
}

export function getSinglePage(page){
  let pageUrl = `${API_URL}/${page}.json`
  return function(dispatch){
    axios.get(pageUrl)
      .then( (response) => dispatch ({
        type: GET_SINGLE_PAGE_DATA,
        response
      }))
      .catch( (error) => dispatch({
        type: GET_SINGLE_PAGE_DATA_ERROR,
        error
      }))
    }
}

const initialState= {
  data: [],
  singlePageData: {}
}

export default function pageData(state=initialState, action) {
  switch(action.type){
    case GET_PAGE_DATA:
      return {
        ...state,
        data: action.response.data.data
      }
    case GET_SINGLE_PAGE_DATA:
      return {
        ...state,
        singlePageData: action.response.data
      }
    default:
      return state
  }
}