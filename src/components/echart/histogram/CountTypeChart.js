/**
 * 报备警力-3d柱状图
 */
import { max } from 'lodash';
import React, { useEffect, useState } from 'react';
import BasicEchartComp from '../BasicEchartComp';

let yList = [0];
const maxData = [100, 100, 100, 100, 100, 100];
let xList = [''];
const color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
let xData = xList.map((item, index) => {
  return {
    value: item,
    textStyle: {
      color: color[index]
    }
  };
});
const dom = 400;
const barWidth = dom / 20;
const colors = [
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#FF3FDA'
      },
      {
        offset: 0.5,
        color: '#FF3FDA'
      },
      {
        offset: 0.5,
        color: '#CC1BAA'
      },
      {
        offset: 1,
        color: '#CC1BAA'
      }
    ]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#602CFF'
      },
      {
        offset: 0.5,
        color: '#602CFF'
      },
      {
        offset: 0.5,
        color: '#4915E6'
      },
      {
        offset: 1,
        color: '#4915E6'
      }
    ]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#00FFFF'
      },
      {
        offset: 0.5,
        color: '#00FFFF'
      },
      {
        offset: 0.5,
        color: '#11A6D0'
      },
      {
        offset: 1,
        color: '#11A6D0'
      }
    ]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#89FF5E'
      },
      {
        offset: 0.5,
        color: '#89FF5E'
      },
      {
        offset: 0.5,
        color: '#48DD12'
      },
      {
        offset: 1,
        color: '#48DD12'
      }
    ]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#FFD05C'
      },
      {
        offset: 0.5,
        color: '#FFD05C'
      },
      {
        offset: 0.5,
        color: '#DEA821'
      },
      {
        offset: 1,
        color: '#DEA821'
      }
    ]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#FF7853'
      },
      {
        offset: 0.5,
        color: '#FF7853'
      },
      {
        offset: 0.5,
        color: '#DB3E13'
      },
      {
        offset: 1,
        color: '#DB3E13'
      }
    ]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: '#AA48FF'
      },
      {
        offset: 0.5,
        color: '#AA48FF'
      },
      {
        offset: 0.5,
        color: '#8E15F8'
      },
      {
        offset: 1,
        color: '#8E15F8'
      }
    ]
  }
];
export default function CountTypeChart(props) {
  const [options, setOptions] = useState({});
  const { data } = props;
  useEffect(() => {
    xList = data?.nameArray || xList;
    yList = data?.numArray || yList;
    let maxNum = 0;
    xData = xList.map((item, index) => {
      maxNum = item > maxNum ? maxNum : maxNum;
      return {
        value: item,
        textStyle: {
          color: color[index]
        }
      };
    });
    xList.map(item => {
      maxData.push(maxNum * 1.3);
    });
    setOptionData();
  }, [data]);

  // 设置echart options
  const setOptionData = () => {
    const option = {
      // 标题
      title: {
        show: false
      },
      /** 区域位置 */
      grid: {
        left: '10%',
        right: '10%',
        top: '5%',
        height: '80%'
      },

      // X轴
      xAxis: {
        // name: 'X',
        nameTextStyle: {
          color: '#FFFFFF',
          padding: [0, 0, 0, 20]
        },
        data: xData,
        show: true,
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,1)',
            shadowColor: 'rgba(255,255,255,1)',
            shadowOffsetX: '20'
          },
          // symbol: ['none', 'arrow'],
          symbol: ['none'],
          symbolOffset: [0, 25]
        },
        splitLine: {
          show: false
          // show: true,
          // lineStyle: {
          //   // color: 'rgba(255,255,255,0.2)'
          // }
        },
        axisLabel: {
          rotate: 0,
          interval: 0,
          fontSize: 12
        }
      },
      yAxis: {
        show: false,
        splitNumber: 4,
        axisLabel: {
          color: '#FFFFFF'
        }
      },
      series: [
        {
          type: 'bar',
          barWidth: barWidth,
          itemStyle: {
            normal: {
              color: function (params) {
                return colors[params.dataIndex % 7];
              }
            }
          },
          label: {
            show: true,
            position: [barWidth / 2, -(barWidth + 10)],
            color: '#ffffff',
            fontSize: 12,
            fontStyle: 'bold',
            align: 'center'
          },
          data: yList
        },
        {
          data: maxData,
          type: 'bar',
          barMaxWidth: 'auto',
          barWidth: barWidth,
          barGap: '-100%',
          zlevel: -1,
          itemStyle: {
            opacity: 0
          }
        },

        {
          z: 2,
          type: 'pictorialBar',
          data: yList,
          symbol: 'diamond',
          symbolOffset: [0, '50%'],
          symbolSize: [barWidth, barWidth * 0.5],
          itemStyle: {
            normal: {
              color: function (params) {
                return colors[params.dataIndex % 7];
              }
            }
          }
        },
        {
          z: 3,
          type: 'pictorialBar',
          symbolPosition: 'end',
          data: yList,
          symbol: 'diamond',
          symbolOffset: [0, '-50%'],
          symbolSize: [barWidth, barWidth * 0.5],
          itemStyle: {
            normal: {
              borderWidth: 0,
              color: function (params) {
                return colors[params.dataIndex % 7].colorStops[0].color;
              }
            }
          }
        },

        {
          z: 3,
          type: 'pictorialBar',
          symbolPosition: 'end',
          data: maxData,
          symbol: 'diamond',
          symbolOffset: [0, '-50%'],
          symbolSize: [0, 0],
          itemStyle: {
            normal: {
              borderWidth: 0
              // color: function (params) {
              //     return colors[params.dataIndex % 7].colorStops[0].color;
              // },
            }
          }
        }
      ]
    };

    setOptions(option);
  };

  return <BasicEchartComp options={options} chartType={props.chartType} {...props} />;
}
