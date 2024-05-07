import React from "react";

const Footer = () => {
  return (
    <footer classname="bg-light">
      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            {" "}
            Igreja Batista Betel <small class="d-block my-3 text-muted">© 2012-2024</small>{" "}
          </div>
          <div class="col-6 col-md">
            <h5>
              Mapa do site
            </h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Home
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Sobre nós
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Palavra da semana
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Programação
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>
              Resources
            </h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            
          </div>
          <div class="col-6 col-md">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
