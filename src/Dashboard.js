import React from 'react'
import Pet from './components/Pet';
import { connect } from 'react-redux';
import {fetchCat, adoptCat} from './actions/cat';
import {fetchDog, adoptDog} from './actions/dog';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat())
    this.props.dispatch(fetchDog())
  }

  render() {
    const {catToAdopt, dogToAdopt} = this.props;
    let content;
    if (this.props.catLoading === true || this.props.dogLoading === true) {
      content = <div>Loading...</div>
    } else if (catToAdopt === null && dogToAdopt === null) {
      content = <div>Everything adopted!</div>
    } else if (catToAdopt === null) {
      content = (
        <>
          <div>All cats adopted!</div>
          <Pet pet={dogToAdopt} onAdoptPet={() => this.props.dispatch(adoptDog())} />
        </>
      )
    } else if (dogToAdopt === null) {
      content = (
        <>
          <Pet pet={catToAdopt} onAdoptPet={() => this.props.dispatch(adoptCat())} />
          <div>All dogs adopted!</div>
        </>
      )
    } else {
      content = (
        <>
          <Pet pet={catToAdopt} onAdoptPet={() => this.props.dispatch(adoptCat())} />
          <Pet pet={dogToAdopt} onAdoptPet={() => this.props.dispatch(adoptDog())} />
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
    catLoading: state.cat.loading,
    dogLoading: state.dog.loading,
  }
}

export default connect(mapStateToProps)(Dashboard);