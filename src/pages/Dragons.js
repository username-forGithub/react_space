
import { useSelector, useDispatch } from 'react-redux'
import { fetchDragons } from '../redux/slices/dragonsSlice'
import { changeReserved } from '../redux/slices/dragonsSlice'

const Dragons = () => {
  const dispatch = useDispatch();
  const alldragons = useSelector(state => state.dragonsobj.dragons);
  if(alldragons.length === 0){
    dispatch(fetchDragons());
  }
  const handleBooking = (id) => {
    dispatch(changeReserved(id));
  }
  return (
    <ul className='listul'>
      {alldragons.map((item, i) => (
        <li key={i}>
          <span className="imgWrapper"><img src={item.flickr_images} /></span>
          <span className='title'>{item.name}</span>
          <button id={item.id} onClick={() => handleBooking(item.id)} className={`bg-blue ${item.reserved ? 'bg-orange' : ''}`} >
            { item.reserved ? 'Cancel Reservation' : 'Reserve Dragons' }
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Dragons