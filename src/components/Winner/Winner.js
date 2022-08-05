import './winner.scss';
function Winner({ name, amount, type, transactionId, icon  }) {

    return (<div className="winner">
        <div className='top-area'>
            <div className='left'>
                <h4 className='name'>{name}</h4>
            </div>
            <div className='right'>
                <p className='card-info'>
                    {transactionId}
                </p>
            </div>
        </div>
        <div className='bot-area'>
            <div className='left card-info'>
                {amount} {type}
            </div>
            <div className='right card-info'>
                    <img src={icon}/>
            </div>
        </div>
    </div>);
}

export default Winner;