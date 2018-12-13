import keys from '../constants';

const initialState = {
    event: {
        date: "",
        id: "",
        name:""
    },

};

const eventReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case keys.CREATE_EVENT_SUCCESS:
            return {event:{...state.event, ...action.eventData}}
        default: return state;
    }
}

export default eventReducer;