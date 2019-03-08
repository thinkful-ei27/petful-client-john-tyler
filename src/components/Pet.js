import React from 'react'

export default function Pet(props) {
  const {pet, onAdoptPet} = props;
  const {name, imageURL, imageDescription} = pet;
  const attributes = (obj) => Object.entries(obj).map(animal => {
    if (animal[0] === 'sex' || animal[0] === 'age' || animal[0] === 'breed' || animal[0] === 'story') {
      return (
      <>
        <dt>{animal[0]}</dt>
        <dd>{animal[1]}</dd>
      </>
      )
    }
  })
  return (
    <section className='pet'>
    <header>
      <h1>{name}</h1>
      <img src={imageURL} alt={imageDescription} />
    </header>
    <main>
      <dl>
        {attributes(pet)}
      </dl>
      <button onClick={onAdoptPet}>Adopt</button>
    </main>  
  </section>
  )
}
