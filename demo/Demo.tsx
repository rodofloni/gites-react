import * as React from 'react';
import HeaderComponent from '../components/HeaderComponents/HeaderComponent'



export class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <HeaderComponent tab_1={'Vakantiehuizen'} tab_2={'Bed & Breakfast'} tab_3={'Te koop'} tab_4={'Adverteren'} button_login={'Inloggen'}/>
      </div>
    );
  }
}


