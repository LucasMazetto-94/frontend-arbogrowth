import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeamMember1 from "../../assets/images/users/avatar-12.png";
import TeamMember2 from "../../assets/images/users/avatar-13.png";
import TeamMember3 from "../../assets/images/users/avatar-14.png";
import TeamMember4 from "../../assets/images/users/avatar-15.png";
import ImageFundo from "../../assets/images/home.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sobre = () => {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <div
        className="hero-area hero-bg"
        style={{
          backgroundImage: `url(${ImageFundo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "650px", // Ajuste conforme necessário
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <div className="hero-text text-white">
                <h1>Sobre Nós</h1>
                <p className="subtitle">Conheça nossa história e missão</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sobre Section */}
      <div className="sobre-section pt-5 pb-5">
        <Container>
          <Row>
            <Col md="6">
              <h2>Nossa História</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Col>
            <Col md="6">
              <h2>Nossa Missão</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Equipe Section */}
      <div className="equipe-section pt-5 pb-5">
        <Container>
          <h2 className="text-center mb-5">Nossa Equipe</h2>
          <Row>
            <Col lg="3" md="6" className="mb-4">
              <div className="team-member">
                <img src={TeamMember1} alt="Team Member" />
                <div className="team-member-info">
                  <h3>João Silva</h3>
                  <p>CEO</p>
                  <div className="team-member-social">
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="6" className="mb-4">
              <div className="team-member">
                <img src={TeamMember2} alt="Team Member" />
                <div className="team-member-info">
                  <h3>Maria Santos</h3>
                  <p>Marketing Manager</p>
                  <div className="team-member-social">
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="6" className="mb-4">
              <div className="team-member">
                <img src={TeamMember3} alt="Team Member" />
                <div className="team-member-info">
                  <h3>Pedro Oliveira</h3>
                  <p>Operations Manager</p>
                  <div className="team-member-social">
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="6" className="mb-4">
              <div className="team-member">
                <img src={TeamMember4} alt="Team Member" />
                <div className="team-member-info">
                  <h3>Ana Costa</h3>
                  <p>Customer Support</p>
                  <div className="team-member-social">
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Sobre;
