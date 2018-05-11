import * as React from 'react';
// import headerComponent from '../components/headerComponent/headerComponent'


export class Demo extends React.PureComponent {
  render() {
    return (
      <div className="hd-container">
        <ul className="hd-navbar">
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul> 
      </div>
    );
  }
}


