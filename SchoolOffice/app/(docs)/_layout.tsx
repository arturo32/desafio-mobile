import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import {StatusBar} from "expo-status-bar";
import {Stack} from "expo-router";
import UserOnly from "@/components/auth/UserOnly";
import {useUser} from "@/hooks/useUser";

const Layout = () => {
	const {user} = useUser();

	return (
		<UserOnly>
			<StatusBar style="auto" />
			<Stack screenOptions={{
				headerShown: false,
				animation: "none"
			}} />
		</UserOnly>
	);
};

export default Layout;

const styles = StyleSheet.create({})
