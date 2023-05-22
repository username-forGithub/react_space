import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRockets } from '../redux/slices/rocketsSlice'
import { changeReserved } from '../redux/slices/rocketsSlice'

const Rockets = () => {
  const dispatch = useDispatch();
  const allrockets = useSelector(state => state.rockets.rockets);
  // if(allrockets.length === 0){
  //   dispatch(fetchRockets());
  // }
  useEffect(() => {
    if (!allrockets.length) {
      dispatch(fetchRockets());
    }
  }, []);
  const handleBooking = (id) => {
    dispatch(changeReserved(id));
  }
  return (
    <ul className='listul'>
      {allrockets.map((item, i) => (
        <li key={i}>
          <span className="imgWrapper"><img src={item.flickr_images} /></span>
          <span className='title'>{item.rocket_name}</span>
          <button id={item.rocket_id} onClick={() => handleBooking(item.rocket_id)} className={`bg-blue ${item.reserved ? 'bg-orange' : ''}`} >
            { item.reserved ? 'Cancel Reservation' : 'Reserve Rockets' }
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Rockets