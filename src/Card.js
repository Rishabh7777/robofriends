const Card = (props) => {
    // const{id, name, email} = props;
    
    return (
        <div className='tc bg-light-green dib br3 pa2 ma2 grow'>
            <img alt='robot' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;