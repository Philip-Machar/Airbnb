const Card = (props) => {
  let badgeText;

  if (props.cardData.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.cardData.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="flex flex-col shrink-0 mt-3 text-[#222222]">
      <div className="relative">
        <img src={`/images/${props.cardData.coverImg}`} width="176px" height="235px" alt="img" />
        {badgeText && <div className="absolute top-2 left-2 bg-white px-2 rounded-sm py-1 text-xs">{badgeText}</div>}
      </div>
      <div className="text-xs">
        <div className="flex items-center gap-2 mt-2">
            <img className="" src="/images/star.png" width="14px" alt="star" />
            <div className="flex items-center">{props.cardData.stats.rating} <span className="text-[#918E9B]">({props.cardData.stats.reviewCount})•{props.cardData.location}</span></div>
        </div>
        <div className="leading-loose">{props.cardData.title}</div>
        <div><span className="font-bold">From ${props.cardData.price}</span> / person</div>
      </div>
    </div>
  )
}

export default Card
