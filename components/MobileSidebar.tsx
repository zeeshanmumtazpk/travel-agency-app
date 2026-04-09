import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import { useRef } from "react";
import NavItems from "./NavItems";

function MobileSidebar() {
const sidebar = useRef<SidebarComponent>(null);
    return (  
        <div className="mobile-sidebar wrapper lg:hidden">
           <header className="mobile-header">
            <Link to="/" className="link-logo">
            <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
            <h1>Tourvisto</h1>
            </Link>
            <button className="btn-ghost" onClick={()=>{
                sidebar.current?.toggle();
            }}>
                <img src="/assets/icons/menu.svg" alt="menu" className="size-6" />
            </button>
           </header>
           <SidebarComponent 
           ref={sidebar}
            width={270} 
            enableGestures={true} 
            created={sidebar.current?.hide()}
            closeOnDocumentClick={true}
            showBackdrop={true}
            type="over"
           >
            <NavItems />
           </SidebarComponent>
        </div>
    );
}

export default MobileSidebar;