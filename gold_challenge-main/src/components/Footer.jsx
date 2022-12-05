import * as React from "react";
import FB from "../assets/img/FB.PNG";
import IG from "../assets/img/IG.PNG";
import TWT from "../assets/img/TW.PNG";
import MAIL from "../assets/img/MAIL.PNG";
import TC from "../assets/img/TC.PNG";
import LG from "../assets/img/logo.png";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-lg-3">
            <p className="footer" style={{ fontWeight: 700 }}>
              Jalan Suroyo No. 161 Mayangan Kota <br />
              Probolonggo 672000 <br />
              <br />
              binarcarrental@gmail.com <br />
              <br />
              081-233-334-808
            </p>
          </div>
          <div className="col-lg-3">
            <Nav.Link href="#ourService">Our Services</Nav.Link>
            <br />
            <Nav.Link href="#whyUs">Why Us</Nav.Link>
            <br />
            <Nav.Link href="#testimony">Testimonial</Nav.Link>
            <br />
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <br />
          </div>
          <div className="col-lg-3" style={{ fontWeight: 700 }}>
            <p className="footer">
              Connect with us <br />
              <br />
              <img src={FB} width={30} height={30} style={{ marginBottom: "20px" }} />
              <img src={IG} width={30} height={30} style={{ marginBottom: "20px", marginLeft: "12px" }} />
              <img src={TWT} width={30} height={30} style={{ marginBottom: "20px", marginLeft: "12px" }} />
              <img src={MAIL} width={30} height={30} style={{ marginBottom: "20px", marginLeft: "12px" }} />
              <img src={TC} width={30} height={30} style={{ marginBottom: "20px", marginLeft: "12px" }} />
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: 700 }}>
            <p className="footer">
              Copyright Binar 2022 <br />
              <br />
              <a href="/">
                <img src={LG} alt="" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
