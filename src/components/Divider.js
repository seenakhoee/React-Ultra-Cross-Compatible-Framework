import React from 'react';

import { View } from 'react-native';

//import styles from 'react-zeolite-styles/View';

/**
 * A thin line used to sparate components.
**/

export default class Divider extends React.Component {

  render(props = this.props) {
    return (
      <View style={[{backgroundColor: 'hsl(0, 0%, 90%)', height: 1, margin: '0 10px'}, props.style]} />
    );
  }

}
