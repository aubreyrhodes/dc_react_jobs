import React from 'react';
import './Job.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Job extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const jobId = this.props.match.params.id;
    axios.get('/api/jobs/' + jobId).then(result => {
      this.setState(result.data);
    })
  }

  render() {
    return (
      <div className="Job">
        <h1>{this.state.title}</h1>
        <p><Link to="/jobs">Back to List</Link></p>
        <a herf={this.state.company_url}><img src={this.state.company_logo} width="100" /></a>
        <div dangerouslySetInnerHTML={{__html: this.state.how_to_apply}}></div>
        <span dangerouslySetInnerHTML={{__html: this.state.description}}></span>    
      </div>
    )
  }
};

export default Job;