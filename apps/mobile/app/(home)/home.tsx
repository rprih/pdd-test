import { Button, Layout } from "@ui-kitten/components"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function MainMenu() {
  return (
    <Layout className="w-full h-full">
      <SafeAreaView>
        <View className="w-full h-full justify-center items-center">
          <Button>Тестирование</Button>
        </View>
      </SafeAreaView>
    </Layout>
  )
}
