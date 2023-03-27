import React, { useEffect, useState } from 'react'
import { db } from './config'
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"; 
import './Players.css'

const Players = () => {
    const playersRef = collection(db, 'players')
    const [players, setPlayers] = useState([]);
    const func = async () => {
        let docs = []
        const playersDocs = await getDocs(playersRef);
        playersDocs.forEach(doc => {
            docs.push(doc.data())
            setPlayers(docs);
        })
    }
    useEffect(() => {
        func();
        console.log('k done')
    }, [])
  return (
    <div className='players main-content'>Players
        <table>
        <tr>
             <th class='th-rating'>Rating</th>
             <th></th>
             <th>Name</th>
             <th>POS</th>
             <th>PAC</th>
             <th>SHO</th>
             <th>PAS</th>
             <th>DRI</th>
             <th>DEF</th>
             <th>PHY</th>
         </tr>
        {players.map((player) => {
            return (
                <tr className='player'>
                    <td className='player-rating'>{player.rating}</td>
                    <td className='player-image-td'><img className='player-image' src={player.image}></img></td>
                    <td><div className='player-info'>
                        <div className='player-badges'>
                            <img className='player-country' src={player.country}></img>   
                            <img class='player-club' src={players.clubImg} /> 
                        </div>
                        <div>
                        <span><strong>{player.name}</strong></span>
                         <span>{player.club} | {player.league}</span>
                        </div>    
                    </div>
                    </td>
                    <td><span className='player-position'>{player.position}</span></td>
                    <td><div className={`player-stat`}><span>{player.PAC}</span></div></td>
                    <td><div className='player-stat'><span>{player.SHO}</span></div></td>
                    <td><div className='player-stat'><span>{player.PAS}</span></div></td>
                    <td><div className='player-stat'><span>{player.DRI}</span></div></td>
                    <td><div className='player-stat'><span>{player.DEF}</span></div></td>
                    <td><div className='player-stat'><span>{player.PHY}</span></div></td>
                </tr>
            )
        })}
        </table>
    </div>
  )
}

export default Players