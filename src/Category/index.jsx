import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import img1 from './1149_2011-09-13_6-500x500.webp';
import img2 from './3d-render-home-appliances-collection-260nw-1680805144.webp'
import img3 from './electrician-equipment-on-gray-background-260nw-1560597293.webp'
import img4 from './image.jpg'
import './index.css';

const ImageGrid = () => {
  const images = [
    { id: 1, src: img1, title: 'Title 1' },
    { id: 2, src: img2, title: 'Title 2' },
    { id: 3, src: img3, title: 'Title 3' },
    { id: 4, src: img4, title: 'Title 4' },
    { id: 2, src: img2, title: 'Title 2' },
    { id: 3, src: img3, title: 'Title 3' },
    { id: 4, src: img4, title: 'Title 4' },
    { id: 4, src: img4, title: 'Title 4' }
  ];

  return (
    <div style={{marginLeft:'50px',marginRight:'50px'}}>

      {images.length > 0 && (
        <Row xs={1} md={3} lg={4} className="g-4">
          {images.map((image) => (
            <Col key={image.id}>
              <div className="text-center">
                <img
                
                  src={image.src}
                  alt={`Image ${image.id}`}
                  className="img-thumbnail rounded-circle"
                  
                  id="imgcat"
                />
                <p id="pa" className="mt-2">{image.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ImageGrid;
