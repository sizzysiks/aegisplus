const NavSidebarButton = ({sidebarIsOpen, setSidebarIsOpen}) =>
{
    return(
        <div className={`${!sidebarIsOpen? "nav-sidebar-btn" : "nav-sidebar-btn-active"}`} onClick={()=>{setSidebarIsOpen(!sidebarIsOpen)}}>
            <div></div>
        </div>
    )
}

export default NavSidebarButton