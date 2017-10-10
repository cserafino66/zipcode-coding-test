import React, { Component } from 'react';
import FormFieldA from './FormFieldA';
import FormFieldB from './FormFieldB';
import free-zipcode-database.csv from './free-zipcode-database.csv';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcodeA: '',
      zipcodeB: ''
    }

    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateFormSubmit = this.validateFormSubmit.bind(this);
    this.resultFunction = this.resultFunction.bind(this);
    this.csvJSON = this.csvJSON.bind(this);
  }

  handleChangeA(event) {
    let valueA = event.target.value;
    this.setState({ zipcodeA: valueA })
  }

  handleChangeB(event) {
    let valueB = event.target.value;
    this.setState({ zipcodeB: valueB })
  }

  csvJSON(csv) {
    let lines = csv.split("\n");
    let result = [];

    let headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      let obj = {};
      let currentline = lines[i].split(",");
      for (let j = 0 ; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return JSON.stringify(result);
  }

  validateFormSubmit(event) {
    let zipcodeA = document.forms["ZipForm"]["zipcodeA"].value;
    let zipcodeB = document.forms["ZipForm"]["zipcodeB"].value;

    if (zipcodeA === "" || zipcodeB === "") {
      alert("Two zip codes must be entered.");
      return false;
    }

    if (zipcodeA.length !== 5 || zipcodeB.length !== 5) {
      alert("Both zip codes must be 5 digits long.");
      return false;
    }

    if (isNaN(zipcodeA) === false || isNaN(zipcodeB) === false) {
      alert("Invalid Zip Code");
      return false;
    }

    if (csvJSON('free-zipcode-database.csv'))
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      zipcodeA: this.state.zipcodeA,
      zipcodeB: this.state.zipcodeB,
    };
    if (this.props.validateFormSubmit(formPayload)) {
      resultFunction(formPayload);
    }
  }


  resultFunction(zipCodeA, zipcodeB) {

  }

  render() {

    return (
      <form name="ZipForm" onSubmit={this.handleFormSubmit}>
        <FormFieldA
          content={this.state.zipcodeA}
          label="Zip Code A"
          name="zipcodeA"
          handleChangeA={this.handleChangeA}
        />
        <FormFieldB
          content={this.state.zipcodeB}
          label="Zip Code B"
          name="zipcodeB"
          handleChangeB={this.handleChangeB}
        />
        <div>
          <input type="submit" value="Submit" />
        </div>
        <div>
          <Result
          resultFunction={this.resultFunction}
          csvJSON={this.csvJSON}
          zipcodeA={this.state.zipcodeA}
          zipcodeB={this.state.zipcodeB}
          />
        </div>
      </form>
    )
  }
}

export default FormContainer;
