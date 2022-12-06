import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

class Layout extends React.Component<{ children: JSX.Element }> {
  render() {
    return (
      <>
        <Header />
        <main className="main">{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
