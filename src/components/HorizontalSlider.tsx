import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];


}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{
      height: Boolean(title) ? 260 : 220,
    }}>
      {title && <Text
        style={{ fontSize: 30, fontWeight: "bold", color: "black", marginLeft: 10 }}
      >{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item: movie }: any) => (<MoviePoster movie={movie} width={140} height={200} />)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
};

export default HorizontalSlider;