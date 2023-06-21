import React, {useEffect} from "react";
import { checkWin } from "../helpers/helpers";

const Popup=({correctLetters, wrongLetters, setPlayable, selectedWord, playAgain})=>{
    let finalMessage='';
    let finalMessageRevealWord='';
    let playable=true;

    if(checkWin(correctLetters,wrongLetters,selectedWord)==='win'){
        finalMessage="Congratulations!!!";
        playable='false';
    }else if(checkWin(correctLetters,wrongLetters,selectedWord)==='lose'){
        finalMessage="You lost";
        playable='false';
        finalMessageRevealWord=`The selected word was ${selectedWord}`;
    }

    useEffect(()=>{
        setPlayable(playable);
    })
    return(
        <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
            <div className="popup">
                <h2 id="final-message">{finalMessage}</h2>
                <h3 id="final-message-reveal-word">{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play again</button>
            </div>
        </div>
    )
}

export default Popup