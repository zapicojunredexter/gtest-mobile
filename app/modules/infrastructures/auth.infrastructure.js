import firebase from 'react-native-firebase';
import ErrorMessages from '../error.messages';

class AuthInfrastructure {
    login = async (username, password) => {
        const res = await firebase.auth().signInWithEmailAndPassword(username, password).catch(error => { throw error });

        console.log("ARA SI USER U", res);
        return true;
    }

    registerAccount = async (username, password, params) => {
        const res = await firebase.auth().createUserWithEmailAndPassword(username, password).catch((error) => { throw error });
        const authObject = res.user;
        const { uid } = authObject;
    
        const ref = this.getCollection().doc(uid);

        const userDetails = {
            ...params,
            HAHA : "HAHAZXC",
            createdAtMs: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAtMs: firebase.firestore.FieldValue.serverTimestamp(),
        };

        await ref.set(userDetails);
        return true;
    };

    getStore = () => firebase.firestore();

    getCollection = () => this.getStore().collection('Users');
}

export default new AuthInfrastructure();
