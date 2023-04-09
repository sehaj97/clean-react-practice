import chef from "./chef.png";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card border="secondary" style={{ width: "18rem", height: "90vh" }}>
          <Card.Img variant="top" src={chef} />
          <Card.Body>
            <Card.Title className="text-start" style={{ fontSize: "4rem" }}>
              Let's Hook to Cook!
            </Card.Title>
            <Card.Text className="text-start">
              <Button variant="success">Get Started</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
