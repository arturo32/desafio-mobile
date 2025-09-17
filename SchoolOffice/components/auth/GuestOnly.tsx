import {StyleSheet} from 'react-native'
import {ReactNode, useEffect} from "react";
import {router} from "expo-router";
import ThemedLoader from "../ThemedLoader";
import {useUser} from "@/hooks/useUser";

type GuestOnlyProps = {
	children: ReactNode;
}

const GuestOnly = ({children}: GuestOnlyProps) => {
	const {user, authChecked} = useUser();

	useEffect(() => {
		if(authChecked && user !== null) {
			router.replace('/docs-list');
		}
	}, [user, authChecked]);

	if(!authChecked || user !== null) {
		return (
			<ThemedLoader/>
		)
	}

	return children;
};

export default GuestOnly;

const styles = StyleSheet.create({})
