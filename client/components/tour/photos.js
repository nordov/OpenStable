import React from 'react';
import photosCSS from './photos.css';

import phData from '../modals/data';
import PhotoModal from '../modals/photo_modal';

class Photos extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showPhotoModal: false
    }

    this.showPhotoModal = this.showPhotoModal.bind(this)

    this.phImages = phData;
  }

  showPhotoModal(){
    this.setState({showPhotoModal: true});
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  }

  photoModal(img){
    return <PhotoModal image={img} closeModal={() => this.setState({ showPhotoModal: false })} />
  }

  // 9 images

  render(){
    console.log(this.state.showPhotoModal)
    let imgArr = this.phImages.slice(0)
    if(imgArr.length > 9){
      imgArr = imgArr.slice(0,9)
    }

    let photoModal = <PhotoModal closeModal={() => this.setState({ showPhotoModal: false })} />
    
    return(
      <div className="photos-container">
        <div className="photos-title">
          {this.phImages.length} Photos
        </div>
        <div className="photos-block">
          {
            imgArr.map((img, idx) => (
              <button key={idx} onClick={this.showPhotoModal}>
                <img className="photo-tile" src={img}/>
              </button>
              
            ))
          }
          </div>
          {
            this.state.showPhotoModal ? photoModal : null
          }
      </div>
    );
  }
};

export default Photos;