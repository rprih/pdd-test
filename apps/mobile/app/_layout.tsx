import { useFonts } from "expo-font"
import { Slot } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"
import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"

import "../global.css"
import { useColorScheme } from "react-native"

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  const colorSchema = useColorScheme() ?? "light"

  useEffect(() => {
    if (loaded) {
      void SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ApplicationProvider
      {...eva}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      theme={colorSchema === "dark" ? eva.dark : eva.light}
    >
      <Slot />
    </ApplicationProvider>
  )
}
