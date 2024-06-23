interface ButtonProps{
    name:string;
    type:'submit'| 'button';
}

const Button = ({ name,type }:ButtonProps) => {
  return (
    <div>
        <button type={type} className="button">{name}</button>
    </div>
  )
}

export default Button