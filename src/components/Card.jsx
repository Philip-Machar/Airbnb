const Card = ({img, rating, reviewCount, country, title, price}) => {
  return (
    <div className="px-8 mt-3 text-[#222222]">
      <div className="relative">
        <img src={`/images/${img}`} width="176px" height="235px" alt="img" />
        <div className="absolute top-2 left-2 bg-white px-2 rounded-sm py-1 text-xs">SOLD OUT</div>
      </div>
      <div className="text-xs">
        <div className="flex items-center gap-2 mt-2">
            <img className="" src="/images/star.png" width="14px" alt="star" />
            <div className="flex items-center">{rating} <span className="text-[#918E9B]">({reviewCount})•{country}</span></div>
        </div>
        <div className="leading-loose">{title}</div>
        <div><span className="font-bold">From ${price}</span> / person</div>
      </div>
    </div>
  )
}

export default Card
