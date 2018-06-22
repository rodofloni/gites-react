import * as React from 'react';
import '../../../styles/index.less';

// Defining the interface.
export interface BodyProps {bodyTitle: string; bodyContent: string; }

export default class ContentBody extends React.Component<BodyProps> {

// Defining the default props.
public static defaultProps: Partial<BodyProps> = {
    bodyTitle: 'Geweldig Vakantiegebied',
    bodyContent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',

  };

// Declaring what is being rendered.
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
