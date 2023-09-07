import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://ukrainianingermany.de/wp-content/uploads/2022/10/pexels-sarmad-mughal-305070.jpg',
                followed: true,
                fullName: 'Dmitry S.',
                status: 'I search new job!',
                location: { city: 'Heilbronn', country: 'Germany' }
            },

            {
                id: 2, photoUrl: 'https://lifeboss.ru/wp-content/uploads/2020/07/deshevaya-ili-dorogaya-mashina-kakuyu-vybrat.jpg',
                followed: false,
                fullName: 'Mikhail T.',
                status: 'Im in Thailand now!',
                location: { city: 'New York', country: 'USA' }
            },

            {
                id: 3, photoUrl: 'https://luxury-trans.com.ua/img/about_us-min.jpg',
                followed: false,
                fullName: 'Daniil I.',
                status: 'Write new article',
                location: { city: 'London', country: 'United Kingdom' }
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>

                    <span>

                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }} > Unfollow </button>
                                    : <button onClick={() => { props.follow(u.id) }} > Follow </button>
                            }

                        </div>

                    </span>

                    <span>

                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>

                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>

                    </span>

                </div>)
            }
        </div>
    )
}

export default Users;