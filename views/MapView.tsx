import * as React from 'react';
// import Map from '../components/ContentContainers/ContentMap/Map';
import HeaderComponent from '../components/HeaderComponents/HeaderComponent';

export interface MapProps {isActive: string; }

export default class MapView  extends React.Component<MapProps> {
  constructor(props: any) {
    super(props);
    this.state = 'true';
}

  render() {
    if (this.state === 'true') {
      // tslint:disable-next-line:no-console
      console.log(this.state );
      return (
        <body>
             <div>
              <HeaderComponent tab_1={'Vakantiehuizen'} tab_2={'Bed & Breakfast'} tab_3={'Te koop'} tab_4={'Adverteren'} button_login={'Inloggen'}/>
              {/* <Map spacerHeight={'10%'}/> */}
            </div>
          <button  onClick = { () => this.state = 'false' }> ffds </button>
      </body>
      );
    } else {
      return (
        <body>
          <div>
            <button  onClick = { () => this.state = 'false' }> ffds </button>
          </div>
        </body>
      );
    }

  }
}
