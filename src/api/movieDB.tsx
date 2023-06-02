import axios from "axios";
const movieDB = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDEyNmEzYmIxNWM5YTkwOGU3MjZmMjYyZDczMGY3NiIsInN1YiI6IjY0NTU5ZDdkMTIxOTdlMDE1NWM0NGZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3-iWlt2mLVT8BkeVN9h9JFw5klzsG9UDr-fIyeheYKg",
	},
	params: {
		language: "en-UK",
	},
});

export default movieDB;
