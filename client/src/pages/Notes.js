import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  Button,
  CardText
} from "reactstrap";
import axios from "axios";
import { Spinner } from "reactstrap";

// Component
import Note from "../components/Note";

const API_URL_NOTES = "http://localhost:8080/api/v1/notes";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const USER_TOKEN = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(USER_TOKEN);

    axios
      .get(API_URL_NOTES, { headers: { Authorization: AuthStr } })
      .then(response => {
          if(response.data){
              setNotes(response.data);
          };
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <section className="notes">
      <Container>
        <Row>
          {notes.length > 0 ? (
            notes.map(note => (
              <Note
                key={note._id}
                title={note.title}
                description={note.description}
                username={note.username}
                date={note.date}
              />
            ))
          ) : (
            <div className="spinner_in_notes">
              <Spinner style={{ width: "3rem", height: "3rem" }} />
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Notes;
