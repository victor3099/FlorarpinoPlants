import { Row } from "react-bootstrap";

function Home({ props }) {

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
    </>
}

export default Home;