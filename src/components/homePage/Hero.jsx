import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col>
            <h1>
              Kursus bahasa inggris
              <span> Belajar mulai dari dasar sampai mahir</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              nulla odio hic autem, recusandae delectus! Sapiente eveniet
              repellat deleniti doloremque nisi, pariatur amet id explicabo
              rerum quis nemo, porro sequi?
            </p>
            <Button>
              Free, Ikuti Placement Test
              <FontAwesomeIcon icon={faPencil} />
            </Button>
          </Col>
          <Col> </Col>
        </Row>
      </Container>
    </section>
  );
};

export default hero;
