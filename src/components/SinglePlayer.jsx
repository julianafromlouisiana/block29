//Single Player .jsx

import { useEffect, useState } from 'react'
//Import useNavigate from react-router-dom
import { useNavigate, useParams } from "react-router-dom";
import { fetchSinglePlayer, removePlayer, addPlayer } from "../API";






const SinglePlayer = () => {
    const { id } = useParams(); //Get playerId from URL useParams
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);
    const [newPlayerName, setNewPlayerName] = useState("");
    const [newPlayerBreed, setNewPlayerBreed] = useState("");
     //Set useNavigate variable in a const
     const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try{
                console.log('Fetch player data:', id);
                const data = await fetchSinglePlayer(id);
                console.log(data);
                setPlayer(data);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        fetchData();
        },[id]); //playerId in dependency array 
    //IMPORT removePlayer async function here

    const addButton = async () => {
        try{
            const newPlayerData = {
                name: newPlayerName,
                breed: newPlayerBreed,
            };

            await addPlayer(newPlayerData);
            navigate('/all-players');
        } catch (error) {
            console.log(error);
        }
    };

    const deleteButton = async () => {
        try{
            await removePlayer(id);
            //navigate to all players after delete
            navigate('/all-players');
        } catch (error) {
            console.log(error);
        }
    };

        if (error) {
            return <div>Error fetching player. Try again later</div>
        }
   
  

    return(
        <div className="single-player">
            <h1>Single Player</h1>

         {/*Put SinglePlayer here */}

            {player ? (
                <div>
                    <h2>{player.name}</h2>
                    <button onClick={deleteButton}>Remove Player</button>

                    <form onSubmit={(e) => { e.preventDefault(); addButton(); }}>
                    
                    <label>
                        New Player Name:
                        <input
                        type="text"
                        value={newPlayerName}
                        onChange={(e) => setNewPlayerName(e.target.value)}
                    />
                    </label>
                    <label>
                        New Player Breed:
                        <input 
                        type="text"
                        value={(newPlayerBreed)}
                        onChange={(e) => setNewPlayerBreed(e.target.value)}
                   />
                 </label>
                    <button type="submit">Add Player</button>
                </form>
                </div>

            ) : (
                <p>Please hold...</p>
            )}

            <button onClick={() => navigate('/all-players')}>Back</button>
        </div>
    );
};

export default SinglePlayer;