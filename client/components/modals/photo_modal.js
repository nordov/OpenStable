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
    if(this.state.defaultIdx > 0){
      const newIdx = this.state.defaultIdx - 1;
      this.setState({defaultIdx: newIdx})
    }
  }

  rightClick(){
    if(this.state.defaultIdx < this.imageArr.length - 1){
      const newIdx = this.state.defaultIdx + 1;
      this.setState({defaultIdx: newIdx})
    }
  }

  render(){
    const currentIdx = this.state.defaultIdx;
    const arrLength = this.imageArr.length;
    const rightArrow = <div className="photo-modal-arrow" onClick={this.rightClick}>{'>'}</div>;
    const leftArrow = <div className="photo-modal-arrow" onClick={this.leftClick}>{'<'}</div>;

    return(
      <div className="photo-modal-container" onClick={this.closeModal}>
        <div className="photo-modal-wrap">
          { currentIdx === 0 ? null : leftArrow }
          <img className="photo-modal-tile" src={this.imageArr[currentIdx].image_url} text={this.imageArr[currentIdx].image_text} />
          { currentIdx === arrLength - 1 ? null : rightArrow }
        </div>
      </div>
    );
  }
};

export default PhotoModal;