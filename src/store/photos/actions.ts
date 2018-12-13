import keys from '../constants'
const photosvc = process.env.REACT_APP_PHOTO_SVC_BASE_URL||'';
export const uploadPhoto = (imageId:string, file:File) => {
    return (dispatch: (action:any)=>void) => {
        const formData = new FormData();
        formData.append('imgfile', file);

        const headers = new Headers({
            'Content-Length': (file as any).length
        });

        dispatch({type:keys.IMAGE_UPLOAD_INPROGRESS})
        return fetch(`${photosvc}/api/upload/${imageId}`,{
            body: formData,
            headers,
            method: 'POST'
        }).then(() => {
            dispatch({
                imageId,
                type:keys.IMAGE_UPLOAD_SUCCESS
            })
        })
    }
}
