import { useEffect, useState } from 'react';
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { FullMovie } from '../interfaces/movieInterface';

interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  fullMovie?: FullMovie;
}
const useMovieDetails = (movieId: number): MovieDetails => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });
  const getMovieDetails = async () => {
    const FullMoviePromise = movieDB.get<FullMovie>(`/${movieId}`);
    const CreditsResponsePromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    const [FullMovieResponse, CreditsResponseResponse] = await Promise.all([FullMoviePromise, CreditsResponsePromise]);
    setState({
      isLoading: false,
      fullMovie: FullMovieResponse.data,
      cast: CreditsResponseResponse.data.cast,
    });

  };
  useEffect(() => {
    getMovieDetails();

  }, []);

  return (
    { ...state }
  );
};

export default useMovieDetails;