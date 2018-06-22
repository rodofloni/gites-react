import * as React from 'react';
import MainView from '../views/MainView';

export class Demo extends React.PureComponent {
  constructor(props: any) {
    super(props);
}
  public isActive: string = 'true';

  render() {
      return (
        <body>
          <div>
              <MainView isActive={this.isActive}/>
          </div>
        </body>
      );
  }
}
