import Link from 'next/link'
const people = [
    { v: "Car", name: 'Bruno' },
    { v: "Bike", name: 'John' },
    { v: "Airplane", name: 'Mick' }
]

export default function Details() {
    return <div>
        {people.map(item => (
            <>
                <Link as={`/${item.v}/${item.name}`} href="/[keval]/[kels]">
                    <a >Navigation to {item.name}'s {item.v}<br></br></a>

                </Link>
                <Link as={`/${item.v}/${item.name}`} href="/[vehicle]/[person]">
                    <a >Navigation to {item.name}'s {item.v}<br></br></a>

                </Link>
            </>
        ))}

    </div>
}