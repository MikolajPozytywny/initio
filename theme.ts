
import { MD3LightTheme as DefaultTheme} from 'react-native-paper';

 
export const theme = {
  ...DefaultTheme,
  colors: {
    'tomato': 'yellow',
   
    ...DefaultTheme.colors,
    
    primary: 'tomato',
    secondary: 'yellow',
  },
};

