import { useEffect, useState } from "react"
import { useRoleContext } from "../../contexts/Role"
import { useUiConfigContext } from "../../contexts/UiConfig"

export function PermissionRoleView({ children, uniqueName }) {
    const role = useRoleContext()
    const uiConfig = useUiConfigContext()
    const [isAllowed, setIsAllowed] = useState(true)

    useEffect(() => {
        const permissions = uiConfig[role]
        if(permissions['widget']) {
            setIsAllowed(permissions['widget'].includes(uniqueName))
        }
    }, [role, uiConfig, uniqueName])

    return(
        <>
        {isAllowed && children}
        </>
    )
}