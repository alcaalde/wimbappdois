import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { get, ref } from 'firebase/database';
import { db } from './config/firebaseConfig';

export default function Profile() {
  const [user, setUser] = useState(null); // Estado para armazenar dados do usuário
  const [favoriteRoutes, setFavoriteRoutes] = useState([]); // Estado para armazenar as rotas favoritas

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || 'Usuário', // Exibe o nome do usuário, se disponível
          email: currentUser.email || 'E-mail não disponível', // Exibe o email do usuário
        });

        // Carrega as rotas favoritas do usuário
        const userId = currentUser.uid;
        const userRef = ref(db, `users/${userId}/favoriteRoutes`);
        get(userRef).then(snapshot => {
          if (snapshot.exists()) {
            const routes = snapshot.val();
            const favoriteRoutesList = Object.keys(routes).filter(route => routes[route]); // Filtra as rotas favoritas (onde o valor é true)
            setFavoriteRoutes(favoriteRoutesList); // Atualiza as rotas favoritas do estado
          }
        });
      } else {
        setUser(null); // Usuário não logado
      }
    });

    return () => unsubscribe(); // Limpar subscrição no unmount
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.image}>
          <Feather name="user" style={styles.iconProfile} />
        </View>
        <View>
          {/* Exibe o nome do usuário se disponível */}
          <Text style={styles.nome}>{user ? user.name : 'Nome não disponível'}</Text>
          {/* Exibe o e-mail do usuário se disponível */}
          <Text style={styles.email}>{user ? user.email : 'E-mail não disponível'}</Text>
          {/* Exibe o botão Editar apenas se o usuário estiver logado */}
          {user && (
            <TouchableOpacity style={styles.botaoEditar}>
              <Text style={styles.textoEditar}> Editar </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.fav}>
        <Text style={styles.favTexto}>Favoritos</Text>
        <View style={styles.line} />
      </View>

      {/* Exibe as rotas favoritas */}
      {favoriteRoutes.length > 0 ? (
        favoriteRoutes.map((route, index) => (
          <TouchableOpacity key={index} style={styles.onibus}>
            <View style={styles.horario}>
              <Feather name="heart" style={styles.icon} />
            </View>
            <Text style={styles.onibusTexto}>{route}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noFavoritesText}>Nenhuma rota favorita ainda</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
  },
  profile: {
    backgroundColor: '#DFDFDF',
    width: '100%',
    height: '35%',
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '30%',
    height: '40%',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 100,
    marginRight: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    marginTop: 20,
  },
  email: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  botaoEditar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    padding: 12,
    borderWidth: 0,
    width: '100%',
    backgroundColor: '#545454',
    elevation: 5,
    paddingVertical: 5,
  },
  textoEditar: {
    fontSize: 9,
    color: 'white',
    fontWeight: '500',
  },
  fav: {
    alignItems: 'flex-start',
    width: '80%',
    marginBottom: '5%',
    marginTop: '3%',
  },
  favTexto: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 0,
  },
  onibus: {
    width: '85%',
    backgroundColor: '#545454',
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: '5%',
    elevation: 5,
  },
  onibusTexto: {
    fontWeight: '700',
    marginLeft: 20,
    flex: 1,
    fontSize: 12,
    color: 'white',
  },
  horario: {
    backgroundColor: '#EBCB4A',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 20,
    width: '20%',
    marginLeft: -25,
  },
  icon: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  line: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    width: '100%',
  },
  iconProfile: {
    fontSize: 80,
  },
  noFavoritesText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});
