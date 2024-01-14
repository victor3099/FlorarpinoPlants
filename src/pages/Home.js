import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import '../App.css'
import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Home({ props }) {

    const position = [51.505, -0.09];

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.clientX);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const deltaX = event.clientX - startX;
        containerRef.current.scrollLeft = scrollLeft - deltaX;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleScroll = () => {
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const scrollList = (direction) => {
        const scrollAmount = direction === 'forward' ? 150 : -150;
        containerRef.current.scrollLeft += scrollAmount;
        setScrollLeft(containerRef.current.scrollLeft);
    };

    return <>
        <div style={{ position: "relative" }}>
            <img
                src="/home1.png"
                style={{ width: "100%", height: "700px", position: "relative" }}
                alt="home1"
            />
            <div style={{
                position: "absolute",
                top: 150, left: 150,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                padding: "10px", width: "500px", height: "500px",
            }}>
                <p style={{ fontSize: "40px", }}>Florarpino Plants</p>
                <Row ><p style={{ fontSize: "20px", }}>Benvenuti nel meraviglioso mondo floreale di Florarpino, dove la bellezza naturale si fonde con l'eleganza. Siamo appassionati di trasformare i momenti speciali in esperienze indimenticabili attraverso la freschezza e la varietà dei nostri fiori. Da composizioni artistiche a regali floreali personalizzati, ogni creazione è un'espressione unica di amore e natura. Scoprite la magia dei fiori con Florarpino, dove ogni petalo racconta una storia di emozioni e delicatezza.</p></Row>
                <p style={{ fontSize: "20px", }}>Specialisti delle piante</p>
            </div>
        </div>
        <div className="controls">
            <button onClick={() => scrollList('backward')}>←</button>
        </div>
        <div style={{width: "90%", overflow: "hidden", margin: "auto"}}>
            <div
                className="scrollable-container"
                ref={containerRef}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div className="scrollable-content">
                    {/* Aggiungi qui gli elementi della lista orizzontale */}
                    {Array.from({ length: 20 }, (_, index) => (
                        <div key={index} className="list-item">
                            Item 1
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="controls">
            <button onClick={() => scrollList('forward')}>→</button>
        </div>
        <Container fluid>
            <h1>Mettiti in contatto</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Oggetto</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Messaggio</Form.Label>
                    <Form.Control as="textarea" />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Invia
                </Button>
            </Form>
        </Container>
        <div className="map-container">
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL del layer di OpenStreetMap
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Un marker su OpenStreetMap</Popup>
                </Marker>
            </MapContainer>
        </div>
        <Container>
            <Row>
                <Col>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        border: '1px solid #ccc',
                    }}>
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                        }}>Orari di apertura</div>
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                        }}>Nozioni di botanica per giardinaggio</div>
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                        }}>Giorni feriali: 9:00 - 18:00</div>
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                        }}>Fine settimana: 10:00 - 17:00</div>
                    </div>
                </Col>
                <Col>
                    <img
                        src="/home2.jpg"
                        style={{ width: "100%" }}
                        alt="home1"
                    />
                </Col>
            </Row>
        </Container>

    </>
}

export default Home;