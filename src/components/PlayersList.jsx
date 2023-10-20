import { useEffect } from "react";


const PlayersList = () => {

    useEffect(() => {
        const fetchSquad = async () => {
            const url = `http://localhost:3000/fcBarcelonaPlayers`
            try {
                const response = await fetch(url)
                const jsonData = await response.json()
                console.log(jsonData)
            } catch (error) {
                console.error("Error occurred whne fetching data", error)
                return null
            }
        }
        fetchSquad()
    }, [])

    return (
        <>
            <h1>Fc Barcelona Squad</h1>
        </>
    )
}

export default PlayersList;