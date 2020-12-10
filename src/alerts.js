import { Alert } from 'react-native'

export const createToButtonAlert = ({ title = '', text = '', success = () => {} }) =>
  Alert.alert(
    title,
    text,
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'OK', onPress: success }
    ],
    { cancelable: false }
  )
