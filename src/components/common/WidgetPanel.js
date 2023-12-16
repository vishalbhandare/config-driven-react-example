function WidgetPanel({name, title, children}) {
    return(
        <div className={`flex flex-col border mt-2 ${name}`}>
            <div className="bg-slate-200"><span>{title}</span></div>
            <div>{children}</div>
        </div>
    )
}

export { WidgetPanel }