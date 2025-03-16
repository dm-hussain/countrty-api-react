import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-danger  fixed-bottom  ">
    <div className="container  ">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end align-items-center   list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"> </a></li>
      <FaFacebook />

      <li className="ms-3"><a className="text-body-secondary" href="#"> </a>
      <FaInstagramSquare />

      </li>
      <li className="ms-3"><a className="text-body-secondary" href="#">  </a>
      <FaLinkedin />

      </li>
    </ul>
  </footer>
</div>
</div>
  )
}

export default Footer