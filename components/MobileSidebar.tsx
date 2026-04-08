function MobileSidebar() {
    return (  
        <div className="w-64 h-screen bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Mobile Sidebar</h2>
            <nav>
                <ul>
                    <li className="mb-2"><a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">Home</a></li>
                    <li className="mb-2"><a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">Profile</a></li>
                    <li className="mb-2"><a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">Settings</a></li>
                    <li><a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">Logout</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default MobileSidebar;