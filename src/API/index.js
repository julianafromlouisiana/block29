// Write a fetchAllPlayers from API



export const fetchAllPlayers = async () => {
    try{
        const res = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players');
        if(!res.ok) {
            throw new Error(`${res.status}`);
        }
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.error(error);
        return error;
    }
};

//Fetch Single Player from API

export const fetchSinglePlayer= async (playerId) => {
    try{
        const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players/${playerId}`);
        if(!res.ok) {
            throw new Error(`${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const removePlayer = async (playerId) => {
try{
    const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players/${playerId}`, {
        method: 'DELETE',
});

if (!res.ok) {
    throw new Error(`${res.status}`);
}
const result = await res.json();
console.log(result);
return result;

} catch(err) {
    console.error(`Whoops, trouble removing player #${playerId} froom the roster!`,err);
    throw err;
}
};

export const addPlayer = async (data) => {
    try{
        const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    });
    
    if (!res.ok) {
        throw new Error(`${res.status}`);
    }
    const result = await res.json();
    console.log(result);
    return result;
    
    } catch(error) {
        console.error(`Whoops, trouble adding player from the roster!`,error);
        throw error;
    }
    };