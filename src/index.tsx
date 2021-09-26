/*
 * @Author: your name
 * @Date: 2021-09-23 11:48:21
 * @LastEditTime: 2021-09-26 11:43:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lion-design/src/index.tsx
 */
export { default as HightCharts3dPieDim } from "./components/hightChart/HightCharts3dPieDim";

// import React from 'react';
// import ReactDOM from 'react-dom';
// import HightCharts3dPieDim from './components/hightChart/HightCharts3dPieDim';

export { default as Button } from "./components/Button";

// const tbsjtest = [
//   {
//     fxzbdm: '01',
//     fxzbmc: '总下发数',
//     fxjg1: '989',
//     fxjg2: null,
//     fxjg3: null,
//     color: '#C470FF'
//   },
//   {
//     fxzbdm: '02',
//     fxzbmc: '绝对下发数',
//     fxjg1: '128',
//     fxjg2: null,
//     fxjg3: null,
//     color: '#1A94FE'
//   },
//   {
//     fxzbdm: '03',
//     fxzbmc: '世纪处警数',
//     fxjg1: '989',
//     fxjg2: null,
//     fxjg3: null,
//     color: '#09C5A2'
//   },
//   {
//     fxzbdm: '04',
//     fxzbmc: '排队待接数',
//     fxjg1: '989',
//     fxjg2: null,
//     fxjg3: null,
//     color: '#FFE05E'
//   }
// ];
// const getPiecolor = (data: any[]) => {
//   const colors: any[] = [];
//   data.map(item => {
//     colors.push(item.color);
//   });
//   return colors;
// };
// ReactDOM.render(
//   <React.StrictMode>
//      <HightCharts3dPieDim width="60%" tbsj={tbsjtest} piecolor={getPiecolor(tbsjtest)} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );