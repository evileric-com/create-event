import * as React from 'react'
import { connect } from 'react-redux';

const photosvc = process.env.REACT_APP_PHOTO_SVC_BASE_URL || '';

interface IImagePreviewProps{ imageIds:string[] }
class PhotoPreview extends React.Component<IImagePreviewProps, {}> {
    public render(): React.ReactNode {
        // const photosvc = process.env.PHOTO_SVC_BASE_URL;
        const imageJSX = this.props.imageIds.map((imageId)=>{
            const thumbURL = `${photosvc}/api/images/${imageId}/thumb`
            return (
                <img key={imageId} src={thumbURL}/>
            );
        });
        return imageJSX;
    }
}

const mapStateToProps = (state:any):IImagePreviewProps => {
    return {
        imageIds: state.photoReducer.photoIds
    };
}

export default connect(mapStateToProps)(PhotoPreview);