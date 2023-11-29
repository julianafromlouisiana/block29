import { useEffect, useState } from 'react'
import { fetchAllPlayers } from '../API';
import { Link } from 'react-router-dom';


const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetchAllPlayers();
            const { data } = response;
            console.log(data.players);
            setPlayers(data.players);//We can see it log what we set our variables to so you can see the output
        } catch (error) {
            console.error(error);
            setError(error);
        }
    };
    fetchData();
    },[]); //Empty dependency array 

    if (error) {
        return <div>Error fetching players. Try again later</div>
    }
    return (
        <div className="all-players">
            <h1>All Players</h1> 
           
            {/* First check if players array has data rendering. 
            Put code for list of players based on 'players' state */}
            {players.length > 0 ? 

           ( <ul>
                {players.map((player) => (
                    <li key={player.id}>
                    <Link to={`/players/${player.id}`}>{player.name}</Link>
                    </li>

                ))}
                
            </ul>
            ) : (
                <p>No Players Found.</p>
        )}

            {/* <ul>
                {players.map((player) => (
                    <li key={player.id}>{player.name}</li>

                ))}
                
            </ul> */}

          </div>
    );
};

export default AllPlayers;