import {StyleSheet} from 'react-native';
import {css} from '../../css';

export const styles = StyleSheet.create({
  checkBoxRow: {
    margin: 10,
  },
  checkBoxStyle: {
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  dropdownIconColor: {
    backgroundColor: css.blackColorTrans,
    color: css.whiteColor,
  },
  capacityRow: {
    backgroundColor: css.blackColorTrans,
    justifyContent: 'space-evenly',
    marginTop: 40,
    marginBottom: 10,
  },
  capacityRowSelect: {
    backgroundColor: css.blackColorTrans,
    borderRadius: 5,
    minWidth: 200,
  },
  capacityRowTitle: {
    borderRadius: 5,
    color: css.whiteColor,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  min: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
  max: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
  paper: {
    backgroundColor: css.whiteColor,
  },
  price: {
    color: css.blackColorTrans,
    fontSize: 24,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  pickerItem: {
    color: css.blackColor,
  },
  stylePickerItem: {
    color: css.whiteColor,
    backgroundColor: css.blackColorTrans,
  },
  roomTypeRow: {
    backgroundColor: css.mainColorTrans,
    justifyContent: 'space-evenly',
  },
  roomSelect: {
    backgroundColor: css.mainColor,
    borderRadius: 5,
  },
  roomSelectTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  searchBtn: {
    margin: 20,
    marginTop: 40,
  },
  slider: {
    width: 200,
    height: 60,
  },
  title: {
    backgroundColor: css.blackColorTrans,
    borderColor: css.mainColor,
    borderBottomWidth: 2,
    color: css.whiteColor,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});
