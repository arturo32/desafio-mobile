import {StyleSheet, View} from 'react-native'
import ThemedIcon from "@/components/ThemedIcon";
import {useColorScheme} from "@/hooks/useColorScheme";
import {ThemedText} from "@/components/ThemedText";
import {GlobalStyle} from "@/constants/GlobalStyle";
import ThemedLink from "@/components/ThemedLink";

const Home = () => {
	const colorScheme = useColorScheme();
	return (
		<View style={GlobalStyle.container}>
			<View style={styles.icon}>
				<ThemedIcon name="school-outline" style={styles.hatIcon}/>
				<ThemedIcon name="document-outline" style={styles.documentIcon}/>
			</View>
			<ThemedText style={styles.title}>SchoolOffice</ThemedText>
			<View style={styles.buttons}>
				<ThemedLink href="/auth">
					<ThemedText>Login</ThemedText>
				</ThemedLink>
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	icon: {
		height: 100,
		width: 100,
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 5
	},
	hatIcon: {
		position: 'absolute',
		fontSize: 45,
		fontWeight: 100,
		top: 8,
		left: 8,
	},
	documentIcon: {
		position: 'absolute',
		fontSize: 40,
		bottom: 8,
		right: 5,
		fontWeight: 800,
	},
	title: {
		fontSize: 20
	},
	buttons: {

	}
})
