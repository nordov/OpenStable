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
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  componentDidMount(){
    for(let i = 0; i < this.imageArr.length; i++){
      let imgEl = this.imageArr[i];
      if(imgEl.image_url === this.props.image){
        this.setState({defaultIdx: i})
      }
    }
  }

  closeModal(e){
    if(e.target.className === "photo-modal-container"){
      this.props.closeModal();
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }

  leftClick(){
    if(this.state.defaultIdx === 0){
      this.setState({defaultIdx: defaultIdx + 1})
      console.log(this.state.defaultIdx)
    }
  }

  rightClick(){}

  render(){
    return(
      <div className="photo-modal-container" onClick={this.closeModal}>
        <div className="photo-modal-wrap">
          <div className="photo-modal-arrow" onClick={this.leftClick()}>{'<'}</div>
          <img className="photo-modal-tile" src={this.imageArr[this.state.defaultIdx].image_url} />
          <div className="photo-modal-arrow" onClick={this.rightClick}>{'>'}</div>
        </div>
      </div>
    );
  }
};

export default PhotoModal;
