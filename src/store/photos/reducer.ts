import keys, {ActionTypes} from '../constants'

const initialState = {
    
    photoIds: [],
}

const photoReducer = (state:any = initialState, action:ActionTypes) => {
    switch(action.type) {
        case keys.IMAGE_UPLOAD_SUCCESS:
            if(state.photoIds.includes(action.imageId) === false) {
                // state.photoIds.push(action.imageId)
                return { photoIds:[...state.photoIds, action.imageId] }
            }
            return state;
            break;
        default: return state;
    }
}

export default photoReducer;