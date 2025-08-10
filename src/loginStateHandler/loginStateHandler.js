import { onAuthStateChanged } from 'firebase/auth';
import { endLoading, endLogoutProgress, endSignInProgress, loggedIn, loggedOut } from '../appState/action';
import { auth } from '../firebase/firebase';

function LoginStateHandler(dispatch) {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setTimeout(() => {
                dispatch(loggedIn(currentUser.uid));
                dispatch(endLoading())
                dispatch(endSignInProgress())
            }, 2000);
        } else {
            setTimeout(() => {
                dispatch(loggedOut());
                dispatch(endLogoutProgress())
            }, 2000);

        }
    });

    return unsubscribe;
}

export { LoginStateHandler };
