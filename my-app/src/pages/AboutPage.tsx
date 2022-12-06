import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div data-testid="about" className="container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/47ceXAEr2Oo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default AboutPage;
