import React from "react";
import "./Footer.css";
const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <button className="top-button" onClick={handleClick}>
        <div>Back to Top</div>
      </button>
      <div>
        <h2
          style={{
            fontStyle: "italic",
            fontWeight: "900",
            fontFamily: "sans-serif",
          }}
        >
          FitZone
        </h2>
        <p>All Rights Reserved </p>
      </div>
    </div>
  );
};
export default Footer;

// {
//   /* footer content */
// }
// <div className="footer-content">
//   <div className="row1">
//     <h4 className="footer-heading">Get to Know Us</h4>
//     <a>About Us</a>
//     <a>Careers</a>
//     <a>Press Release</a>
//     <a>Amazon Science</a>
//   </div>
//   <div className="row2">
//     <h4 className="footer-heading">Connect With Us</h4>
//     <a>Facebook</a>
//     <a>Twitter</a>
//     <a>Instagram</a>
//   </div>
//   <div className="row3">
//     <h4 className="footer-heading">Make Money With Us</h4>
//     <a>Sell on Amazon</a>
//     <a>Sell under Amazon Accelerator</a>
//     <a>Protect and Build Your Brand</a>
//     <a>Amazon Global Selling</a>
//     <a>Fulfilment by Amazon</a>
//   </div>

//   <div className="row4">
//     <h4 className="footer-heading">Let Us Help You</h4>
//     <a>COVID-19 and Amazon</a>
//     <a>Your Account</a>
//     <a>Return Centre</a>
//     <a>100% Purchase Protection</a>
//     <a>Amazon App Download</a>
//   </div>
// </div>;
