import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  return _.round(data.reduce(function(previous, next){
    return previous + next;
  }, 0) / data.length);
}

function Sparkline (props) {
  return(
    <div>
      <Sparklines
        data={props.data}
        height={props.height}
        width={props.width}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}

export default Sparkline;
