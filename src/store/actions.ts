import * as shortid from 'shortid';
import {addPhotosToEvent, createEvent} from './events/actions';
import {uploadPhoto} from './photos/actions';

export const addPhoto = (file:File) => {
    return (dispatch: (action:any)=>void, getState: ()=>any) => {
        const imageId = shortid();
        const eventState = getState().eventReducer.event;

        dispatch(uploadPhoto(imageId, file))
        dispatch(addPhotosToEvent(eventState.id, [imageId]))
    }
}

export {
    createEvent
}