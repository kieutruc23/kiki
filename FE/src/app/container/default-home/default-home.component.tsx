import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './../../component/stack/header/header.component';
import FooterComponent from '~/app/component/stack/footer/footer.component';
import RequireAuth from '~/app/modules/client/accountLogin/requireAuth.component';
interface DefaultHomeProps {
    prop?: unknown
}


const DefaultHome: FunctionComponent<DefaultHomeProps> = () => {
    return (
        <div>
            <div className='sm:px-[50px] max-sm:px-[10px] py-3 bg-white'>
                <HeaderComponent />
            </div>
            <Outlet />
            <RequireAuth />
            <FooterComponent />
        </div>
    )
}


export default DefaultHome
