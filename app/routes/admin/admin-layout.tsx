import { Outlet } from "react-router";

function AdminLayout() {
    return (
        <div className="admin-layout">Mobile Side bar
            <aside className="w-full max-w-[270px] hidden lg:block">Sidebar</aside>
            <aside className="childerm"> <Outlet /> </aside>
        </div>
    );
}

export default AdminLayout;