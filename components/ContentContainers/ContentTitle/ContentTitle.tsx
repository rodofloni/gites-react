import * as React from 'react';
import '../../../styles/index.less';

// Defining the interface.
export interface TitleProps {titleContent: string; }

export default class ContentTitle extends React.Component<TitleProps> {

// Defining the default props.
public static defaultProps: Partial<TitleProps> = {
    titleContent: 'Geweldig Vakantiegebied',

  };
// Declaring what is being rendered.
  render() {
    return (
        <div className='ct-title-container'>
            <div className='ct-title-spacing'>
                <h1 id='ct-title-name'> {this.props.titleContent} </h1>
            </div>
        </div>
    );
  }
}
