import '../App.css'

function Die (props) {
    const selectedDice = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div className="face-dice" style={selectedDice} onClick={props.holdDice}>
            <h2 className="die-num" >{props.value}</h2>
        </div>
    )
}

export default Die;