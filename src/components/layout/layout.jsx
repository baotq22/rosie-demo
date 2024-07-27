import { Outlet } from 'react-router-dom';
import useStore from "../../store/index.js"

export const AppLayout = () => {
    const {isShow} = useStore()
    return (
        <div id="main" style={!isShow ? {  } : { overflow: 'hidden' }}>
            <Outlet />
        </div>
    );
}
