import Player, {IPlayer} from "./Player";

interface IPlayerListProps {
    players: IPlayer[]
}

const PlayerList = (props: IPlayerListProps) => {
    return (
        <div className="product-list">
            {props.players.map((player, index) => <Player player={player} key={index}/>)}      
        </div>
    )
}


export default PlayerList