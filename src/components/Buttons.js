import React from 'react';

function Buttons(props){
    const upperCaseSide = props.side.toUpperCase();
    const score = (val) => {props.score(prevScore => prevScore + val)};
    //const fieldGoal = () => {props.score(prevScore => prevScore + 3)};
    return (<div className={props.side + "Buttons"}>
                <button className={props.side + "Buttons__touchdown"} onClick={() => score(7)}>{upperCaseSide + " Touchdown"}</button>
                <button className={props.side + "Buttons__fieldGoal"} onClick={() => score(3)}>{upperCaseSide + " Field Goal"}</button>
            </div>);
}

export default Buttons;