import './App.css';
import newsarr from './news';
import Article from './components/Article';
import Header from './components/Header';
import Firstheader  from './components/Firstheader';
import {Pagination} from 'antd';
import {BackTop} from 'antd';

import {Button, notification} from 'antd';
import {SmileOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'; 
import { Carousel } from 'antd';
import { blockStatement } from '@babel/types';
const contentStyle = {
  height: '400px',
  width:'550px',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function App() {
  const newsList = newsarr.map((el) => <Article newel={el}/>);

  return (
    <div className="App">
      <Firstheader/>
      <Header/>
      <div className="carousel-div">
        <Carousel className="carousel-card" autoplay autoplayInterval="1000" >
          <div>
            <img  src={newsarr[0].image}  style={contentStyle}  alt="2" />
          </div>
          <div>
            <img  src={newsarr[1].image}  style={contentStyle}  alt="2" />
          </div>
          <div>
            <img  src={newsarr[2].image}  style={contentStyle}  alt="3"  />
          </div>
        </Carousel>
        {newsList[0]}
      </div>
      <section className="content">
        <div className="row" >
        {newsList}
          <BackTop/>
        </div>
        <Pagination defaultCurrent={1} total={50}/> <br/>
        <Button
          type="primary" onClick={openNotification} style={{ width: 200 }}>Open the box  </Button>
      </section>

    </div>
  );
}
const openNotification = () => {
  notification.open({message: 'sevinch Title', description: 'sabohat privetik', icon: <SmileOutlined style={{
    color: '#108ee9'
  }}/>});
};
export default App;

