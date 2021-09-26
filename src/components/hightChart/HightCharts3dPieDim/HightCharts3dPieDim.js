
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PieDim from '../pie/pieDim.js'; // 饼状图
// import "../../../styles/index.scss";
import CommonPicture from '../../picture/CommonPicture.js';
import pieBg from '../../../static/images/pie_bg.png';
const prefixClass = 'career_Self';
const RankList = [
  { name: '加分指标', type: 1 },
  { name: '减分指标', type: 2 }
];
const tbsjtest = [
  {
    fxzbdm: '01',
    fxzbmc: 'xxx',
    fxjg1: '989',
    fxjg2: null,
    fxjg3: null
  },
  {
    fxzbdm: '02',
    fxzbmc: 'xxx',
    fxjg1: '128',
    fxjg2: null,
    fxjg3: null
  },
  {
    fxzbdm: '03',
    fxzbmc: 'xxx',
    fxjg1: '989',
    fxjg2: null,
    fxjg3: null
  },
  {
    fxzbdm: '04',
    fxzbmc: 'xxx',
    fxjg1: '989',
    fxjg2: null,
    fxjg3: null
  },
  {
    fxzbdm: '05',
    fxzbmc: 'xxx',
    fxjg1: '109',
    fxjg2: null,
    fxjg3: null
  }
];

const HightCharts3dPieDim = props => {
  const res = {
    data: {
      tbsj: props.tbsj || tbsjtest || []
    }
  };
  const [data, setData] = useState([]);
  const [offsetW, setOffsetW] = useState(1);
  useEffect(() => {
    const curData = [];
    // if (props && props.width) {
    //   setScalewidth(props.width / 170);
    // } else {
    //   setScalewidth(1);
    // }
    setOffsetW(document.querySelector('.informationDim').offsetWidth);
    _.map(res.data.tbsj, (item, index) => {
      curData.push({ name: item.fxzbmc, y: +item.fxjg1 });
    });
    setData(curData);
  }, []);
  return (
    <div className="informationDim templeSty">
      <div className="pie-wrapper piedim">
        <div className="pie-class">
          {/* <div
            className="cycle-img1"
            style={{
              left: (props && props.anstyle && props.anstyle.img1Left) || 0,
              top: (props && props.anstyle && props.anstyle.img1Top) || 0
            }}>
            <CommonPicture
              id="ybgayzt-jlgc-ryjg-picture"
              imageUrl={`${publicPath}static/images/pie_bg.png`}
              imgStyle={{
                width: (props && props.anstyle && props.anstyle.img1width) || 0,
                height: (props && props.anstyle && props.anstyle.img1width) || 0,
                transform: 'rotateX(60deg) translate(-50%,-50%)'
              }}
              autoRotate={true}></CommonPicture>
          </div> */}
          <div
            className="cycle-img2"
            style={{
              width: '100%',
              height: '100%'
            }}>
            <CommonPicture
              id="ybgayzt-jlgc-ryjg-picture1"
              imageUrl={pieBg}
              imgStyle={{
                width: '60%',
                height: '50%',
                transform: 'rotateX(20deg) translate(-50%,-50%)',
                left: '50%',
                top: '55%',
                position: 'absolute'
              }}
              autoRotate={false}
              reverse={false}></CommonPicture>
          </div>
        </div>
        <div className="module">
          <section className="module-content">
            <div className="row-24">
              <PieDim piecolor={props.piecolor || null} width={props.width || 100} data={data} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default HightCharts3dPieDim;
