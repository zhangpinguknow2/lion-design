/*
 * @Author: your name
 * @Date: 2020-12-24 14:14:27
 * @LastEditTime: 2021-09-26 11:45:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /FCodeCheck-web/src/component/picture/CommonPictureComponent.js
 */
import React from 'react';
// import "../../styles/index.scss";

const prefixClass = 'commonPicture';

const Index = props => {
  const { className, imgClass, imageUrl, autoRotate, imgStyle, reverse } = props;
  return (
    <div
      className={`${prefixClass}_Container ${className} ${autoRotate ? 'autoRotate' : ''} ${reverse ? 'reverse' : ''}`}
      style={{ ...imgStyle }}>
      <div
        className={`${prefixClass}_Img`}
        style={{
          ...imgClass,
          backgroundImage: `url(${imageUrl})`
        }}></div>
    </div>
  );
};

export default Index;
