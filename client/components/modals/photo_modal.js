import React from 'react';
import photoModalCSS from './photo_modal.css';

class PhotoModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      defaultIdx: 0
    };
    this.imageArr = props.imageArr;

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e){
    if(e.target.className === "photo-modal-container"){
      this.props.closeModal();
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }

  findDefault(){
    for(let i = 0; i < this.imageArr.length; i++){
      let imgEl = this.imageArr[i];
      if(imgEl.image_url === this.props.image){
        this.setState({defaultIdx: i})
      }
    }
  }

  render(){
    console.log(this.state)
    return(
      <div className="photo-modal-container" onClick={this.closeModal}>
        <div className="photo-modal-wrap">
          <div className="photo-modal-arrow">{'<'}</div>
          <img className="photo-modal-tile" src={this.props.image} />
          <div className="photo-modal-arrow">{'>'}</div>
        </div>
      </div>
    );
  }
};

export default PhotoModal;
