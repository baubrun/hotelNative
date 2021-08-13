import {StyleSheet} from 'react-native';
import {css} from '../../css';

export const styles = StyleSheet.create({
  featuresBtn: {
    backgroundColor: css.blackColorTrans,
    paddingVertical: 10,
    minWidth: '50%',
  },
  featuresContainer: {
    position: 'absolute',
    top: '50%',
    left: '25%',
  },
  featuresText: {
    color: css.whiteColor,
    fontWeight: 'bold',
    letterSpacing: css.mainSpacing,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
    width: 'auto',
  },
  imageContainer: {
    position: 'relative',
  },
  priceContainer: {
    backgroundColor: css.blackColor,
    borderBottomRightRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  priceText: {
    color: css.whiteColor,
  },
  roomContainer: {
    marginTop: 20,
  },
  roomInfo: {
    backgroundColor: css.darkGreyColor,
    paddingVertical: 10,
  },
  roomInfoText: {
    fontWeight: '700',
    letterSpacing: css.mainSpacing,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
