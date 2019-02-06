import React from 'react';

export default class MentorCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value});
  }

  handleSubmit(event) {
    alert(`${this.state.value / 7}  mentors need to be scheduled`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="mentor-calculator-form">
        <form onSubmit={this.handleSubmit}>
          <div className="student-input">
            Number of students today:
              <input className="mentor-calculator-input" type="number" value={this.state.value} onChange={this.handleChange}></input>

                  <label className="mentor-number"> {Math.round(this.state.value / 7)}</label>
                  <label className="mentors-needed">Mentors are needed</label>
          </div>


        </form>
      </div>
      )
  }
}


