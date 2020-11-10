
function Stepers(props) {
    const stepClass = `btn btn-outline-danger mx-1 ${!props.status?'':'active'}`;
    return ( 
        <button className={stepClass}> { props.idx } </button>
    );
}

export default Stepers;