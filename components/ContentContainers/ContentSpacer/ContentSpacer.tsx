import * as React from 'react';
import '../../../styles/index.less';
import SearchComponent from '../../SearchComponent/SearchComponent';

// Defining the interface.
export interface SpacerProps {spacerHeight: string; }

export default class ContentSpacer extends React.Component<SpacerProps> {

// Defining the default props. not yet implemented as inserting props into CSS wasn't a prioritary functionality.
public static defaultProps: Partial<SpacerProps> = {
    spacerHeight: '10%',

  };
// Declaring what is being rendered.
  render() {
    return (
        <div className='ct-spacer'>
            <SearchComponent vacationType={'wintersport'} />
        </div>
    );
  }
}
