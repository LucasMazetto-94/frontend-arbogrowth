import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "reactstrap";
import imgAbout from "../../assets/images/about_section.png";

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
      <div></div>
      {/* Sobre Section */}
      {/* <div className="feature-bg"> */}
      <div className="feature-content mt-80 mb-5">
        <div className="container">
          <Row className="pt-80" style={{ backgroundColor: "#f1f1f1" }}>
            <Col lg={6} md={12} className="pt-0">
              <p class="top-sub">Inovação e Tecnologia</p>
              <h2 className="pb-3">
                Por quê <span className="text-success">Arbogrowth</span>
              </h2>

              <div className="feature-text section-title">
                <h2>Nosso Compromisso</h2>
                <p className="common-p mb-3">
                  Bem-vindo à Arbo Growth, sua fonte confiável para produtos e
                  cursos especializados em cuidados com árvores, jardins e solo.
                  Nosso compromisso é fornecer soluções de alta qualidade para
                  entusiastas e profissionais da arboricultura e do manejo
                  ambiental.
                </p>
                <h2 className="mt-3">Nossa Missão</h2>
                <p className="common-p">
                  Nossa missão é promover a saúde e a longevidade das árvores,
                  cuidado geral com plantas e jardins e a vitalidade do solo,
                  oferecendo produtos inovadores e conhecimento técnico de
                  ponta. Acreditamos que com os recursos certos, qualquer pessoa
                  pode contribuir para um ambiente mais verde e sustentável.
                </p>
              </div>
            </Col>
            <Col
              lg={6}
              md={12}
              className="position-relative mt-150 mb-50 me-50 pe-0"
            >
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "100%",
                  height: "80%",
                  backgroundImage: `url(${imgAbout})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  WebkitBoxShadow: "0 0 20px #cacaca",
                  boxShadow: "0 0 20px #cacaca",
                  content: '""',
                }}
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* </div> */}

      {/* 
        <Row>
        <div className="section-title">
          <div className="abt-section">
            <div className="container">
              <div className="row">
                <Col lg={12} className="p-0">
                  <div className="abt-text">
                    <h2>
                      Somos <span className="text-success">Arbogrowth</span>
                    </h2>
                    <p className="common-p">
                      Na Arbogrowth, fornecemos insumos, fertilizantes e
                      controladores de pragas de alta qualidade para apoiar o
                      crescimento saudável das suas plantações. Embora sejamos
                      novos no mercado, contamos com parceiros experientes e
                      consolidados, garantindo produtos eficazes e confiáveis
                      para nossos clientes.
                    </p>
                    <p className="common-p">
                      Buscamos ajudar as pessoas a melhorarem suas experiência
                      com o cultivo de plantas, tanto espécies arbóreas quanto
                      para o menejo de jardins domésticos ou cultivos agrícolas
                    </p>
                    <a href="/sobre" className="btn btn-success mt-4">
                      Saiba mais
                    </a>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </Row> */}

      <Row className="pt-80">
        <Col lg={12}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "1920/1080",
            }}
          >
            <iframe
              src="https://share.synthesia.io/embeds/videos/40902347-a1b7-407c-9199-9ce384d6833c"
              title="Synthesia video player - abrogrowth"
              allowFullScreen
              allow="encrypted-media; fullscreen"
              style={{
                position: "absolute",
                width: "100%",
                height: "80%",
                top: "0",
                left: "0",
                border: "none",
                padding: "0",
                margin: "0",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Sobre;
