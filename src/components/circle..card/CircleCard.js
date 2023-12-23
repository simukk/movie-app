import './CircleCard.styled.css'

const CircleCard = (props) =>{
    return(
     <div className='circle-card'>
        <img src={props.img} alt="cat"/>
        <small>Small</small>
        <h2 className="circle-card-title">{props.title}</h2>
        <div style={{color:'green', fontSize: '12px'}}> Rp. 10.000</div>

        <button 
        style={{
        backgroundColor:"red", 
        border: "none", 
        color: "#FFF", 
        boderRadius: "12px", 
        padding: "8px", 
        marginTop: "8px",
        cursor: "pointer",
        }}
            onClick={() => props.setCard(1)}
        >
            + Add to cart
            </button>
    </div>

    );
};

export default CircleCard