import { useRouter } from 'next/router'
export default function Person() {
    const router = useRouter();
    console.log(router.query);
    return <h1>{router.query.kels}'s {router.query.keval}  {router.query.kels}'s {router.query.keval}</h1>
}