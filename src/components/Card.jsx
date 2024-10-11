const Card = ({coverImg, stats, location, title, price, openSpots}) => {
  return (
    <div className="flex flex-col shrink-0 mt-3 text-[#222222]">
      <div className="relative">
        <img src={`/images/${coverImg}`} width="176px" height="235px" alt="img" />
        {openSpots === 0 && <div className="absolute top-2 left-2 bg-white px-2 rounded-sm py-1 text-xs">SOLD OUT</div>}
      </div>
      <div className="text-xs">
        <div className="flex items-center gap-2 mt-2">
            <img className="" src="/images/star.png" width="14px" alt="star" />
            <div className="flex items-center">{stats.rating} <span className="text-[#918E9B]">({stats.reviewCount})•{location}</span></div>
        </div>
        <div className="leading-loose">{title}</div>
        <div><span className="font-bold">From ${price}</span> / person</div>
      </div>
    </div>
  )
}

export default Card
