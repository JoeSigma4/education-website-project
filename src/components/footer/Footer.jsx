import { useState } from "react"
import "./Footer.css";
function Footer  () {
    const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>© {year} My Website. All rights reserved.</p>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Footer
