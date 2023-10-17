import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D428A', // Cor de fundo azul característica da NBA
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#FDB927', // Cor da borda dos campos de entrada (amarelo)
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white', // Cor do texto nos campos de entrada (branco)
  },
  button: {
    marginBottom: 20,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Cor do texto para o nome do jogador (branco)
  },
  stats: {
    fontSize: 16,
    marginVertical: 5,
    color: 'white', // Cor do texto para as estatísticas (branco)
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9082A', // Cor de fundo azul característica da NBA
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Cor do texto (branco)
    marginBottom: 20,
  },
  input2: {
    borderWidth: 1,
    borderColor: '#FDB927', // Cor da borda dos campos de entrada (amarelo)
    margin: 10,
    padding: 5,
    borderRadius: 5,
    width: '80%',
    color: 'white', // Cor do texto nos campos de entrada (branco)
  },
  leaderText: {
    fontSize: 18,
    color: 'white', // Cor do texto para os líderes (branco)
    margin: 10,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Cor do texto
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo para o texto com transparência
    padding: 10,
    textAlign:'center'
  },

});

  export default styles;