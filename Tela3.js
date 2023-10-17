import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './Estilo';

const Tela3 = () => {
  const [ano, setAno] = useState('');
  const [pontosLeader, setPontosLeader] = useState('');
  const [assistsLeader, setAssistsLeader] = useState('');
  const [reboundsLeader, setReboundsLeader] = useState('');

  const buscarEstatisticas = () => {
    if (!ano.match(/^\d{4}$/) || parseInt(ano) < 2010 || parseInt(ano) > 2023) {
      alert('Por favor, digite um ano válido entre 2010 e 2023.');
      return;
    }

    // Função para obter o nome do primeiro jogador em uma estatística
    const getFirstName = (data) => {
      if (Array.isArray(data.results) && data.results.length > 0) {
        return data.results[0].player_name;
      }
      return 'Nenhum jogador encontrado';
    };

    // Requisição para obter o líder em pontos
    fetch(`https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/${ano}`)
      .then((response) => response.json())
      .then((data) => {
        const pontosLeaderName = getFirstName(data);
        setPontosLeader(`Maior Pontuador: ${pontosLeaderName}`);
      })
      .catch((error) => console.log('Erro ao buscar líder em pontos:', error));

    // Requisição para obter o líder em assistências
    fetch(`https://nba-stats-db.herokuapp.com/api/top_assists/totals/${ano}`)
      .then((response) => response.json())
      .then((data) => {
        const assistsLeaderName = getFirstName(data);
        setAssistsLeader(`Maior Assistente: ${assistsLeaderName}`);
      })
      .catch((error) => console.log('Erro ao buscar líder em assistências:', error));

    // Requisição para obter o líder em rebotes
    fetch(`https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/${ano}`)
      .then((response) => response.json())
      .then((data) => {
        const reboundsLeaderName = getFirstName(data);
        setReboundsLeader(`Maior Reboteiro: ${reboundsLeaderName}`);
      })
      .catch((error) => console.log('Erro ao buscar líder em rebotes:', error));
  };

  return (
    <View style={styles.container2}>
      <Text style={styles.title}>Estatísticas da NBA</Text>
      <TextInput
        placeholder="Digite o ano (entre 2010 e 2023)"
        value={ano}
        onChangeText={(text) => setAno(text)}
        keyboardType="numeric"
        style={styles.input2}
      />
      <Button title="Buscar" onPress={buscarEstatisticas} color="#FDB927" />
      <Text style={styles.leaderText}>{pontosLeader}</Text>
      <Text style={styles.leaderText}>{assistsLeader}</Text>
      <Text style={styles.leaderText}>{reboundsLeader}</Text>
    </View>
  );
};

export default Tela3;
