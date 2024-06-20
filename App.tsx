import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import {Routes} from './src/routes';

// Para ficar na tela Splash
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if(fontsLoaded){
    // quando fonte for carregada tela Splash sai
    SplashScreen.hideAsync()
  } else {
    return
  };

  return (
    <>
      <StatusBar 
        style="light" 
        translucent
        backgroundColor='transparent'
      />

      <Routes/>

    </>
  );
}
