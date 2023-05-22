import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
  const allrocketspof = useSelector(state => state.rockets.rockets);
  const resRockets = allrocketspof.filter(item => {
    // console.log(item);
    return (item.reserved)
  })
  console.log(resRockets, 'resrockets');

  const alldragonspof = useSelector(state => state.dragonsobj.dragons);
  const resDragons = alldragonspof.filter(item => {
    // console.log(item);
    return (item.reserved)
  })
  console.log(resDragons, 'dragons');

  return (
    <div className='profilwrapper'>
      <ul>
        {
        resRockets.map((item) => (
          <li key={item.rocket_id}>{item.rocket_name}</li>
        ))
        }
      </ul>
      <ul>
        {
        resDragons.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default Profile