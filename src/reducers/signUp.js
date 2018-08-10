import { UPDATE_EMAIL } from '../actions/signUpActions'

const signUp = (state = {
    userInfo: {
        email: "",
        name: {
            first: "",
            last: ""
        }
    }
}, action) => {
    switch (action.type) {
      case UPDATE_EMAIL:
        return {...state,
            userInfo: {
                email: action.payload
            }
        }
      default:
        return state
    }
  }
  
  export default signUp