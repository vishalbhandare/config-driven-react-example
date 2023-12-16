import { WidgetPanel } from "./WidgetPanel"
import { PermissionRoleView } from "./PermissionRoleView"
function RightSideBar() {
    return (<div className="flex flex-col p-2">
        <PermissionRoleView uniqueName="weekly-works">
            <WidgetPanel name="weekly-items" title="Weekly Works">
                <ul>
                    <li>Attend Scrum</li>
                    <li>Send FeedBack</li>
                </ul>
            </WidgetPanel>
        </PermissionRoleView>
        <PermissionRoleView uniqueName="manage-times">
            <WidgetPanel name="time-logs" title="Manage Time" className="mt-1">
                <ul>
                    <li>Add Worklog</li>
                    <li>Update Worklog</li>
                </ul>
            </WidgetPanel>
        </PermissionRoleView>
    </div>)
}
export { RightSideBar }