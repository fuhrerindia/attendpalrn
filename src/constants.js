import { Appearance } from "react-native";

const constants = {
    colors: Appearance.getColorScheme() === 'dark' ? {
        grey: '#dddddd',
        bg: '#222222',
        silver: '#212121',
        black: '#171717',
        white: '#ffffff',
        textWhite: '#ffffff',
        teal: {
            top: '#256D69',
            bottom: '#066761',
            dark: '#033F3B',
        },
        blue: {
            top: '#1171AD',
            bottom: '#07698C',
            dark: '#003D53',
        }
    } : {
        grey: '#dddddd',
        bg: '#ffffff',
        silver: '#C6C6C6',
        black: '#ffffff',
        textWhite: '#ffffff',
        white: '#171717',
        teal: {
            top: '#256D69',
            bottom: '#066761',
            dark: '#033F3B',
        },
        blue: {
            top: '#1171AD',
            bottom: '#07698C',
            dark: '#003D53',
        }
    },
    appName: 'AttendPal'
};
export default constants;