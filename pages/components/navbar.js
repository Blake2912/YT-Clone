import styles from '/styles/Home.module.css'
export default function NavBar(){
    return(
    <>
        <div className="navbar bg-base-300">
            <div className="flex-0">
            <a className="btn btn-ghost text-gray normal-case text-xl"><img src="./youtube.png" id={styles.yt} width="40px" height="32px"/>YouTube</a>
            </div>
            <div className="form-control flex-1">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
            <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
                </label>
                <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52">
                <li>
                    <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
                </ul>
            </div>
            </div>
        </div>
    </>
    )
}