import React from 'react';
import photosCSS from './photos.css';

import phData from '../modals/data';
import PhotoModal from '../modals/photo_modal';

class Photos extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showPhotoModal: false,
      modalImage: ''
    }

    this.showPhotoModal = this.showPhotoModal.bind(this)

    this.phImages = phData;
  }

  showPhotoModal(e){
    this.setState({
      showPhotoModal: true,
      modalImage: e.target.src
    });
  }

  render(){
    let imgArr = this.phImages.slice(0)
    if(imgArr.length > 9){
      imgArr = imgArr.slice(0,9)
    }

    let photoModal = <PhotoModal imageArr={phData} image={this.state.modalImage} closeModal={() => this.setState({ showPhotoModal: false })} />
    
    return(
      <div className="photos-container">
        <div className="photos-title">
          {this.phImages.length} Photos
        </div>
        <div className="photos-block">
          <ul className="photos-block-list">
          {
            imgArr.map((img, idx) => {
            return (
              <li key={idx} onClick={this.showPhotoModal}>
                <img className="photo-tile" src={img.image_url}/>
              </li>
              
            )})
          }
            </ul>
          </div>
          {
            this.state.showPhotoModal ? photoModal : null
          }
      </div>
    );
  }
};

export default Photos;