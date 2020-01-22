import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import {isLogin} from '../helpers';

const Home = () => (
  <Container>
    <Jumbotron fluid={false} className="jumbotron">
      <h1 className="display-3">Hello, Reactjs!</h1>
      <p className="lead">
        This is a simple landing page, show you what the App about, and if you
        want to know more just click on the button bellow and register now. have
        fun!
      </p>
      <hr className="my-2" />
      <p>
        I created this App for improve my skills on Authentication and
        autherization. I used for accomplish those tasks Node/Express/JWT. For
        front end i used the awesome library Reactjs.
      </p>
      <p className="lead text-center pt-3">
        <Button className="landing_page_btn">
          {isLogin() ? (
            <a href="/dashboard" className="nav-link">
              <span>🙏</span> GO TO Dashboard
            </a>
          ) : (
            <a href="/signup" className="nav-link">
              <span>🙏</span> SIGN UP
            </a>
          )}
        </Button>
      </p>
    </Jumbotron>
  </Container>
);

export default Home;
