import Card from './Card';

// called 'pure functions' or 'dumb functions'
// as they take input and return output, so same input means same output
const CardList = ({robots}) => {
    const displayCard = robots.map((user, i) => {
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    
    return (
        <div>
            {displayCard}
        </div>
    )
}

export default CardList;