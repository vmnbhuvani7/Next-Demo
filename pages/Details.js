import Axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const people = [
    { v: "Car", name: 'Bruno' },
    { v: "Bike", name: 'John' },
    { v: "Airplane", name: 'Mick' }
]

export default function Details({ ownerList }) {
    // const [owners, setOwners] = useState([])
    // useEffect(() => {
    //     async function loadData() {
    //         const response = await Axios.get('http://localhost:8000/')
    //         const ownerList = await response.json()
    //         setOwners(ownerList);
    //     }
    //     loadData();
    // }, [])

    return <div>
        {ownerList.map(item => (
            <>
                {console.log("tii", item)}
                <Link as={`/${item.vehicle}/${item.ownerName}`} href="/[vehicle]/[person]">
                    <a >Navigation to {item.ownerName}'s {item.vehicle}<br></br></a>

                </Link>
            </>
        ))}

    </div>
}

Details.getInitialProps = async () => {
    const response = await fetch('http://localhost:8000/')
    const ownerList = await response.json()
    return { ownerList: ownerList }
}