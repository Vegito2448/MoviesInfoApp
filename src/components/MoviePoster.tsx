import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Movie } from "../interfaces/movieInterface";
interface Props {
	movie: Movie;
	height?: number;
	width?: number;
}
const MoviePoster = ({ movie, height = styles.imageContainer.height, width = styles.imageContainer.width }: Props) => {
	const { title, poster_path } = movie;
	const uri = `https://image.tmdb.org/t/p/original${poster_path}`;
	const { navigate } = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigate("Details", movie)}
			activeOpacity={0.8}
			style={{
				...styles.imageContainer,
				width,
				height,
				marginHorizontal: 2,
				paddingBottom: 20,
				paddingHorizontal: 7,
			}}>
			<View style={styles.shadowContainer}>
				<Image
					source={{
						uri,
					}}
					style={styles.image}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default MoviePoster;

const styles = StyleSheet.create({
	imageContainer: {
		width: 300,
		height: 420,
	},
	image: {
		flex: 1,
		borderRadius: 18,
	},
	shadowContainer: {
		shadowColor: "#000",
		borderRadius: 18,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		flex: 1,
		shadowOpacity: 0.24,
		shadowRadius: 3.84,

		elevation: 9,
	},
});
