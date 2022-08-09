import './Button.scss'
function Button({onClickFunc,btnClassName,children}) {
    return (<button onClick={()=>onClickFunc()} className={`btn `+btnClassName}>
        <p>{children}</p>
    </button> );
}

export default Button;