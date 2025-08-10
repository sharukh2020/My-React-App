import { useSelector } from 'react-redux';
import TopbarPostLogin from './topbarPostLogin';
import TopbarPreLogin from './topbarPreLogin';

function Topbar() {
    const loginState = useSelector((state) => state.loginState);
    const { login } = loginState

    return (
        login
            ?
            <TopbarPostLogin />
            :
            <TopbarPreLogin />
    );
}
export default Topbar;


