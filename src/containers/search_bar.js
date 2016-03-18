import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: '',
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }
  render(){
    return (
      <form
        onSubmit={this.onSubmitSearch}
        className="input-group"
        >
        <input
          placeholder="Get a forecast for your favorite cities"
          className="form-control"
          value={this.state.searchInput}
          onChange={this.onSearchChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
  onSubmitSearch(event){
    event.preventDefault();
    this.setState({ searchInput: '', });
    this.props.fetchWeather(this.state.searchInput);
  }
  onSearchChange(event){
    this.setState({
      searchInput: event.target.value,
    });
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

//the null is where the state argument would go
//if this component needed to map state
export default connect(null, mapDispatchToProps)(SearchBar);
