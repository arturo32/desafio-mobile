import {StyleSheet, Text} from 'react-native'
import UserOnly from "@/components/auth/UserOnly";
import {ThemedView} from "@/components/ThemedView";

const DocsList = () => {
	return (
		<UserOnly>
			<ThemedView>
				<Text>DocsList</Text>
			</ThemedView>
		</UserOnly>
	);
};

export default DocsList;

const styles = StyleSheet.create({})
