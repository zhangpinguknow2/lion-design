/**
 * 报备警力-3d柱状图
 */
import { max } from 'lodash';
import React, { useEffect, useState } from 'react';
// import BasicEchartComp from '../BasicEchartComp';
import * as echarts from 'echarts';

const tdata = [];
function contains(arr, dst) {
  var i = arr.length;
  while ((i -= 1)) {
    if (arr[i] === dst) {
      return i;
    }
  }
  return false;
}

// var attackSourcesColor = [
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#ff9a9e' },
//     { offset: 1, color: '#fad0c4' }
//   ]),
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#a18cd1' },
//     { offset: 1, color: '#fbc2eb' }
//   ]),
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#f6d365' },
//     { offset: 1, color: '#fda085' }
//   ]),
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#fbc2eb' },
//     { offset: 1, color: '#a6c1ee' }
//   ]),
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#a1c4fd' },
//     { offset: 1, color: '#c2e9fb' }
//   ]),
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#d4fc79' },
//     { offset: 1, color: '#96e6a1' }
//   ]),
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#e0c3fc' },
//     { offset: 1, color: '#8ec5fc' }
//   ]),
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#f093fb' },
//     { offset: 1, color: '#f5576c' }
//   ]),
//   new echarts.graphic.LinearGradient(0, 1, 1, 1, [
//     { offset: 0, color: '#4facfe' },
//     { offset: 1, color: '#00f2fe' }
//   ])
// ];
// var attackSourcesColor1 = [
//   '#EB3B5A',
//   '#FA8231',
//   '#F7B731',
//   '#3860FC',
//   '#1089E7',
//   '#F57474',
//   '#56D0E3',
//   '#1089E7',
//   '#F57474',
//   '#1089E7',
//   '#F57474'
// ];
var attaData = [];
var attaName = [];
var topName = [];

var salvProMax = []; // 背景按最大值
for (let i = 0; i < attaData.length; i++) {
  salvProMax.push(attaData[0]);
}

function attackSourcesData(sData) {
  var sss = [];
  const maxValue = Math.max(
    ...sData.map(item => {
      return parseFloat(item);
    })
  );
  sData.map(() => {
    sss.push({
      value: maxValue
    });
  });
  return sss;
}
export default function CountTypeChart(props) {
  // const [options, setOptions] = useState({});
  const { width, height, attackSourcesColor } = props;
  function attackSourcesDataFmt(sData) {
    var sss = [];
    sData.forEach(function (item, i) {
      const itemStyle = {
        color: attackSourcesColor[i]
      };
      sss.push({
        value: item,
        itemStyle: itemStyle
      });
    });
    return sss;
  }
  useEffect(() => {
    const data = props.data;
    if (!(data && data.length > 0)) {
      return;
    }
    data.map(item => {
      tdata.push({
        code: item.name,
        stock: item.value,
        fundPost: item.value
      });
    });
    tdata.forEach((it, index) => {
      attaData[index] = parseFloat(it.fundPost).toFixed(2);
      attaName[index] = it.stock;
      topName[index] = `${it.code} ${it.stock}`;
    });
    var myChart = echarts.init(document.getElementById('zdry-chart'));
    // 绘制图表
    myChart.setOption(getOption());
  }, [props.data]);

  const getOption = () => {
    return {
      grid: {
        left: '5%',
        right: '5%',
        width: '90%',
        bottom: '5%',
        top: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          offset: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          position: 'left',
          show: true,
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#03B0D8',
              fontSize: '30'
            }
          },
          data: tdata.map(item => {
            return item.code;
          })
        },
        {
          type: 'category',
          inverse: true,
          offset: 0,
          axisTick: 'none',
          axisLine: {
            show: false
          },
          position: 'right',
          show: true,
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#00FFFF',
              fontSize: '30'
            }
          },
          data: tdata.map(item => {
            return item.stock;
          })
        }
      ],
      series: [
        {
          zlevel: 1,
          name: '',
          type: 'bar',
          barWidth: '18px',
          animationDuration: 1500,
          data: attackSourcesDataFmt(attaData),
          align: 'center',
          itemStyle: {
            normal: {
              barBorderRadius: 13
            }
          },
          label: {
            show: false
          }
        },
        {
          name: '',
          type: 'bar',
          barWidth: 18,
          barGap: '-100%',
          data: attackSourcesData(attaData),
          textStyle: {
            // 图例文字的样式
            fontSize: 30,
            color: '#fff'
          },
          itemStyle: {
            normal: {
              color: '#182C6D',
              fontSize: 30,
              barBorderRadius: 5
            }
          }
        }
      ]
    };
  };

  return <div id="zdry-chart" style={{ width: width || '100%', height: height || '100%' }}></div>;
}
