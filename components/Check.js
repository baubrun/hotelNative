import React from 'react';
import CheckBox from 'react-native-check-box';
import {css} from '../css';

const Check = props => {
  return (
    <CheckBox
      checkBoxColor={css[props.checkBoxColor]}
      isChecked={props.state}
      leftText={props.leftText}
      leftTextStyle={props.leftTextStyle}
      onClick={() => {
        props.setState(prev => !prev);
      }}
    />
  );
};

export default Check;
