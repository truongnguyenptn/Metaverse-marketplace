import './card.scss'
function Card({image,title,children},) {
    
    return (<div className="card">
    <div className="icon">
        <img src={image} alt=""/>
    </div>
    <div className="content">
        <h4 className="title">
           {title}
        </h4>
         
        
    </div>
        {children}
</div>);
}

export default Card;