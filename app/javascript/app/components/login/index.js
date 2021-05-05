import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function UserLogin() {
  return (
    <div className="container">
      <Card className="m-5">
        <Card.Body>
          <Form className="px-5">
            <Form.Group controlId="loginUsername">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => {}}> Submit </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserLogin;
