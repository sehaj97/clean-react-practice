import { useState, useEffect } from "react";

import chef from "../../chef.png";

import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function RecipesPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d9dad9296bmsha7000b8f518c02dp17e1bdjsn8996493bf2b7",
          "X-RapidAPI-Host": "random-recipes.p.rapidapi.com",
        },
      };
      const response = await fetch(
        "https://random-recipes.p.rapidapi.com/ai-quotes/20",
        options
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card
        border="secondary"
        style={{
          width: "22rem",
          height: "90vh",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Card.Body>
          <Card.Title className="text-start" style={{ fontSize: "2rem" }}>
            Welcome Great chef!
          </Card.Title>
          <Card.Title className="text-start" style={{ fontSize: "1rem" }}>
            Directly from Chef's Kitchen...
          </Card.Title>

          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 border border-warning rounded-circle"
                src={data && data[0].image}
                alt="First slide"
                style={{ height: "300px" }}
              />
              <Carousel.Caption
                className="bg-success p-1 bg-opacity-50 rounded"
                style={{ height: "50%" }}
              >
                <h3>{data && data[0].title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 border border-warning rounded-circle"
                src={data && data[1].image}
                alt="Second slide"
                style={{ height: "300px" }}
              />

              <Carousel.Caption
                className="bg-success p-1 bg-opacity-50 rounded"
                style={{ height: "50%" }}
              >
                <h3>{data && data[1].title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 border border-warning rounded-circle"
                src={data && data[2].image}
                alt="Third slide"
                style={{ height: "300px" }}
              />

              <Carousel.Caption
                className="bg-success p-1 bg-opacity-50 rounded"
                style={{ height: "50%" }}
              >
                <h3>{data && data[2].title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 border border-warning rounded-circle"
                src={data && data[3].image}
                alt="Third slide"
                style={{ height: "300px" }}
              />

              <Carousel.Caption
                className="bg-success p-1 bg-opacity-50 rounded"
                style={{ height: "50%" }}
              >
                <h3>{data && data[3].title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 border border-warning rounded-circle"
                src={data && data[2].image}
                alt="Third slide"
                style={{ height: "300px" }}
              />

              <Carousel.Caption
                className="bg-success p-1 bg-opacity-50 rounded"
                style={{ height: "50%" }}
              >
                <h3>{data && data[2].title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Card.Text style={{ fontSize: "3rem" }}>TODO: </Card.Text>

          <Card.Title className="text-start" style={{ fontSize: "1rem" }}>
            Our Recommendations
          </Card.Title>
          <Carousel slide={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 border border-warning rounded-circle"
                src={data && data[0].image}
                alt="First slide"
                style={{ height: "200px" }}
              />
              <Carousel.Caption
                className="bg-success p-1 bg-opacity-50 rounded"
                style={{ height: "50%" }}
              >
                <h3>{data && data[0].title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 border border-warning rounded-circle"
                src={data && data[1].image}
                alt="Second slide"
                style={{ height: "200px" }}
              />

              <Carousel.Caption
                className="bg-success p-1 bg-opacity-50 rounded"
                style={{ height: "50%" }}
              >
                <h3>{data && data[1].title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipesPage;
