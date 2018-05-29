import * as React from 'react';
import '../../../styles/index.less';

export interface SpacerProps {spacerHeight: string; }

export default class ContentSpacer extends React.Component<SpacerProps> {

public static defaultProps: Partial<SpacerProps> = {
    spacerHeight: '10%',

  };
  render() {
    return (
        <div className='ct-spacer'>
            <h1>  </h1>
        </div>
    );
  }
}
