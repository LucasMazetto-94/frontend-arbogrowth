import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sobre = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Um pouco de nosso trabalho</p>
                <h1>Sobre Nós</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sobre Section */}
      <div className="feature-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 feature-content">
              <h2 className="pb-3">
                Por quê <span className="text-success">Arbogrowth</span>
              </h2>
              <div className="row">
                <div className="col-12">
                  <h2>Nosso Compromisso</h2>
                  <p className="mb-3">
                    Bem-vindo à Arbo Growth, sua fonte confiável para produtos e
                    cursos especializados em cuidados com árvores, jardins e
                    solo. Nosso compromisso é fornecer soluções de alta
                    qualidade para entusiastas e profissionais da arboricultura
                    e do manejo ambiental.
                  </p>
                  <h2 className="mt-3">Nossa Missão</h2>
                  <p>
                    Nossa missão é promover a saúde e a longevidade das árvores,
                    cuidado geral com plantas e jardins e a vitalidade do solo,
                    oferecendo produtos inovadores e conhecimento técnico de
                    ponta. Acreditamos que com os recursos certos, qualquer
                    pessoa pode contribuir para um ambiente mais verde e
                    sustentável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipe Section */}
      <div className="mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  Nosso <span className="text-success">Time</span>
                </h3>
                <p>
                  Contamos com profissionais preparados para tirar suas duvidas
                  e oferecer os melhores produtos do mercado.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-item">
                <div className="team-bg team-bg-1"></div>
                <h4>
                  Jimmy Doe <span>Farmer</span>
                </h4>
                <ul className="social-link-team">
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-item">
                <div className="team-bg team-bg-2"></div>
                <h4>
                  Marry Doe <span>Farmer</span>
                </h4>
                <ul className="social-link-team">
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-team-item">
                <div className="team-bg team-bg-3"></div>
                <h4>
                  Simon Joe <span>Farmer</span>
                </h4>
                <ul className="social-link-team">
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
