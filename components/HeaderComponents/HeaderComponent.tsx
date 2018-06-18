import * as React from 'react';
import '../../styles/index.less';

export interface HeaderProps {tab_1: string; tab_2: string; tab_3: string; tab_4: string; button_login: string; }
// tslint:disable-next-line:no-var-requires
const gitesLogo = require('../../img/gites_logo.png');

export default class HeaderComponent extends React.Component<HeaderProps> {

  public static defaultProps: Partial<HeaderProps> = {
      tab_1: 'Vakantiehuizen',
      tab_2: 'Bed & Breakfast',
      tab_3: 'Te koop',
      tab_4: 'Adverteren',
      button_login: 'Inloggen',
  };
  render() {
    return (
      <div className='hd-container'>
        <ul className='hd-navbar'>
          <li id='hd-navbar-tab'><img className='gites_logo' src={gitesLogo} /></li>
          <li id='hd-navbar-tab'><a href={'https://www.gites.nl/vakantiehuizen'}>{this.props.tab_1}</a></li>
          <li id='hd-navbar-tab'><a href={'https://www.gites.nl/bed-and-breakfasts'}>{this.props.tab_2}</a></li>
          <li id='hd-navbar-tab'><a href={'https://www.gites.nl/tekoop'}>{this.props.tab_3}</a></li>
          <li id='hd-navbar-tab'><a href={'https://www.gites.nl/adverteren'}>{this.props.tab_4}</a></li>
          <li id='hd-navbar-button'><a href='ghajf.php'>{this.props.button_login} </a></li>
        </ul>
        <ul className='hd-navbar-mobile'>
          <li id='hd-navbar-tab'><img className='gites_logo' src={gitesLogo} /></li>
          <li id='hd-navbar-button'><a href='ghajf.php'>{this.props.button_login} </a></li>
        <div className='hamburger-bundle'>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
        </div>
        </ul>
       </div>
    );
  }
}
