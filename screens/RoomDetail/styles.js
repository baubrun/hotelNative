import {StyleSheet} from 'react-native';
import {css} from '../../css';

export const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  extrasContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
  },
  detailsInfo: {
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '50%',
  },
  textRow: {
    marginVertical: 5,
  },
  title: {
    color: css.blackColor,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: 350,
    width: 'auto',
  },
  moreImages: {
    paddingLeft: 10,
  },
});
