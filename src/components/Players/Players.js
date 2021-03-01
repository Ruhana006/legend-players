import React,{useEffect,useState}from 'react';
import './Playes.css';
import playerData from '../../playerData/playerData.json'
import PlayerInfo from '../Player-Info/PlayerInfo';
import Cart from '../Cart/Cart';

const Players = () => {
    const [players,setPlayers]= useState([]);
    const [cart,setCart]=useState([]);
    const handleAddPlayer =(player)=> {
        console.log("added",player);
        const newCart =[...cart, player]
        setCart(newCart);
    }

    useEffect(()=>{
      setPlayers(playerData);
      console.log(playerData);
    },[])
   
    return (
        <div className="container">          
            <div className="player-info">
               <h1> Top Players </h1>
                  {
                     players.map(player=><PlayerInfo
                        handleAddPlayer={handleAddPlayer} player={player} key={player.id}>
                         </PlayerInfo>)  
                   }   
            </div>
            <div >
                   <Cart cart ={cart}></Cart>    
            </div>
            
        </div>

    );
};

export default Players;