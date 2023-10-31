import { Card, Col, Container, Row, Button } from "react-bootstrap";

const NewProgram = () => {
  return (
    <>
      <section className="newProgram">
        <h1>Program Baru</h1>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/src/assets/newprogram/1.jpg" />
                <Card.Body>
                  <Card.Title>TOEFL</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/src/assets/newprogram/2.jpg" />
                <Card.Body>
                  <Card.Title>IELTS</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/src/assets/newprogram/3.jpg" />
                <Card.Body>
                  <Card.Title>English Bootcamp</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Button variant="primary">Lihat Semua Kelas</Button>{" "}
      </section>
    </>
  );
};

export default NewProgram;
