import * as React from 'react';
import '../../../styles/index.less';

export interface TitleProps {titleContent: string; }

export default class ContentTitle extends React.Component<TitleProps> {

public static defaultProps: Partial<TitleProps> = {
    titleContent: 'Geweldig Vakantiegebied',

  };
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
