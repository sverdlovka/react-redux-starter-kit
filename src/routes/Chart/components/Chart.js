import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';

export class Chart extends Component {

  render() {
    const option = {
      //from https://ecomfe.github.io/echarts-examples/public/editor.html?c=pie-custom

      title: {
        text: 'My Pie (go to Counter tab to change your value)',
        left: 'center',
        top: 20
      },

      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: 'Pie',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: this.props.counter, name: 'Your value' },
            { value: 3, name: 'Constant 3' },
            { value: 5, name: 'Constant 5' }
          ].sort(function (a, b) {
            return a.value - b.value
          })
        }
      ]
    };

    return (
      <div
        style={{ margin: '0 auto' }}>
        <ReactEcharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
    )
  }
}

export default Chart
