import { Container, Row } from "react-bootstrap";

function Footer({ props }) {
    return <Container fluid style={{width: "100%"}}>
        <Row style={{width: "100%", textAlign:"center", display: "flex"}}><p>Florarpino Plants</p></Row>
        <Row style={{width: "100%", textAlign:"center", display: "flex"}}><p>info@mysite.com</p></Row>
        <Row style={{width: "100%", textAlign:"center", display: "flex"}}><p>©2024 by Florarpino</p></Row>
    </Container>
}

export default Footer;