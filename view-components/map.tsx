import * as React from 'react';
import ContentBody from '../components/ContentContainers/ContentBody/ContentBody';
import ContentSpacer from '../components/ContentContainers/ContentSpacer/ContentSpacer';
import ContentTitle from '../components/ContentContainers/ContentTitle/ContentTitle';
import HeaderComponent from '../components/HeaderComponents/HeaderComponent';

export class map extends React.PureComponent {
  render() {
    return (
      <body>
        <div>
          <HeaderComponent tab_1={'Vakantiehuizen'} tab_2={'Bed & Breakfast'} tab_3={'Te koop'} tab_4={'Adverteren'} button_login={'Inloggen'}/>

        </div>
      </body>

    );
  }
}

// <SearchComponent personAmount={9} startDate={'0-0-2019'} endDate={'12-12-2018'} />
