import React from 'react';
import photosCSS from './photos.css';

class Photos extends React.Component{
  constructor(props){
    super(props)
    this.phImages = [
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
      'https://static.dezeen.com/uploads/2018/07/caballerizas-matias-zegers-architecture_dezeen_2364_col_26.jpg',
    ]
  }
  
  // 1 photo entire
  // 2 half
  // 3 event
  // 4 event
  // 5 - 1 big - 4 even
  // 7 - 2 - 1big -4  6 even
  // 8 - 2 - 1 - 2- 3
    // 4 even - 3 small

  // 9 images

  render(){
    let imgArr = this.phImages.slice(0)
    if(imgArr.length > 9){
      imgArr = imgArr.slice(0,9)
    }
    console.log(imgArr)
    
    return(
      <div className="photos-container">
        <div className="photos-title">
          {this.phImages.length} Photos
        </div>
        <div className="photos-block">
          {
            imgArr.map((img, idx) => <img key={idx} className="photo-tile" src={img}/>)
          }
        </div>
      </div>
    );
  }
};

export default Photos;