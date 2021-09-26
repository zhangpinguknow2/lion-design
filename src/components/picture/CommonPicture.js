/*
 * @Author: your name
 * @Date: 2021-08-10 16:21:30
 * @LastEditTime: 2021-09-23 17:23:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lion-design/src/components/picture/CommonPicture.js
 */
/**
 * Created by fangst on 2020/08/13.
 * 通用图片组件类
 */
import React from 'react';
import initRedux from './CommonPictureRedux';
import CommonPictureComponent from './CommonPictureComponent';
const defaultimgc={width: '100%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'}
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.redux = initRedux({
      key: props.id,
      initialState: {}
    });
    this.props = props;
  }
  
  render() {
    const { className = '', imgClass = defaultimgc, imageUrl, autoRotate = false, imgStyle = {}, reverse = false } = this.props;
    return (
      <CommonPictureComponent
        className={className}
        imgClass={imgClass}
        imageUrl={imageUrl}
        autoRotate={autoRotate}
        imgStyle={imgStyle}
        reverse={reverse}></CommonPictureComponent>
    );
  }
}

export default Index;
