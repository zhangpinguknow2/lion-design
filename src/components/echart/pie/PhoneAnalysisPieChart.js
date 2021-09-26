/**
 * 电诈警情-饼图
 */
import React, { useEffect, useState } from 'react';
import BasicEchartComp from '../BasicEchartComp';
import phoneIcon from '@/static/images/pannel/dzjq/Phone.png';

import { Select } from 'antd';

export default function PhoneAnalysisPieChart(props) {
  const [options, setOptions] = useState({});
  const { echartStyle, id, data } = props;
  useEffect(() => {
    setOptionData();
  }, [data]);

  // 设置echart options
  const setOptionData = () => {
    const option = {
      color: ['#B15FFF', '#44F8FE', '#E09F23', '#09C58E', '#C74B29', '#1E73FF', '#B15FFF'],
      // backgroundColor: 'rgb(16, 12, 42)',
      graphic: [
        {
          type: 'image',
          id: 'logo',
          left: 'center',
          top: 'center',
          z: -10,
          bounding: 'raw',
          rotation: 0, // 旋转
          // origin: [64.5, 32.5],//中心点
          scale: [1.0, 1.0], // 缩放
          style: {
            image: phoneIcon,
            width: 40,
            height: 40,
            opacity: 1
          }
        }
      ],
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: '通行方式',
          type: 'pie',
          radius: ['50%', '60%'],
          itemStyle: {
            borderRadius: 0,
            borderColor: 'rgb(16, 12, 42)',
            borderWidth: 5
          },
          data,
          // data: [
          // { value: 1048, name: '刷卡' },
          // { value: 735, name: '手机' },
          // { value: 580, name: '人脸识别' },
          // { value: 580, name: '其他' },
          // { value: 484, name: '呼叫开门' },
          // { value: 484, name: '微信' }
          // ],
          tooltip: {
            show: false
          },
          clockwise: true,
          avoidLabelOverlap: true,
          hoverOffset: 15,
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {d}%'
            // rich: {
            //   a: {
            //     color: '#C3DBFF',
            //     // padding: [20, -80, 0, -80],
            //     fontSize: 14
            //   },
            //   n: {
            //     color: '#CD8302',
            //     fontSize: 14
            //   }
            // }
          },
          labelLine: {
            normal: {
              length: 20,
              length2: 80
              // lineStyle: {
              //   width: 1,
              //   color: '#fff'
              // }
            }
          }
        },
        {
          name: 'inner0',
          type: 'pie',
          radius: ['0%', '36%'],
          data: [
            {
              value: 0,
              clockWise: false,
              itemStyle: {
                normal: {
                  color: 'rgba(30, 115, 255, .2)'
                }
              }
            }
          ],
          label: {
            show: false,
            position: 'center'
          },
          animation: false,
          emphasis: {
            scale: false
          },
          labelLine: {
            show: false
          },
          tooltip: {
            show: false
          }
        },
        {
          name: 'inner',
          type: 'pie',
          radius: ['45%', '45%'],
          data: [
            {
              value: 1,
              clockWise: false,
              itemStyle: {
                normal: {
                  borderType: 'dashed',
                  borderWidth: 2, // 设置边框粗细
                  borderColor: '#123D8E' // 边框颜色
                }
              }
            }
          ],
          label: {
            show: false,
            position: 'center'
          },
          animation: false,
          emphasis: {
            scale: false
          },
          tooltip: {
            show: false
          },
          labelLine: {
            show: false
          }
        },
        {
          name: 'outer',
          type: 'pie',
          animation: false,
          radius: ['61%', '61%'],
          data: [
            {
              value: 1,
              clockWise: false,
              itemStyle: {
                normal: {
                  borderWidth: 2, // 设置边框粗细
                  borderColor: '#0B3788' // 边框颜色
                }
              }
            }
          ],
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            scale: false
          },
          labelLine: {
            show: false
          },
          tooltip: {
            show: false
          }
        }
      ]
    };

    setOptions(option);
  };

  return <BasicEchartComp options={options} chartType={props.chartType} {...props} />;
}
