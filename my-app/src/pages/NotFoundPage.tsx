import React from 'react';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found" data-testid="not-found">
        This is not the page <br />
        you&apos;re looking for...
      </div>
    );
  }
}

export default NotFoundPage;
