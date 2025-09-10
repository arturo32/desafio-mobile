import {StyleSheet, TextInput, TextInputProps} from 'react-native'
import {useThemeColor} from "@/hooks/useThemeColor";
import {ThemeColors} from "@/types/forms";

type ThemedTextInputType = ThemeColors & TextInputProps;

const ThemedTextInput = ({style, colors, ...props} : ThemedTextInputType) => {
	const bgColor = useThemeColor(colors ?? {dark: undefined, light: undefined}, 'weakBackground');
	const textColor = useThemeColor(colors ?? {dark: undefined, light: undefined}, 'text');
	return (
		<TextInput
			placeholderTextColor={textColor}
			style={[{
				backgroundColor: bgColor,
				color: textColor,
				padding: 20,
				borderRadius: 6,
				width: '100%',
			}, style]}
			{...props}
		/>
	);
};

export default ThemedTextInput;

const styles = StyleSheet.create({})
