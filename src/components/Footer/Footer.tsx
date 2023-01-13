import React from "react";
import '../Footer/Footer.css'


const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div style={{ background: 'white', padding: 10, borderRadius: 10, cursor: 'pointer' }}>
        <img style={{ marginBottom: 10 }} src="https://rs.school/images/rs_school_js.svg"></img>
        <a href="https://rs.school/js/">RS School</a>
      </div>
      <div>
        <a style={{ color: 'white', cursor: 'pointer' }} href="https://github.com/KarinaBertosh">GitHub Karina</a>
      </div>
      <div>
        <a style={{ color: 'white', cursor: 'pointer' }} href="https://github.com/Tipok-1">GitHub Timofei</a>
      </div>
      <div style={{ color: 'white' }}>2022</div>
    </div>
  )
}

export default Footer;