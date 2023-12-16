import { PermissionRoleView } from "./PermissionRoleView"
import { WidgetPanel } from "./WidgetPanel"
function LeftSideBar() {
    return (<>
        <div className="flex flex-col p-2">
            <PermissionRoleView uniqueName="daily-works">
                <WidgetPanel name="daily-works" title="Daily Works">
                    <ul>
                        <li>Update Your Profile</li>
                        <li>Send FeedBack</li>
                    </ul>
                </WidgetPanel>
            </PermissionRoleView>

            <PermissionRoleView uniqueName="manage-users">
                <WidgetPanel name="manage-users" title="Manage Users" className="mt-1">
                    <ul>
                        <li>Add Users</li>
                        <li>Delete Users</li>
                    </ul>
                </WidgetPanel>
            </PermissionRoleView>

            <PermissionRoleView uniqueName="manage-setting">
                <WidgetPanel name="manage-setting" title="Manage Settings" className="mt-1">
                    <ul>
                        <li>Delete Users</li>
                        <li>Update Settings</li>
                    </ul>
                </WidgetPanel>
            </PermissionRoleView>
        </div>
    </>)
}
export { LeftSideBar }