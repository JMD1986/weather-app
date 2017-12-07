import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  render(){
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>city</th>
              <th>temp</th>
              <th>pressure</th>
              <th>Humidy</th>
            </tr>
          </thead>
        </table>
      );
  }
}


function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
