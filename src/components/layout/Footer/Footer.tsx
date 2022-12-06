import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://github.com/aleksa-mnk" className="footer__git">
          <img
            className="footer__git--img"
            src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
            alt=""
          />
          <p>Aleksa Mankevich</p>
        </a>
        <a className="footer__href" href="https://rs.school/">
          <img className="footer__rs" src="https://rs.school/images/rs_school.svg" alt="" />
        </a>
        <p className="footer__about">© React-components 2022</p>
      </footer>
    );
  }
}

export default Footer;
