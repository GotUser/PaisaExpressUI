import React, { Component } from 'react';
import { Row, Col, Card, CardBody,Fragment,FormGroup,Input} from 'reactstrap';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import {Menu, menuItemContainer,asyncContainer,Typeahead} from 'react-bootstrap-typeahead';
const AsyncTypeahead = asyncContainer(Typeahead);
import {MenuItem} from 'react-bootstrap';
// import {Control} from 'react-bootstrap';
class AsyncExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowNew: false,
      isLoading: false,
      multiple: false,
      options: [ {id: 1, label: 'John'},
      {id: 2, label: 'Miles'},
      {id: 3, label: 'Charles'},
      {id: 4, label: 'Herbie'},],
    };
    
}

// renderCheckboxes() {
//   const checkboxes = [
//     {label: 'Multi-Select', name: 'multiple'},
//     {label: 'Allow custom selections', name: 'allowNew'},
//   ];
//   return checkboxes.map(({label, name}) => (
//     <Control
//       checked={this.state[name]}
//       key={name}
//       name={name}
//       onChange={this.handleChange}
//       type="checkbox">
//       {label}
//     </Control>
//   ));
// }

handleChange  (e)  {
  const {checked, name} = e.target;
  this.setState({[name]: checked});
}

handleSearch  (query) {
  this.setState({isLoading: true});
  makeAndHandleRequest(query)
    .then(({options}) => {
      this.setState({
        isLoading: false,
        options,
      });
    });
}
  

    render() {
      return (
        <Fragment>
        {/* <div> */}
            <AsyncTypeahead
             {...this.state}
              labelKey="login"
              minLength={3}
              onSearch={this.handleSearch}
              placeholder="Search for a Github user..."
              renderMenuItemChildren={(option, props) => (
                <MenuItem key={option.id} user={option} />
              )}
            />  
            <FormGroup>
              {/* {this.renderCheckboxes()} */}
            </FormGroup> 
           </Fragment>
        // </div>
     
  
      );
    }
  
    
  }
  export default AsyncExample;