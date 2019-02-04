import React from 'react'

import EmployeeApp from './employeeApp'

export default class EmployeePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            shifts: [],
            availabilities: [],
            currentDay: new Date()
        }
    }
    
    componentWillMount () {
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employees: data }) });

        fetch('/api/shifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ shifts: data }) });

        fetch('/api/availability')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ availabilities: data }) });
        
    }

    fetchDate = (day) => {
        this.setState({
            currentDay: day
        })
    }

    fetchRequestTimeOff = (reason, monthStart, dayStart, monthEnd, dayEnd) => {
        console.log(reason, monthStart, dayStart, monthEnd, dayEnd);
        if ((monthStart + dayStart) === (monthEnd + dayEnd)) {
            monthEnd = null;
            dayEnd = null;
        };
        console.log(reason, monthStart, dayStart, monthEnd, dayEnd)
        const data = {
            reason: reason,
            monthStart: monthStart,
            dayStart: dayStart,
            monthEnd: monthEnd,
            dayEnd: dayEnd
        }
        
        fetch('/api/timeoffrequest', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
    }

    render() {
        return(
            <div>
                <EmployeeApp shifts={this.state.shifts} fetchDate={this.fetchDate} currentDate={this.state.currentDay} fetchRequestTimeOff={this.fetchRequestTimeOff} availabilities={this.state.availabilities}/>
            </div>
        )
    }
}