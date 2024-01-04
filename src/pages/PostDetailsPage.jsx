import TimeTableCard from '../components/common/timetable/TimeTableCard.jsx';

function PostDetailsPage() {
  const timetableList = [
    {
      id: 1,
      title: 'Синема Парк Седьмое небо',
      subtitle: 'Бетанкура, 1, ТРК «Седьмое небо»',
      type: '2D',
      timetableData: [
        {time: '13:30', price: '380', currency: '₽'},
        {time: '13:30', price: '260', currency: '₽'},
        {time: '13:30', price: '330', currency: '₽'},
        {time: '13:30', price: '420', currency: '₽'},
        {time: '13:30', price: '400', currency: '₽'},
        {time: '13:30', price: '510', currency: '₽'},
      ]
    },
    {
      id: 2,
      title: 'Арлекино',
      subtitle: 'Советская пл., 5, ТРЦ «Жар-птица»',
      type: '2D',
      timetableData: [
        {time: '13:30', price: '380', currency: '₽'},
        {time: '13:30', price: '260', currency: '₽'},
        {time: '13:30', price: '330', currency: '₽'},
        {time: '13:30', price: '420', currency: '₽'},
        {time: '13:30', price: '400', currency: '₽'},
      ]
    },
  ]
  return (
    <div className="post-details-page">
      {timetableList.map(el => (
        <TimeTableCard
          key={el.id}
          title={el.title}
          subtitle={el.subtitle}
          type={el.type}
          timetableList={el.timetableData}
        />
      ))}
    </div>
  )
}

export default PostDetailsPage