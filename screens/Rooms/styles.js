import {StyleSheet} from 'react-native';
import {css} from '../../css';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  emptySearch: {
    flex: 1,
    justifyContent: 'center',
  },
  emptySearchText: {
    backgroundColor: css.blackColorTrans,
    color: css.whiteColor,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
