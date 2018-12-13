import * as shortid from 'shortid';
import keys from '../constants';
import model from '../model';

export const createEvent = (name: string, date: string) => {
    return (dispatch: (action:any)=>void) => {
        const eventData = {
            date,
            id: shortid(),
            name
        };

        dispatch({type: keys.CREATE_EVENT_INPROGRESS})
        return model.call(['event', 'create'], [eventData])
            .then(() => {
                dispatch({
                    eventData,
                    type: keys.CREATE_EVENT_SUCCESS
                })
            })
    }
}

export const addPhotosToEvent = (eventId: string, photos:string[]) => {
    return (dispatch: (action: any) => void) => {
        dispatch({type: keys.ADD_IMAGES_TO_EVENT_INPROGRESS})
        return model.call(['event', 'addPhotos'], [eventId, photos])
            .then(() => {
                dispatch({
                    eventId,
                    photos,
                    type: keys.CREATE_EVENT_SUCCESS
                })
            })
    }
}