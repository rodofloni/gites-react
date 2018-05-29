import * as React from 'react';
import ContentSpacer from '../components/ContentContainers/ContentSpacer/ContentSpacer';
import ContentTitle from '../components/ContentContainers/ContentTitle/ContentTitle';
import HeaderComponent from '../components/HeaderComponents/HeaderComponent';

export class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <HeaderComponent tab_1={'Vakantiehuizen'} tab_2={'Bed & Breakfast'} tab_3={'Te koop'} tab_4={'Adverteren'} button_login={'Inloggen'}/>
        <ContentSpacer spacerHeight={'50%'}/>
        <ContentTitle titleContent={'Wintersport in Frankrijk'}/>
      </div>

    );
  }
}
