import keys from './actionTypes'
export default keys

export interface IImageUploadInProgress {
    readonly type: keys.IMAGE_UPLOAD_INPROGRESS
}

export interface IImageUploadSuccess {
    readonly type: keys.IMAGE_UPLOAD_SUCCESS,
    readonly imageId: string
}

export interface IImageUploadFail {
    readonly type: keys.IMAGE_UPLOAD_FAIL,
    readonly error: Error
}

export type ActionTypes = IImageUploadInProgress | IImageUploadSuccess | IImageUploadFail;
