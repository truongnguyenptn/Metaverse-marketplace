import './breadcrumb.scss';
function Breadcrumb({bcImg,bcTitle}) {
    return (<section className="breadcrumb">
        <div className="container container-content">
            <div className="row">
                <div className="col">
                    <div className="title">
                    {bcTitle}
                    </div>
                    <img className='bcImg' src={bcImg}/>
                </div>
            </div>
        </div>
    </section>);
}

export default Breadcrumb;