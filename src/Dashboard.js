import React from 'react'
import Pet from './components/Pet';

export default function Dashboard(props) {
  const {catToAdopt, dogToAdopt} = props;

  return (
    <div>
      <Pet pet={catToAdopt} onAdoptPet={() => console.log('This is working')} />
      <Pet pet={dogToAdopt} onAdoptPet={() => console.log('This is working')} />
    </div>
  )
}
