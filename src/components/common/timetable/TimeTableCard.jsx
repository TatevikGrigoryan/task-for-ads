import TimeItems from './TimeItems.jsx';
import '../../../css/common/timetable/timetableCard.css'

function TimetableCard({title, subtitle, type, timetableList = []}) {

  return (
    <div className="timetable-card">
      <div className="timetable-card__main">
        <span className="timetable-card__title">
          {title}
        </span>

        <span className="timetable-card__subtitle">
          {subtitle}
        </span>
      </div>

      <div className="timetable-card__info">
        <span className="timetable-card__type">{type}</span>
        <TimeItems
          items={timetableList}
        />
      </div>
    </div>
  )
}

export default TimetableCard