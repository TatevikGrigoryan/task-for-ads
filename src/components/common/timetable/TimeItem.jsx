import '../../../css/common/timetable/timeItem.css'

function TimeItem({time, price, currency}) {

  return (
    <div className="time-item">
      <span className="time-item__time">{time}</span>
      <span className="time-item__price">от {price} {currency}</span>
    </div>
  )
}

export default TimeItem