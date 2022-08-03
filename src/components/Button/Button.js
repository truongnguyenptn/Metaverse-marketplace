import './Button.scss'
function Button({props,children}) {
    return (<a href="#" className='btn'>
        <p>{children}</p>
    </a> );
}

export default Button;