import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ImageContainer(props) {
  const id = props.id;
  const name = props.name;
  const imgUrl = props.imgUrl;
  const deleteImgFun = props.deleteImgFun

  return (
    <Card style={{width: '18rem'}} className="m-3">
      <Card.Img style={{width: '18rem'}} variant="bottom" src={imgUrl} />
      <Card.Body className=''>
        <Card.Title>{name}</Card.Title>
        <a href={imgUrl} download className="m-1"> 
          <Button size='sm'> Download </Button>
        </a>
        <Button variant="danger" size='sm' className="m-1" onClick={async () => await deleteImgFun(id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default ImageContainer;
