import styles from '/styles/Home.module.css'
export default function VideoItem(){
    return(
        <>
        <div class="card card-compact w-72 bg-base-300 shadow-md">
            <figure><img src="https://api.lorem.space/image/car?w=320&h=180" alt="Shoes" /></figure>
            <div class="card-body">
                <div class="flex items-center justify-between rounded-full">
                    <img class="rounded-full" src="https://api.lorem.space/image/face?hash=33791" width='34px' height='34px' />
                    <p id={styles.profile} className='font-semibold'>John Doe</p>
                </div>
                <div>
                <p>Top 10 Cars in India, and the world...</p>
                </div>
            </div>
        </div>
        </>
    )
}