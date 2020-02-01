import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Container, Button, Input, FormGroup, Label } from "reactstrap";
import ErrorMessage from "../components/ErrorMessage";
import { Spinner } from "reactstrap";
import { noteValidate } from "../helpers";

// API URL
const API_URL = "http://localhost:8080/";
const API_URL_NOTES = "http://localhost:8080/api/v1/notes";

const Dashboard = ({ history }) => {

  const [user, setUser] = useState({});

  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  const [notes, setNotes] = useState([]);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const addNote = e => {
    e.preventDefault();
    
    const USER_TOKEN = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(USER_TOKEN);

    if (!noteValidate(note)) {
      // send data to server
      const data = {
        title: note.title,
        description: note.description
      };
      setError("");
      setLoading(true);
      axios
        .post(API_URL_NOTES, data, { headers: { Authorization: AuthStr } })
        .then(res => {
          console.log(res.data);
          setLoading(false);
          setNote({
            title: '',
            description: ''
          });
        })
        .catch(err => {
          setLoading(false);
          setError(JSON.parse(JSON.stringify(err.response.data.message)));
        });
    } else {
      // render error
      setError(noteValidate(note));
    }
  };

  useEffect(() => {
    const USER_TOKEN = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(USER_TOKEN);

    axios
      .get(API_URL, { headers: { Authorization: AuthStr } })
      .then(response => {
        if (response.data.user) {
          setUser(response.data.user);
        } else {
          localStorage.removeItem("token");
          history.push("/login");
        }
      })
      .catch(error => {
        console.log("error " + error);
      });
  }, []);

  return (
    <section className="dashboard">
      <Container>
        <h1>Add Notes</h1>
        <hr />
        <Form onSubmit={addNote} className="form_container">
          {error.length > 0 ? <ErrorMessage message={error} /> : null}
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={note.description}
              onChange={handleChange}
              placeholder="Enter Your Note"
            />
          </FormGroup>
          <Button
            disabled={loading ? true : false}
            type="submit"
            color="primary"
          >
            {loading ? <Spinner color="info" /> : "Add Note"}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Dashboard;
