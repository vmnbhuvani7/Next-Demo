import { useRouter } from 'next/router'
export default function Person() {
    const router = useRouter();
    return <h1>{router.query.person}'s {router.query.vehicle}</h1>
}