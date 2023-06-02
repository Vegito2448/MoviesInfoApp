import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { FullMovie } from '../interfaces/movieInterface';
import CastItem from './CastItem';
interface Props {
  fullMovie: FullMovie;
  cast: Cast[];
}
const MovieDetails = ({ fullMovie, cast }: Props) => {
  const { genres, overview, budget } = fullMovie;
  const usdBudget = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(budget);
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>

          <Icon name="star-outline"
            color='grey'
            size={18}
          />
          <Text>{fullMovie.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {genres.map(genre => (genre.name)).join(', ')}
          </Text>

        </View>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          History
        </Text>
        <Text style={{ fontSize: 16 }}>
          {overview}
        </Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>
        <Text style={{ fontSize: 18 }}>
          {usdBudget}
        </Text>
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
            Casting
          </Text>
          <FlatList
            data={cast}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, height: 70 }}
          />
        </View>
      </View>
    </>
  );
};

export default MovieDetails;