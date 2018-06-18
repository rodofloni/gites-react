import * as React from 'react';
import MainView from '../views/MainView';

export class Demo extends React.PureComponent {
  constructor(props: any) {
    super(props);
    this.state = 'true';
}
  public isActive: string = 'true';

  onComponentClick(): void {
      this.isActive = 'false';
      // tslint:disable-next-line:no-console
      console.log(this.isActive);
    }
  render() {
      // tslint:disable-next-line:no-console
      console.log(this.state);
      return (
        <body>
          <div>
              <MainView isActive={this.isActive}/>
              <button  onClick = { () => this.onComponentClick() }> toggle </button>
          </div>
        </body>
      );
  }
}

// <SearchComponent personAmount={9} startDate={'0-0-2019'} endDate={'12-12-2018'} />
