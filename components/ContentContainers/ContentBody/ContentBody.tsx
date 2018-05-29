import * as React from 'react';
import '../../../styles/index.less';

export interface BodyProps {bodyTitle: string; bodyContent: string; }

export default class ContentBody extends React.Component<BodyProps> {

public static defaultProps: Partial<BodyProps> = {
    bodyTitle: 'Geweldig Vakantiegebied',
    bodyContent: 'fjdlks jkfd sjlkfdjslkfjdlksj lfdsjflkdsj flkkdsjflk dsjlk fkdsjlkf djsk fskdj fljddslk jflkds jlkfdsj lkjflkds jklfdj lsk isi. ',

  };
  render() {
    return (
        <div className='ct-body-container'>
            <div className='ct-body-spacing'>
                <h2 id='ct-body-title'> {this.props.bodyTitle} </h2>
                <p id='cs-body-content'> {this.props.bodyContent} </p>
            </div>
        </div>
    );
  }
}
