import firebase from 'react-native-firebase';
import TerminalsActions from '../reducers/terminals/terminals.action';
import CollectionInfrastructure from '../modules/infrastructures/database.infrastructure/collection.infrastructure';

class TerminalsService {
    listenTerminals = () => async (dispatch, getState) => {

        const firebaseRef = new CollectionInfrastructure(firebase,'Terminals');

        firebaseRef.listen(terminals => {
            alert("Terminals updated");
            dispatch(TerminalsActions.setTerminals(terminals));
        });
        /*
        const terminals = [
            {
                test: "test terminal",
                testa: "testa terminal",
            },
            {
                test: "test terminal",
                testa: "testa terminal",
            },
        ];
        dispatch(TerminalsActions.setTerminals(terminals));
        */
    }
}

export default new TerminalsService();
