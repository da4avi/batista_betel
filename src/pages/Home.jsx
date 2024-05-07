import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import culto from "../images/culto.jpg";
import louvor from "../images/louvor.jpg";

export default function Home() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      <div className="carousel-inner d-flex" style={{ maxHeight: "400px" }}>
        <div className="carousel-item active">
          <img
            src={culto}
            className="d-block w-100"
            alt="Slide 1"
            style={{ objectFit: "cover", height: "100%" }}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Culto de domingo</h5>
          </div>
        </div>

        <div className="carousel-item active">
          <img
            src={louvor}
            className="d-block w-100"
            alt="Slide 1"
            style={{ objectFit: "cover", height: "100%" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Grupo de louvor</h5>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
