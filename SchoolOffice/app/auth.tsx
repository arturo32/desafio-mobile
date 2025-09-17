import {Animated, GestureResponderEvent, Keyboard, StyleSheet, Text, View} from 'react-native'
import ScrollView = Animated.ScrollView;
import {GlobalStyle} from "@/constants/GlobalStyle";
import {ThemedText} from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import {useState} from "react";
import ThemedButton from "@/components/ThemedButton";
import GuestOnly from "@/components/auth/GuestOnly";
import {useUser} from "@/hooks/useUser";

const Auth = () => {
	const [registrationNumber, setRegistrationNumber] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const {login} = useUser();

	const handleSubmit = async (event : GestureResponderEvent) => {
		setError(null);
		setLoading(true);
		Keyboard.dismiss();
		try {
			await login({registrationNumber, password});
		} catch (error: any) {
			console.error(error);
			setError(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<GuestOnly>
			<ScrollView contentContainerStyle={{flex: 1}}>
				<View style={GlobalStyle.container}>
					<View style={GlobalStyle.form}>
						<ThemedText type="title" style={GlobalStyle.title}>
							Login
						</ThemedText>

						<ThemedTextInput
							placeholder="Matrícula"
							onChangeText={setRegistrationNumber}
							value={registrationNumber}
						></ThemedTextInput>

						<ThemedTextInput
							placeholder="Senha"
							onChangeText={setPassword}
							value={password}
							secureTextEntry
						></ThemedTextInput>

						<ThemedButton onPress={handleSubmit}>
							<Text style={{color: '#f2f2f2'}}>{loading ? 'Carregando...' : 'Entrar'}</Text>
						</ThemedButton>

						{!!error && <Text style={GlobalStyle.error}>{'aa'}</Text>}
					</View>
				</View>
			</ScrollView>
		</GuestOnly>
	);
};

export default Auth;

const styles = StyleSheet.create({})
