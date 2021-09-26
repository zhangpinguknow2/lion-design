/*
 * @Author: 徐军
 * @Date: 2021-06-21 14:49:31
 * @Last Modified by:   徐军
 * @Last Modified time: 2021-06-21 14:49:31
 */

/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PieRing from '@/components/chart/pie/pieRing'; // 饼状图
import './pieRing.less';
import CommonPicture from '../picture/CommonPicture';
const prefixClass = 'career_Self';
const RankList = [
  { name: '加分指标', type: 1 },
  { name: '减分指标', type: 2 }
];
const restest = {
  data: {
    tbsj: [
      {
        fxzbdm: '01',
        fxzbmc: '省际',
        fxjg1: '23',
        fxjg2: null,
        fxjg3: null
      },
      {
        fxzbdm: '02',
        fxzbmc: '州际',
        fxjg1: '76',
        fxjg2: null,
        fxjg3: null
      }
    ]
  }
};
const TrendConcentrated = props => {
  const res = {
    data: {
      tbsj: props.tbsj || restest.data.tbsj || []
    }
  };
  const [data, setData] = useState([]);
  const [scalewidth, setScalewidth] = useState(1);
  useEffect(() => {
    const curData = [];
    if (props && props.width) {
      setScalewidth(props.width / 170);
    } else {
      setScalewidth(1);
    }
    _.map(res.data.tbsj, (item, index) => {
      curData.push({ name: item.fxzbmc, y: +item.fxjg1 });
    });
    setData(curData);
  }, []);
  return (
    <div className="information">
      <div className="pie-ring">
        <div className="pie-class">
          <div className="cycle-img1">
            <CommonPicture
              id="ybgayzt-jlgc-ryjg-picture"
              imageUrl={`${publicPath}static/images/ybgayzt/jlgc-ryjg-back.png`}
              imgStyle={{
                width: props.width * 0.5,
                height: props.width * 0.5,
                transform: 'rotateX(60deg)'
              }}
              imgClass={{
                animation: 'quereverse 6s linear infinite'
              }}
              autoRotate={true}></CommonPicture>
          </div>
          <div className="cycle-img2">
            <CommonPicture
              id="ybgayzt-jlgc-ryjg-picture1"
              imageUrl={`${publicPath}static/images/ybgayzt/jlgc-ryjg-back1.png`}
              imgStyle={{
                width: props.width * 0.7,
                height: props.width * 0.7,
                transform: 'rotateX(60deg)'
              }}
              imgClass={{
                animation: 'que 6s linear infinite'
              }}
              autoRotate={true}></CommonPicture>
          </div>
        </div>
        <div className="module">
          <section className="module-content">
            <div className="row-24">
              <PieRing piecolor={props.piecolor || null} data={data} width={props.width || null} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default TrendConcentrated;
