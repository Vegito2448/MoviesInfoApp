import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from "../components/MovieDetails";
import useMovieDetails from "../hooks/useMovieDetails";
import { RootStackParams } from "../navigation/Navigation";
interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

const { height: screenHeight } = Dimensions.get('screen');

const DetailScreen = ({ route, navigation: { goBack } }: Props) => {
	const { params: movie } = route;
	const { poster_path, original_title, title, id } = movie;
	const { cast, isLoading, fullMovie } = useMovieDetails(id);

	const uri = `https://image.tmdb.org/t/p/original${poster_path}`;
	return (
		<ScrollView>
			<View style={styles.imageContainer}>
				<View style={styles.imageBorder}>
					<Image
						source={{
							uri,
						}}
						style={styles.posterImage}
					/>
				</View>
			</View>
			<View style={styles.marginContainer}>
				<Text style={styles.title}>{original_title}</Text>
				<Text style={styles.subtitle}>{title}</Text>
			</View>

			{isLoading ?
				<ActivityIndicator size={35} color='gray' style={{ marginTop: 20 }} /> :
				<MovieDetails fullMovie={fullMovie!} cast={cast} />
			}
			<TouchableOpacity style={styles.buttonBack} onPress={goBack}>
				<Icon color='white' name="chevron-back-outline" size={50} />
			</TouchableOpacity>
		</ScrollView>
	);
};

export default DetailScreen;
const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: screenHeight * 0.7,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 9,
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,
	},
	imageBorder: {
		flex: 1,
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,
		overflow: 'hidden',
	},
	posterImage: {
		flex: 1,
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 20,
	},
	subtitle: {
		fontSize: 16,
		opacity: 0.8,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	buttonBack: {
		position: 'absolute',
		zIndex: 1,
		elevation: 1,
	}
});