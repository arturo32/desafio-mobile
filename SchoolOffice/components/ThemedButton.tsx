import {Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native'
import {useThemeColor} from "@/hooks/useThemeColor";
import {ThemeColors} from "@/types/forms";

type ThemedButtonProps = ThemeColors & PressableProps;

const ThemedButton = ({style, colors, ...props} : ThemedButtonProps) => {
	const color = useThemeColor(colors ?? {dark: undefined, light: undefined}, 'background');

	return (
		<Pressable
			style={({pressed}) => [
				{backgroundColor: color},
				styles.btn, pressed && styles.pressed, style as StyleProp<ViewStyle>]}
			{...props}
		/>
	);
};

export default ThemedButton;

const styles = StyleSheet.create({
	btn: {
		padding: 15,
		borderRadius: 5,
	},
	pressed: {
		opacity: 0.8
	}
})
