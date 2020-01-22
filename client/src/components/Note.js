import React from "react";
import { Col, Card, CardTitle, CardText, Button,CardFooter } from "reactstrap";

const Note = ({title, description, username, date}) => (
  <Col xs="12" sm="4">
    <Card body className="card">
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
      <CardFooter>{new Date(date).toISOString()} </CardFooter>
      <Button>{username}</Button>
    </Card>
  </Col>
);

export default Note;
