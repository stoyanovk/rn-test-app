import * as Fonts from 'expo-font'

export default async function () {
  await Fonts.loadAsync({
    Noto: require('../../assets/fonts/NotoSansJP-Regular.otf'),
    NotoBold: require('../../assets/fonts/NotoSansJP-Bold.otf')
  })
}
