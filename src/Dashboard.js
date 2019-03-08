import React from 'react'
import Pet from './components/Pet';
import { connect } from 'react-redux';
import {fetchCat, adoptCat} from './actions/cat';
import {fetchDog} from './actions/dog';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat())
    this.props.dispatch(fetchDog())
  }

  render() {
    const {catToAdopt, dogToAdopt} = this.props;
    let content;
    if (this.props.catToAdopt === null || this.props.dogToAdopt === null) {
      content = <div>Loading...</div>
    } else {
      content = (
        <>
          <Pet pet={catToAdopt} onAdoptPet={() => this.props.dispatch(adoptCat())} />
          <Pet pet={dogToAdopt} onAdoptPet={() => console.log('temp')} />
        </>
      )
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    catToAdopt: state.cat.data,
    dogToAdopt: state.dog.data,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Dashboard);