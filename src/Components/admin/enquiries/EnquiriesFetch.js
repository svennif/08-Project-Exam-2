import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../Api";
import AdminNavbar from "../AdminNavbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EnquiryDisplay from "./EnquiryDisplay";

function Messages({ history }) {
  const [enquiry, setEnquiries] = useState([]);

  useEffect(() => {
    const options = { headers };
    const messageUrl = BASE_URL + "enquiries";
    fetch(messageUrl, options)
      .then((res) => res.json())
      .then((j) => {
        console.log(j);
        setEnquiries(j);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col sm={2} className="ml-0">
          <AdminNavbar history={history} />
        </Col>
        <Col>
          <h1>Enquiries</h1>
          <hr />
          {enquiry &&
            enquiry.map(
              ({
                name,
                email,
                createdAt,
                establishmentId,
                checkIn,
                checkOut,
                id,
              }) => {
                return (
                  <EnquiryDisplay
                    name={name}
                    id={id}
                    key={id}
                    email={email}
                    establishmentId={establishmentId}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    createdAt={createdAt}
                  />
                );
              }
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
