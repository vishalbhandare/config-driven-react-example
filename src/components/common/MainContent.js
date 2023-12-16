import {Routes, Route} from 'react-router-dom'
import {Home} from '../../pages/Home'
import {AboutUs} from '../../pages/AboutUs'
import {ManageProfile} from '../../pages/ManageProfile'
import {ManageSetting} from '../../pages/ManageSetting'
import {ManageUsers} from '../../pages/ManageUsers'
function MainContent() {
    return (<>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/manage-profile' element={<ManageProfile />}/>
            <Route path='/manage-settings' element={<ManageSetting />}/>
            <Route path='/manage-users' element={<ManageUsers />}/>
        </Routes>
    </>)
}
export { MainContent }