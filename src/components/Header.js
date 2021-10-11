import {Tabs} from 'antd';
import {Input} from 'antd';
import {AudioOutlined} from '@ant-design/icons';

const {Search} = Input;

const suffix = (<AudioOutlined style={{
  fontSize: 16,
  color: '#1890ff'
}}/>);
const onSearch = value => console.log(value)
const {TabPane} = Tabs;

function Header() {
  return (
    <div className="card-btn">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Tech" key="1">
            <p>Content Tech</p>
          </TabPane>
          <TabPane tab="Business" key="2">
            <p>Content of Business</p>
          </TabPane>
          <TabPane tab="Climate" key="3">
            <p>Content of Climate</p>
          </TabPane>
          <TabPane tab="Health" key="4">
            <p>Content of Health</p>
          </TabPane>
          <TabPane tab="Travel" key="5">
            <p>Content of Travel</p>
          </TabPane>
          <TabPane tab="Sport" key="6">
            <p>Content of Sport</p>
          </TabPane>
          <TabPane tab="Auto" key="7">
            <p>Content of Auto</p>
          </TabPane>
          <TabPane tab="Most Popular" key="8">
            <p>Content of Hot Most popular</p>
            
          </TabPane>
        </Tabs>
        <div className="search">
          <Search 
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}/>
        </div>
      </div>
    </div>
  );
}
export default Header;