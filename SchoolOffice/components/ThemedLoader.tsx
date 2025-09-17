import {ActivityIndicator, StyleSheet, Text, useColorScheme, View} from 'react-native'
import {ThemedView} from "@/components/ThemedView";
import {useThemeColor} from "@/hooks/useThemeColor";

const ThemedLoader = () => {
	const color = useThemeColor({dark: undefined, light: undefined}, 'text');

	return (
		<ThemedView>
			<ActivityIndicator size="large" color={color}></ActivityIndicator>
		</ThemedView>
	);
};

export default ThemedLoader;
