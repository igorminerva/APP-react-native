import { Text,View, Image } from 'react-native';
import styles from './Estilo';



const Tela1 = () => {
 const text = "Estatísticas da NBA \n 2010-2023"
  return (
    <View style={styles.container3}>
      <Image
        source={{ uri: 'https://4kwallpapers.com/images/wallpapers/kobe-bryant-nba-1080x2340-12699.jpg' }} // Substitua com a URL da sua imagem
        style={styles.backgroundImage}
      />
      <Text style={styles.title2}>{text}</Text>
    </View>
  );
};

export default Tela1;

