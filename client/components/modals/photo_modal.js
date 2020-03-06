import React from 'react';
import photoModalCSS from './photo_modal.css';

class PhotoModal extends React.Component{
  constructor(props){
    super(props)
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e){
    if(e.target.className === "photo-modal-container"){
      this.props.closeModal();
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }

  render(){
    return(
      <div className="photo-modal-container" onClick={this.closeModal}>
        <img className="photo-tile" src={this.props.image} />
      </div>
    );
  }
};

export default PhotoModal;