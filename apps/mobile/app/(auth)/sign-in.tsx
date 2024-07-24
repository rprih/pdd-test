import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { Link } from "expo-router"
import { KeyboardAvoidingView, View } from "react-native"

export default function SignIn() {
  return (
    <KeyboardAvoidingView behavior="padding" className="h-full">
      <Layout className="w-full h-full justify-center items-center overflow-y-auto">
        <Text category="h1">Вход</Text>
        <Text className="max-w-[240px] text-center">
          Введите ваши данные для входа
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
          <Button>Войти</Button>
          <Link href="sign-up">
            <Text className="text-center">Регистрация</Text>
          </Link>

          <Link href="home">
            <Text className="text-center">
              Перейти на вкладку главного меню
            </Text>
          </Link>
        </View>
      </Layout>
    </KeyboardAvoidingView>
  )
}
