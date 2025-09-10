import {StyleSheet, useColorScheme, View} from 'react-native'
import {HrefObject, Link, LinkProps} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {GlobalStyle} from "@/constants/GlobalStyle";
import {useThemeColor} from "@/hooks/useThemeColor";

type ThemedLinkProps = {
	colors?: {
		light?: string;
		dark?: string;
	}
} & LinkProps;

const ThemedLink = ({children, href, colors}: ThemedLinkProps) => {
	const color = useThemeColor(colors ?? {dark: undefined, light: undefined}, 'text');

	return (
		<View style={GlobalStyle.linkContainer}>
			<Link href={href} style={GlobalStyle.link}>
				{children}
			</Link>
			<Ionicons name="chevron-forward-outline" style={[GlobalStyle.linkIcon, {color}]} aria-hidden/>
		</View>
	);
};

export default ThemedLink;

const styles = StyleSheet.create({})
