import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
interface Props {
  actor: Cast;
}
const CastItem = ({ actor }: Props) => {
  const { profile_path } = actor;
  const uri = `https://image.tmdb.org/t/p/original${profile_path}`;
  return (
    <View style={styles.container}>

      {profile_path && <Image
        source={{ uri }}
        style={{ width: 50, height: 50, borderRadius: 10 }}

      />}
      <View style={styles.actorInfo}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold'
        }}
        >
          {actor.name}
        </Text>
        <Text style={{
          fontSize: 16,
          opacity: .7
        }}
        >
          {actor.name}
        </Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginRight: 30,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  }
});