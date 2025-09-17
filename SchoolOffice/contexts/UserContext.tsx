import {StyleSheet, ViewProps} from 'react-native'
import {User} from "@/types/auth";
import {createContext, useEffect, useState} from "react";


type UserContextType = {
	user: User | null;
	authChecked: boolean;
	login: (user: User) => Promise<void>;
	logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({children}: ViewProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [authChecked, setAuthChecked] = useState(false);

	async function getInitialUserValue() {
		try {
			// TODO: get from local storage
			const response = null;
			setUser(response);
		} catch (error: any) {
			setUser(null);
		} finally {
			setAuthChecked(true);
		}
	}

	useEffect(() => {
		getInitialUserValue();
	}, []);

	const login = async (user: User) => {
		try {
			await login(user);
			setUser(user);
		} catch (error: any) {
			throw new Error(error);
		} finally {
			setAuthChecked(true);
		}
	}

	const logout = () => {
		setUser(null);
	}

	return (
		<UserContext.Provider value={{user, authChecked, login, logout}}>
			{children}
		</UserContext.Provider>
	)

};

export default UserProvider;

const styles = StyleSheet.create({})
