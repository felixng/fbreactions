import { connect } from 'react-redux';
import moment from 'moment';
moment.locale('zh-tw');
// moment().format('MMMM Do YYYY, h:mm:ss a')
const Top = (props) => {
  let emotionUrl = 'images/'+props.info.type+'.png';
  let url = 'https://www.facebook.com/'+props.info.id;
  let displayedTime = moment(props.info.created_time).format('MMM Do hh:mm');

  let title = props.info.name ? props.info.name : props.info.message.substring(0,100) +' ...';

  return (<div className="event">
    <div className="label centered">
      <img src={emotionUrl} />
      <div style={{"textAlign":"center"}}>{props.info.count}</div>
    </div>
    <div className="content">
      <div className="date">
        {displayedTime}
      </div>
      <div className="summary">
        <div className="header">
          <a target="_blank" href={url}>
            {title}
          </a>
        </div>
      </div>
      <div className="meta text">
        <div className="right floated">
          蘋果日報
        </div>
      </div>
    </div>
  </div>
)}
export default connect(
  null,
  null
)(Top);
