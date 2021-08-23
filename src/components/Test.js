import { useEffect } from "react"

export default function Test() {

    useEffect(fetchData, [])

    return (
        <p>Hello</p>
    )
}

async function fetchData() {
    console.log('ok')
    const response = await fetch('http://localhost:3000/user/12')
    const data = await response.json()
    console.log(data)
}