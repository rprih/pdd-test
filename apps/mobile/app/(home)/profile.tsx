import { Button, Layout } from "@ui-kitten/components"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Profile() {
  return (
    <Layout className="w-full h-full">
      <SafeAreaView>
        <View className="w-full h-full justify-center items-center">
          <Button>Выйти из аккаунта</Button>
        </View>
      </SafeAreaView>
    </Layout>
  )
}
