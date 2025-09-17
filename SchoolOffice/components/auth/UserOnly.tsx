import {StyleSheet} from 'react-native'
import {ReactNode, useEffect} from "react";
import {router} from "expo-router";
import ThemedLoader from "@/components/ThemedLoader";
import {useUser} from "@/hooks/useUser";

type UserOnlyProps = {
	children: ReactNode;
}

const UserOnly = ({children}: UserOnlyProps) => {
	const {user, authChecked} = useUser();

	useEffect(() => {
		if(authChecked && user === null) {
			router.replace('/auth');
		}
	}, [user, authChecked]);

	if(!authChecked || !user) {
		return (
			<ThemedLoader/>
		)
	}

	return children;
};

export default UserOnly;

const styles = StyleSheet.create({})
