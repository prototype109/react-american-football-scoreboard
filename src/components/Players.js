import React, {useState} from 'react';

function Players(props){
    //let teamName = "";
    const [teamName, setTeamName] = useState("");
    const [newName, setNewName] = useState("");

    // function pressedEnter(e){
    //     if(e.keyCode === 13){
    //         console.log(`Players.js, pressedEnter(${e}), keyCode: ${e.keyCode}, value: ${e.target.value}`)
    //         e.preventDefault();
    //         return e.target.value;
    //     }
    // }

    function nameFilled(){
        if(teamName === "")
            return(
                <form onSubmit={e => {
                    e.preventDefault();
                    if(newName !== ""){
                        setTeamName(newName);
                        setNewName("");
                    }
                }}>
                    <input onChange={e => setNewName(e.target.value)} value={newName}/>
                </form>
            )
            // return <textarea onKeyUp={(e) => setTeamName((val) => {
            //     val = pressedEnter(e);
            //     nameFilled();
            // })}></textarea>
        else
            return <h2 className={`${props.side}__name`}>{teamName}</h2>
    }

    return (<div className={props.side}>
                {nameFilled()}
                <div className={`${props.side}__score`}>{props.currentScore}</div>
            </div>);
}

export default Players;