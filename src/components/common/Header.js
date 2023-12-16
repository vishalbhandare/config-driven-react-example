import { NavLink } from "react-router-dom"
import { useRoleContext } from "../../contexts/Role"
import { useUiConfigContext } from "../../contexts/UiConfig"
export const mainMenuList = [
    {
        path: '/',
        title: 'Home',
        id:'home'
    },
    {
        path: '/manage-profile',
        title: 'Manage Profile',
        id:'manage-profile'
    },
    {
        path: '/manage-settings',
        title: 'Manage Settings',
        id:'manage-settings'
    },
    {
        path: '/manage-users',
        title: 'Manage Users',
        id:'manage-users'
    },
    {
        path: '/about-us',
        title: 'About Us',
        id:'about-us'
    }
]
function Header() {
    const role = useRoleContext()
    const uiConfig = useUiConfigContext()
    return (<>
        <div className="py-2">
        {mainMenuList.map((menu) => uiConfig[role]['menu'] && uiConfig[role]['menu'].includes(menu.id) ? <NavLink to={menu.path} className="border border-teal-950 p-1.5 mx-1"> {menu.title} </NavLink> : <></>)} 
        </div>
    </>)
}
export { Header }