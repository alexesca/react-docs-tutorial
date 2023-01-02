function AdminPanel({name}: {name: string}) {
    return <>
        <p>Welcome, <code>{name}</code></p>
    </>
}

function Navbar({name, isLoggedIn}: {name: string, isLoggedIn: boolean}) {
    return <>
        {isLoggedIn && <AdminPanel name={name}/>}
    </>
}

export default Navbar;
