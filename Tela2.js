import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './Estilo';

const Tela2 = () => {
  const [playerData, setPlayerData] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [season, setSeason] = useState(''); // Ano desejado

  const fetchPlayerData = async () => {
    try {
      if (!playerName || !season) {
        // Verifique se playerName e season estão preenchidos antes de fazer a solicitação
        return;
      }

      // Verifique se o ano está dentro do intervalo válido (2010 a 2023)
      const parsedSeason = parseInt(season);
      if (isNaN(parsedSeason) || parsedSeason < 2010 || parsedSeason > 2023) {
        alert('Por favor, digite um ano válido entre 2010 e 2023.');
        return;
      }

      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const apiUrl = "https://nba-stats-db.herokuapp.com/api/playerdata/name/" + encodeURIComponent(playerName);

      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();

      if (data && data.results && data.results.length > 0) {
        // Encontrar a temporada desejada nos resultados
        const player = data.results.find(item => item.season == season);

        if (player) {
          // Dados do jogador encontrados, sete os dados no estado
          setPlayerData(player);
        } else {
          // Dados do jogador não encontrados para a temporada especificada
          setPlayerData(null);
        }
      } else {
        // Dados do jogador não encontrados para o jogador especificado
        setPlayerData(null);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do jogador:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas da NBA</Text>
      <TextInput
        placeholder="Nome do Jogador"
        value={playerName}
        onChangeText={(text) => setPlayerName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Temporada (ano)"
        value={season}
        onChangeText={(text) => setSeason(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button
        title="Buscar Dados"
        onPress={fetchPlayerData}
        style={styles.button}
      />
      <Text style={styles.playerName}>Jogador: {playerData ? playerData.player_name : 'Não encontrado'}</Text>
      <Text style={styles.stats}>Pontos: {playerData ? playerData.PTS : 'N/A'}</Text>
      <Text style={styles.stats}>Assistências: {playerData ? playerData.AST : 'N/A'}</Text>
      <Text style={styles.stats}>Rebotes: {playerData ? playerData.TRB : 'N/A'}</Text>
    </View>
  );
};

export default Tela2;
