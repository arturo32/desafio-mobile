import {StyleSheet, View} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import {useThemeColor} from "@/hooks/useThemeColor";
import {IconProps} from "@expo/vector-icons/build/createIconSet";
import {ThemeColors} from "@/types/forms";


type ThemedIconProps = ThemeColors & IconProps<keyof typeof Ionicons.glyphMap>;

const ThemedIcon = ({name, style, colors, size = 16}: ThemedIconProps) => {
	const color = useThemeColor(colors ?? {dark: undefined, light: undefined}, 'text');

	return (
			<Ionicons name={name} style={[style, {color}]} size={size} aria-hidden/>
	);
};

const styles = StyleSheet.create({})

export default ThemedIcon;
