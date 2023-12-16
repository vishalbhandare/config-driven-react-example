import { useState } from "react"
import { useLayoutUpdateContext } from "../../contexts/layout"
import { useRoleUpdateContext } from "../../contexts/Role"
import { useUiConfigUpdateContext, useUiConfigContext } from "../../contexts/UiConfig"

export const layoutList = ["desktop", "mobile"]
export const roleList = ["user", "admin"]

export function ConfigSwitch() {
    const updateLayout = useLayoutUpdateContext()
    const updateRole = useRoleUpdateContext()
    const updateUiConfig =  useUiConfigUpdateContext()
    const uiConfig = useUiConfigContext()
    const [uiConfigTextContent, setUiConfigTextContent] = useState(JSON.stringify(uiConfig, true))
    const [hideShowConfig, setHideShowConfig] = useState(false)

    const saveUiConfig = (uiConfigTextContent) => {
        updateUiConfig(JSON.parse(uiConfigTextContent))
        setHideShowConfig(false)
    }
  
    return(<>
        <div className="flex justify-end border border-solid border-lime-700 space-x-2">
            <div className="flex-none border px-2.5">
                <span>Layout: </span>
                <select name="select-layout" onChange={(evt) => updateLayout(evt.target.value)} className="border-2">
                    {layoutList.map((layout) => <option value={layout} key={'layout'+layout}> {layout}</option>)}
                </select>
            </div>
            <div className="flex-none border px-2.5">
                 <span>Role: </span>
                <select name="select-layout" onChange={(evt) => updateRole(evt.target.value)} className="border-2">
                    {roleList.map((layout) => <option value={layout} key={'role'+layout}> {layout}</option>)}
                </select>
            </div>
            <div className="border px-2.5 relative">
                <span>Config: <button className="border bg-white bg-slate-400  px-2  rounded-lg" onClick={() => setHideShowConfig(true)}> Show </button></span>
                {hideShowConfig && <div className="absolute top-0 right-0 bg-slate-300 p-2 w-96 flex flex-col">
                    <textarea name="uiconfig h-96" style={{height: "60vh"}} onChange={(evt) => setUiConfigTextContent(evt.target.value)}>{JSON.stringify(uiConfig, null, 2)}</textarea>
                    <div>
                        <button className="border bg-white rounded-lg p-1 mt-2" onClick={() => saveUiConfig(uiConfigTextContent)}>Submit</button>
                        <button className="border bg-white rounded-lg p-1 mt-2 ml-2" onClick={() => setHideShowConfig(false)}>Hide</button>
                    </div>
                </div>}
            </div>
        </div>
    </>)
}