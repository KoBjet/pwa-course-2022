import Avatar from "./Avatar";
import "../css/Friendbox.css";

function Friendbox (props) {
  let data = props.data;

  return (
    <div className="friendbox">
      {
        data.map((item,index) => {
          return (<div key={index} className={`friendbox-item ${item.position}`}>
            <div className="friendbox-itembox">
            <div>{item.user}</div>
            <Avatar name={item.user}></Avatar>
            <div className="friendbox-item-displayname">{item.displayName}</div>
            </div>
          </div>)
        })
      }
    </div>
  )
}

export default Friendbox;