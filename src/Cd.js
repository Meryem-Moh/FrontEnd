import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import Header from "./components/Header";

import * as ReactBootStrap from "react-bootstrap";

import CD from './images/Cd.jpg';


const Cd = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  /*
console.log("Tesst", localStorage.getItem("JWTToken"));
    fetch(url, {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "Authorization" : `Bearer ${ localStorage.getItem("JWTToken")}`
        
      },
    //  "body": JSON.stringify(),
    })
    .then(response => response.json())
  .then(response => {
    });






  */



  const year = new Date().getFullYear;
  return (
    <div>
      <h1>Merit Banking Services</h1>
      <img src={CD}></img>
      <form>
      <ReactBootStrap.Nav.Link js-scroll-trigger a href="/account">
            Home
       </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link js-scroll-trigger a href="/deposit">
           Click here to Create CD Account
            </ReactBootStrap.Nav.Link>

      <ReactBootStrap.Nav.Link js-scroll-trigger a href="/deposit">
           Click here to make Deposit
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link js-scroll-trigger a href="/transfer">
            Click here to make Transfer
            </ReactBootStrap.Nav.Link>
         <ReactBootStrap.Nav.Link js-scroll-trigger a href="/account">
           Close CD Account
        </ReactBootStrap.Nav.Link>   
        </form>
        
           < footer>
           <div className="container">
              <div className="row">
                {/*column 1*/}
                <div className="col">
                  <h4>Created By: </h4>
                  <ul className="list-unstyled">
                    <li>Merit America's Cohort Developers in 2020</li>
                  </ul>
                </div>
                {/*column 2*/}
                <div className="col">
                  <h4>Disclaimer:</h4>
                  <ul className="list-unstyled">
                    <li>This is not a real bank</li>
                    <li>Not FDIC insured</li>
                    <li>This is a group capstone for presentation purposes</li>
                  </ul>
                </div>
                {/*column 3*/}
                <div className="col">
                  <h4>Located In:</h4>
                  <ul className="list-unstyled">
                    <li>Dallas, TX</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/meritamerica">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/meritamerica.org/">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/school/meritamerica/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/wearemeritamerica/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm">
                  <p>
                    Copyright ⓒ {year} Merit Banking Services | All Rights
                    Reserved | Terms of Service | Privacy{" "}
                  </p>
                </div>
              </div>
            </div>
           </footer>
      

    </div>

  );
}

export default Cd;
