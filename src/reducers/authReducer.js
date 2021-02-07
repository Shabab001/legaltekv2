import * as Types from '../actions/types'
const init = {
    user: {},
    isAuthenticated: false,
    errors: {},
    countryInfo: {}
}


const authReducer = (state=init,action) =>{
    switch(action.type){
        case Types.SET_USER: {
            return{
                ...state,
                user: action.payload.user,
                isAuthenticated: Object.keys(action.payload.user).length !== 0,   
            }
        }
        case Types.SET_COUNTRY_INFO:  {
            return{
                ...state,
                countryInfo: action.payload.countryInfo
            }
        }
        case Types.USER_ERRORS: {
            return {
                ...state,
                errors: action.payload.error
            }
        }
        case Types.CREATE_USER: {
            return {
                ...state,
                createdUser: action.payload.createdUser
            }
        }
        case Types.FORGOT_PASSWORD: {
            return {
                ...state,
            }
        }
        case Types.SEND_OTP: {
            return {
                ...state,
                data: action.payload.data,
                message: action.payload.message
            }
        }

        case Types.VERIFY_OTP: {
            return {
                ...state,
                data: action.payload.data,
                message: action.payload.message
            }
        }

        case Types.SAVE_PROFILE: {
            return {
                ...state,
                savedProfle: action.payload.savedProfile
            }
        }

        case Types.GET_PROFILE: {
            return {
                ...state,
                user: {...state.user,...action.payload.retrievedProfile},
                userProfile: action.payload.retrievedProfile
            }
        }
    
        default: return state
    }
}

export default authReducer