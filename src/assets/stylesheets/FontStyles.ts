import { StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const getFont = (font: string, size: number, color: string) => {
  return { fontFamily: font, fontSize: Fonts.n(size), color: color };
};

const FontStyles = StyleSheet.create({
  poppinI14greyB1B1B1: getFont(Fonts.POPPINS_I, 14, Colors.grayB1B1B1),
  poppinM7Red: getFont(Fonts.POPPINS_M, 7, Colors.RedE83322),
  poppinM10Black: getFont(Fonts.POPPINS_M, 10, Colors.black),
  poppinM11YellowD9B9707E: getFont(Fonts.POPPINS_M, 11, Colors.yellowD9B9707E),
  poppinM12Black: getFont(Fonts.POPPINS_M, 12, Colors.black),
  poppinM12Blue: getFont(Fonts.POPPINS_M, 12, Colors.blue),
});

export default FontStyles;
