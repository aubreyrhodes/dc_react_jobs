import React from 'react';
import './Jobs.css';
import JobListItem from './JobListItem';
import Job from './Job';
import {Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

class Jobs extends React.Component {
  constructor(props){
    super(props);
    this.state = {jobs: []};
  }

  componentDidMount() {
    axios.get('/api/jobs').then(result => {
      this.setState({jobs: result.data});
    })
  }

  render() {
    const jobsJsx = this.state.jobs.map( job => (<JobListItem {...job}/>));

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              Jobs in Atlanta
            </h1>
            <p className="App-subtitle">
              Click to explore jobs
            </p>
          </header>
        </div>
        <div className="Jobs">
          <Switch>
            <Route exact path="/jobs" render={() => jobsJsx } />
            <Route path="/jobs/:id" component={Job} />
            <Route path="/" exact><Redirect to="/jobs"/></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Jobs;