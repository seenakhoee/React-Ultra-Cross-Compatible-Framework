import React from 'react';

import { View } from 'react-native';

import styles from 'react-zeolite-styles/Card';
import globalStyles from 'global-styles';

/**
 * A container component with a drop shadow.
**/

export default class Card extends React.Component {

  render(props = this.props) {
    const {
      style,
      children,
      ...otherProps
    } = this.props;

    const containerStyle = [
      styles.container,
      props.style
    ];

    return (
      <View style={containerStyle} {...otherProps}>
        {children}
      </View>
    );
  }

}
