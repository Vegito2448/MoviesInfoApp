import { createStackNavigator } from "@react-navigation/stack";
import { Movie } from "../interfaces/movieInterface";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParams = {
	Home: undefined;
	Details: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export default function Navigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					// backgroundColor: "white",
				},
			}}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Details" component={DetailScreen} />
		</Stack.Navigator>
	);
}
