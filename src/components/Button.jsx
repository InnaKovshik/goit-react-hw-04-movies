const Button = ({ onClick, title, className }) => {
    return (<button onClick={onClick} className={className}>{title}</button>);
}

export default Button;