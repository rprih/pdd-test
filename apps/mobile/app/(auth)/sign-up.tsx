import { Input, Layout, Text } from "@ui-kitten/components"
import { Link } from "expo-router"
import { KeyboardAvoidingView, View } from "react-native"

export default function SignUp() {
  return (
    <KeyboardAvoidingView behavior="padding" className="h-full">
      <Layout className="w-full h-full justify-center items-center overflow-y-auto">
        <Text category="h1">Регистрация</Text>
        <Text className="max-w-[240px] text-center">
          Введите ваши данные для регистрации аккаунта
        </Text>
        <View className="gap-4 w-full p-8">
          <Input
            placeholder="Введите почту"
            label="Почта"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Input
            placeholder="Введите пароль"
            label="Пароль"
            textContentType="password"
          />
          <Input
            placeholder="Повторить пароль"
            label="Повторить пароль"
            textContentType="password"
          />
          <Link href="sign-in">
            <Text className="text-center">У меня уже есть аккаунт</Text>
          </Link>
        </View>
      </Layout>
    </KeyboardAvoidingView>
  )
}
