import React, { Component } from 'react';
import noImage from '../img/no_image.jpg';

export class ImageUpload extends Component {
    constructor(props) {
        super(props);
        const uploadId = this.props.uploadId ? this.props.uploadId : Math.random();
        this.state = {
            picture: this.props.picture ? this.props.picture : noImage,
            uploadId: uploadId
        }
    }

    uploadImg ()  {
        const fileReader = new FileReader();
        const fileFilter = /^(image\/bmp|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/tiff)$/i;
        const uploadButton = document.getElementById(this.state.uploadId);
        const filesList = uploadButton.files;

        fileReader.onload = function (fileReaderEvent) {
           this.setState({picture: fileReaderEvent.target.result})

        }.bind(this);

        if (filesList.length === 0) {
            return;
        }

        const imageFile = filesList[0];
        if (!fileFilter.test(imageFile.type)) {
            alert("You must select a valid image file!");
        return;        }
        fileReader.readAsDataURL(imageFile);
    }

    click(){
        document.getElementById(this.state.uploadId).click();
    }

  render() {
    return (
      <div>
        <input id={this.state.uploadId}
            style={{'display':'none'}}
            type="file" onChange={this.uploadImg.bind(this)}/>

        <img id={this.state.uploadId + '-img'} className={this.props.className ? this.props.className : "speaker-picture"}
            src={this.state.picture}
            onClick={this.click.bind(this)}/>
      </div>
    );
  }
}

