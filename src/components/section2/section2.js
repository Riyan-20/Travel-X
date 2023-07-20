import React, { useState } from 'react';
import './Section2.css';
import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import Image3 from './img3.jpg';
import Image4 from './img4.jpg';

const Section2 = () => {

    const imgdetdes1 = {
        fontSize: '2.2vw',
        marginLeft: '-17vw',
        fontFamily: 'sans-serif',
        marginTop: '-5vw',
        color:'black'
      };

    const imgdetdes2 = {
        fontSize: '2vw',
        marginLeft: '-18vw',
        fontFamily: 'sans-serif',
        marginTop: '-2vw',
        color:'black'
      };

    const imgdetdes3 = {
        fontSize: '2.4vw',
        fontFamily: 'sans-serif',
        marginTop: '-6vw',      
        color:'black'
      };

    const imgdetdes4 = {
        fontSize: '2.4vw',
        fontFamily: 'sans-serif',
        marginTop: '-2vw',      
        color:'black',
        marginLeft: '-15vw'
      };

    const imgdetdes5 = {
        fontSize: '2.8vw',
        fontFamily: 'sans-serif',
        marginTop: '1vw',      
        color:'black',
        marginLeft: '-24vw'
      };

    const imgdetdes6 = {
        fontSize: '6.8vw',
        fontFamily: 'sans-serif',
        marginTop: '-15vw',      
        color:'#1254b4',
        marginLeft: '-8vw'
      };

    const imgdetdes7 = {
        fontSize: '3vw',
        fontFamily: 'sans-serif',
        marginTop: '-19vw',      
        color:'black',
        marginLeft: '9.8vw'
      };
    

      





  const images = [
    {
      id: 1,
      url: Image1,
      alt: 'Image 1',
      description1: <h1>Egypt</h1>,
      description2: <h2>Capital:</h2>,
      description3: <h3> Cairo</h3>,
      description4: <h4>from 7 nights</h4>,
      description5: <h5>from </h5>,
      description6: <h6>$690</h6>,
      description7: <h6>/person</h6>
    },
    {
      id: 2,
      url: Image2,
      alt: 'Image 2',
      description1: <h1>Turkey</h1>,
      description2: <h2>Capital:</h2>,
      description3: <h3> Cairo</h3>,
      description4: <h4>from 3 nights</h4>,
      description5: <h5>from </h5>,
      description6: <h6>$290</h6>,
      description7: <h6>/person</h6>
    },
    {
      id: 3,
      url: Image3,
      alt: 'Image 3',
      description1: <h1>Japan</h1>,
      description2: <h2>Capital:</h2>,
      description3: <h3> Tokyo</h3>,
      description4: <h4>from 7 nights</h4>,
      description5: <h5>from </h5>,
      description6: <h6>$690</h6>,
      description7: <h6>/person</h6>
    },
    {
      id: 4,
      url: Image4,
      alt: 'Image 4',
      description1: <h1>Moscow</h1>,
      description2: <h2>Capital:</h2>,
      description3: <h3> Cairo</h3>,
      description4: <h4>from 5 nights</h4>,
      description5: <h5>from </h5>,
      description6: <h6>$490</h6>,
      description7: <h6>/person</h6>
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]); // Set the initial selected image

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="section2">
      <div className="uppersection">
            <div className="big-image">
                <img src={selectedImage.url} alt={selectedImage.alt} />
                <div className="image-details">
                    
                    <h1 style={imgdetdes1} >{selectedImage.description1}</h1>
                    <h2 style={imgdetdes2}>{selectedImage.description2}</h2>
                    <h3 style={imgdetdes3}>{selectedImage.description3}</h3>
                    <h4 style={imgdetdes4}>{selectedImage.description4}</h4>
                    <h5 style={imgdetdes5}>{selectedImage.description5}</h5>
                    <h6 style={imgdetdes6}>{selectedImage.description6}</h6>           
                    <h6 style={imgdetdes7}>{selectedImage.description7}</h6>  

                    

                </div>               
            </div>
            <div class="Book_Button">
                <button> Booking </button>
                </div>      
      </div>
      <div className="image-selection">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.alt}
            className={`small-image ${selectedImage.id === image.id ? 'selected' : ''}`}
            onClick={() => handleImageSelect(image)}
          />
        ))}
      </div>

    </div>
  );
};

export default Section2;
