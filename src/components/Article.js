import {Card} from 'antd';
import {Button, notification} from 'antd';


const key = 'updatable';
const openNotification = () => {
  notification.open({key, message: 'Davom Title', description: 'malumot asidega chiqadi'});
  // setTimeout(() => {
  //   notification.open({key, message: 'New Title', description: 'New description.'});
  // }, 1000);
};

function Article(el) {
  return (
    <div
      className="site-card-border-less-wrapper card"
      style={{
      width: 460,
      margin: 10
    }}>
      <Card
        className="card0"
        cover={< img alt = "example" src = {
        el.newel.image
      }
      className = "card-img" />}>
        <h2 className="text">{el.newel.title}</h2>
        <h5 className="description">
          {el.newel.description}</h5>
        <br/>
        
        <>
        <Button type="primary" onClick={openNotification}>
         <a className="content">{el.newel.content}</a>
        </Button>
      </>

      </Card>
     
    </div>
  );
}
export default Article;