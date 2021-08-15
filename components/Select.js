import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {css} from '../css';
import {StyleSheet} from 'react-native';

const Select = props => {
  return (
    <Picker
      dropdownIconColor={props.styling ? css.whiteColor : css.blackColor}
      selectedValue={props.selected}
      onValueChange={val => props.setSelected(val)}
      testID={props.name}>
      {props.items.map((item, idx) => {
        return (
          <Picker.Item
            style={props.styling ? styles.stylePickerItem : styles.pickerItem}
            key={idx}
            label={item}
            value={item}
          />
        );
      })}
    </Picker>
  );
};

export const styles = StyleSheet.create({
  stylePickerItem: {
    color: css.whiteColor,
    backgroundColor: css.blackColorTrans,
  },
  pickerItem: {
    color: css.blackColor,
  },
});

export default Select;
