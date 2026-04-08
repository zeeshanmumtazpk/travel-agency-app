import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

function NavItems() {
    const user = {
        name: "Zeshan Mumtaz",
        email: "abc@example.com",
        imageUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    };
    return (
        <section className="nav-items">
            <Link  className="link-logo" to="/">
            <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
            <h1>Tourvisto</h1>
            </Link>
            <div className="container">
            <nav >
                {sidebarItems.map(({ id, href, label, icon }) => (
                    <NavLink key={id} className="nav-link" to={href}>
                        {({ isActive }:{ isActive: boolean }) => (
                            <div className={cn('group nav-item',{
                                'bg-primary-100 !text-white': isActive,
                            })}>
                                <img src={icon} alt={label} className={`group-hover-brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`} />
                                {label}
                            </div>
                        )}
                    </NavLink>    
                    // <Link key={id} className="nav-link" to={href}>
                    //     {label}
                    // </Link>
                ))}
            </nav>
            <footer className="nav-footer">
                <img src={user.imageUrl} alt={user.name} className="size-10 rounded-full" />
                <article className="user-info">
                    <p className="name">{user.name}</p>
                    <p className="email">{user.email}</p>
                </article>
                <button className="btn-ghost cursor-pointer"
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/login";
                    }}
                >
                    <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
                </button>

            </footer>
            </div>
        </section>
    );
}

export default NavItems;