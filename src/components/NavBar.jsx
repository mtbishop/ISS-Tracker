

const NavBar = () => {
    return (
        <div className="navBar">
            <nav className="flex justify-end bg-stone-900 p-8">
                <ul className="flex flex-row space-x-8 text-xl font-mono text-neutral-200 font-bold pt-20">
                    <li className="hover:text-red-500">
                        <a href="/">Home</a>
                    </li>
                    <li className="hover:text-red-500">
                        <a href="/astronauts">Astronauts</a>
                    </li>
                    <li className="hover:text-red-500">
                        <a href="/tracker">Tracker</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default NavBar;