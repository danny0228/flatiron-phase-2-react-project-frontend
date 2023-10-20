import { useEffect, useState } from "react";


const PlayersList = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        const fetchSquad = async () => {
            const url = `http://localhost:3000/fcBarcelonaPlayers`
            try {
                const response = await fetch(url)
                const jsonData = await response.json();
                setPlayers(jsonData)
            } catch (error) {
                console.error("Error occurred whne fetching data", error)
                return null
            }
        }
        fetchSquad()
    }, [])

    const renderedPlayers = players.map((player) => (
        <div className="player-card" key={player.id}>
            <img src={player.image} alt={player.name} />
            <h2>{player.name}</h2>
            <p>Position: {player.position}</p>
            <p>Number: {player.number}</p>
            <p>Country: {player.country}</p>
            <p>Birth Date: {player.birth}</p>
            <p>Height: {player.height}</p>
            <p>Weight: {player.weight}</p>
            <p>Likes: {player.likes}</p>
        </div>
    ))

    return (
        <div className="player-list">
            <h1>Fc Barcelona Squad</h1>
            {renderedPlayers}
        </div>
    )
}

export default PlayersList;