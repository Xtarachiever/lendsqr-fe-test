
type DetailCardProps = {
    img: string | undefined
    header: string
    number:string
}
const DetailCard = ({img,header,number}:DetailCardProps) => {
  return (
    <div className="detail_card">
        <img src={img} alt="icons"/>
        <p className="capitalize small-font header">{header}</p>
        <p className="large-font bold">{number}</p>
    </div>
  )
}

export default DetailCard