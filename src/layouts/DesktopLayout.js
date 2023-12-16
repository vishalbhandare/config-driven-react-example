import { Header } from '../components/common/Header.js'
import {Footer} from '../components/common/Footer.js'
import { LeftSideBar } from '../components/common/LeftSideBar.js'
import { RightSideBar } from '../components/common/RightSideBar.js'
import { MainContent } from '../components/common/MainContent.js'
function DesktopLayout() {
    return (<>
        <div className='flex flex-col flex-1'>
            <div className='border'><Header/></div>
            <div className='flex flex-row basis-4/5 flex-1 border'>
                <div className='border basis-1/5'> <LeftSideBar/> </div>
                <div className='border flex-1 flex justify-center items-center'> <MainContent/> </div>
                <div className='border basis-1/5'> <RightSideBar/> </div>
            </div>
            <div className='border'><Footer /></div>
        </div>
    </>)
}
export { DesktopLayout }