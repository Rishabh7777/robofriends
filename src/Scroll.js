const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', height: '440px'}}>
            {/* every react component has props, state and children */}
            {props.children};
        </div>
    )
}

export default Scroll;