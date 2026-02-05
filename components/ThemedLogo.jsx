import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/shelfie_dark.png'
import LightLogo from '../assets/shelfie.png'

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo