import React, { Component } from 'react';
import  { Form, FormGroup, Input } from 'reactstrap';

class Search extends Component {
  state = {
    searchTerm: ""
  }

  handleInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.runSearch(searchTerm);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            type="text"
            placeholder="Search Term"
            value={this.state.searchTerm}
            onChange={(event) => this.handleInputChange(event.target.value)}
          />
        </FormGroup>
      </Form>
    )
  }
};

export default Search;
