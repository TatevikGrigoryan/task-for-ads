import TimeItem from './TimeItem.jsx';
import '../../../css/common/timetable/timeItems.css'

function TimeItems({items}) {
  return (
    <div className="time-items">
      {items.map((el, idx) => (
        <TimeItem
          time={el.time}
          price={el.price}
          currency={el.currency}
          key={idx}
        />
      ))}
    </div>
  )
}

export default TimeItems