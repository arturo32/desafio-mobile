import data from '../data.json';
import {User} from "@/types/auth";

const MOCK = JSON.parse(JSON.stringify(data));

export const login = async (user: User) => {
	const loginEndpoint = MOCK.apiEndpoints.login;
	console.log(`Sending POST ${loginEndpoint}...`);
	return new Promise<string>(
		(resolve, reject) => {
			if(user.registrationNumber === '20251234') {
				if(user.password === '12345') {
					setTimeout(() => resolve('OK!'), 800);
					return;
				}
			}
			setTimeout(() => reject('A matrícula ou senha está incorreta!'), 800);;
		}
	)
}
