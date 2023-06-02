import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBResponse } from "../interfaces/movieInterface";
interface MoviesState {
	nowPlaying: Movie[];
	popular: Movie[];
	topRated: Movie[];
	upcoming: Movie[];
}
const useMovies = () => {
	const [isLoading, setLoading] = useState(true);
	const [moviesState, setMoviesState] = useState<MoviesState>({
		nowPlaying: [],
		popular: [],
		topRated: [],
		upcoming: [],
	});
	const getMovies = async () => {
		const nowPlayingPromise = movieDB.get<MovieDBResponse>("/now_playing", {
			params: {
				page: 1,
			},
		});
		const popularPromise = movieDB.get<MovieDBResponse>("/popular", {
			params: {
				page: 1,
			},
		});
		const topRatedPromise = movieDB.get<MovieDBResponse>("/top_rated", {
			params: {
				page: 1,
			},
		});
		const upcomingPromise = movieDB.get<MovieDBResponse>("/upcoming", {
			params: {
				page: 1,
			},
		});

		const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);

		setMoviesState({
			nowPlaying: response[0].data.results,
			popular: response[1].data.results,
			topRated: response[2].data.results,
			upcoming: response[3].data.results,
		});
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return { ...moviesState, isLoading, };
};

export default useMovies;
