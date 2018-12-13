import * as React from 'react'
import {connect} from 'react-redux'
import {addPhoto} from 'src/store/actions'
import './drop.css'

interface IPhotoDropProps {
    uploadImage: (imageData:any)=>void;
}

class PhotoDrop extends React.Component<IPhotoDropProps> {
    public render(): React.ReactNode {
        return (
            <div className="drop" onDragEnter={this.dragEnter} onDragOver={this.dragOver} onDrop={this.dropFiles} />
        )
    }

    private dropFiles = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();

        this.handleFiles(e.dataTransfer.files);
    }

    private dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
    }

    private dragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
    }

    private handleFiles = (files: FileList) => {
        for(let i = 0; i < files.length; ++i) {
            const file = files[i];
        
            if(!file.type.startsWith('image/')) { continue; }
            this.props.uploadImage(file);
        }
    }
}

const mapDispatchToProps = (dispatch:(action:any)=>void) => {
    return {
        uploadImage: (imageData:any) => dispatch(addPhoto(imageData))
    }
}

export default connect(null, mapDispatchToProps)(PhotoDrop) 