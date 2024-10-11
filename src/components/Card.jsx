const Card = (props) => {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="flex flex-col shrink-0 mt-3 text-[#222222]">
      <div className="relative">
        <img src={`/images/${props.coverImg}`} width="176px" height="235px" alt="img" />
        {badgeText && <div className="absolute top-2 left-2 bg-white px-2 rounded-sm py-1 text-xs">{badgeText}</div>}
      </div>
      <div className="text-xs">
        <div className="flex items-center gap-2 mt-2">
            <img className="" src="/images/star.png" width="14px" alt="star" />
            <div className="flex items-center">{props.stats.rating} <span className="text-[#918E9B]">({props.stats.reviewCount})•{props.location}</span></div>
        </div>
        <div className="leading-loose">{props.title}</div>
        <div><span className="font-bold">From ${props.price}</span> / person</div>
      </div>
    </div>
  )
}

export default Card
