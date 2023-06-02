import { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from 'react-native-snap-carousel';
import GradientBackground from "../components/GradientBackground";
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from "../components/MoviePoster";
import { GradientContext } from "../context/GradientContext";
import { getImageColors } from "../helpers/getColors";
import useMovies from "../hooks/useMovies";

const { width: windowWith, height: windowHeight } = Dimensions.get("window");

const HomeScreen = () => {
	const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
	const { top: marginTop } = useSafeAreaInsets();
	const { setMainColors, setPrevMainColors } = useContext(GradientContext);

	const getPosterColors = async (index: number) => {
		const { poster_path } = nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/original${poster_path}`;
		console.log('uri', uri);
		const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
		setMainColors({ primary, secondary });
	};
	useEffect(() => {
		if (nowPlaying.length > 0) {
			getPosterColors(0);
		}
	}, [nowPlaying]);

	return isLoading ?
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<ActivityIndicator color="red" size={20} />
			<Text>Loading...</Text>
		</View> : (
			<GradientBackground>
				<ScrollView>
					<View style={{ marginTop: marginTop + 20 }}>
						{/* <MoviePoster movie={nowPlaying[0]} /> */}
						{/* Main Carousel */}
						<View style={{
							height: 440
						}}>
							<Carousel
								data={nowPlaying}
								renderItem={({ item: movie }: any) => <MoviePoster movie={movie} />}
								sliderWidth={windowWith}
								itemWidth={300}
								inactiveSlideOpacity={0.85}
								onSnapToItem={getPosterColors}
							/>
						</View>
						{/* Popular Movies */}
						<HorizontalSlider title="Popular Movies" movies={popular} />
						<HorizontalSlider title="Top Rated Movies" movies={topRated} />
						<HorizontalSlider title="Upcoming Movies" movies={upcoming} />
					</View>
				</ScrollView>
			</GradientBackground>
		);
};

export default HomeScreen;
const styles = StyleSheet.create({
	imageBackground: {
		width: windowWith,
		height: windowHeight,
	},
	blur: {
		...StyleSheet.absoluteFillObject,
	}
});