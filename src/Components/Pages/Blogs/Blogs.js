import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="my-5 py-5">
      <Container>
        <h1 className="mb-5">Some Question and Answers</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5> #1 Difference between javascript and nodejs</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p className="blog">
                JavaScript is a high-level programming language that allows our
                web pages and online apps to think and act, making them more
                dynamic and engaging. JavaScript is an object-oriented,
                lightweight programming language. JavaScript is a script that
                runs in the browser and can change the Document Object Model
                (DOM) or add HTML to it. JavaScript is mostly used to generate
                client-side web apps and front-end web applications. When
                writing programs, it adheres to the JavaScript standard.
                <br />
                <br />
                Node.js is a runtime environment based on the Google V8 engine
                that is commonly used to represent a list of objects and
                functions that JavaScript programs can use. It's a runtime
                environment based on the v8 engine from Google. Node.js allows
                us to run JavaScript code outside of the browser. It does not
                have the ability to add HTML and is only used for server-side
                programming on the back end. Outside of the browser, it executes
                JavaScript.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5>
                #2 When should you use nodejs and when should you use mongodb?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p className="blog">
                Node.js is a rapidly evolving technology that is rapidly gaining
                ground in the field of server-side development. MongoDB is a
                database technology that is changing the game. Because they both
                use JavaScript and JSON, the two tools make a powerful combo. At
                first glance, learning Node.js and MongoDB may appear to be both
                time-consuming and painful.
                <br /> MongoDB is an open-source document database that uses a
                flexible schema to store data and is built on a horizontal
                scale-out architecture. MongoDB, which was founded in 2007, has
                a large development community all around the world. Each entry
                in a MongoDB database is a document described in JSON, a binary
                representation of the data, rather than tables of rows or
                columns like SQL databases. Applications
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h5>
                #3 When should you use nodejs and when should you use mongodb?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p className="blog">
                The SQL language is the industry standard for dealing with
                Relational Databases. In a relational database, tables define
                relationships. For inserting, searching, updating, and deleting
                database records, SQL programming is a powerful tool. That's not
                to imply SQL isn't capable of more. It has the ability to
                optimize and maintain databases.
                <br /> NoSQL is a non-relational database management system
                (DBMS) that avoids joins and does not require a fixed schema. It
                is used in both big data and real-time web apps. NoSQL databases
                include document databases, key-value pair databases, and graph
                databases, to name a few. It is ineffective when dealing with
                complex queries.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h5>#4 What is the purpose of jwt and how does it work?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p className="blog">
                JSON web token (JWT) is a particularly helpful tool for API
                authentication and server-to-server permission. SSO refers to
                the ability for a service provider to receive reliable
                information from the authentication server. The Service Provider
                can hash a portion of a token it gets and compare it to the
                signature of the token by sharing a secret key with the Identity
                Provider. If the result matches the signature, the SP knows that
                the data was provided by the other entity who possesses the key.
                The Identity Provider creates a JWT that certifies the user's
                identity, and the resource server uses the public key to decode
                and verify the token's authenticity. Because tokens are used for
                authorization and authentication, they must be unique.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blogs;
