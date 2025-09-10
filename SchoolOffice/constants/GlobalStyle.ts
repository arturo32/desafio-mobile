import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

export const GlobalStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10
	},
	title: {
		fontWeight: 800,
		fontSize: 18
	},
	linkContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	link: {
		marginVertical: 10,
		fontSize: 20,
	},
	linkIcon: {
		fontSize: 22,
		marginTop: 3,
	},
	form: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
		flexShrink: 1,
	},
	error: {
		color: Colors.warning,
		padding: 10,
		backgroundColor: Colors.errorColor,
		borderWidth: 1,
		borderRadius: 5,
		marginHorizontal: 10
	}
});
