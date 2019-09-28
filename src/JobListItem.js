import React from 'react';
import './JobListItem.css';
import { withRouter} from 'react-router-dom'

class JobListItem extends React.Component {
  constructor(props){
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    this.props.history.push('/jobs/' + this.props.id)
  }

  render(){
    return (
      <div className="JobListItem" onClick={this.clickHandler}>
        <div className="left">
          <b>{this.props.title}</b>
          <div>{this.props.compay}</div>
        </div>
        <div className="right">
          <b>{this.props.type}</b>
          <div>{this.props.created_at}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(JobListItem);