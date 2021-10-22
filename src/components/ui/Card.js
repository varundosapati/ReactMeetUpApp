import CardClass from './Card.module.css';


function Card (props) {
    return (
        <div className={CardClass.card}>{props.children}</div>
    );

}
export default Card;