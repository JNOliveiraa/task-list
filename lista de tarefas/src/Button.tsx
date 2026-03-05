type ButtonProps = {
  onClick?: () => void
  className?: string
}


export function Button ({onClick, className}: ButtonProps) {
  return (
      <button className={className} onClick={onClick}>Adicionar</button>
  )
}