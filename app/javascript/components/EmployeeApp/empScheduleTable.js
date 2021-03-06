import React from 'react'
import dateFns from 'date-fns'
import EditShift from './empScheduleEditShift'


export default class ScheduleTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            employeeShifts: [],
            showEdit: false,
            shiftEditId: '',
            empEditId: '',
            mounted: false
        }
    }

    componentDidMount() {
        this.fetchData();
        this.interval = setInterval(() => this.refresh(), 300);
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
    }

    fetchData() {
        fetch('/api/employeeshifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employeeShifts: data }) });
    }

    refresh() {
        this.fetchData();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    // deleteShift() {
    //     const target = event.target.parentElement;
    //     const shiftId = target.getAttribute('shift-key');
    //     fetch(`/api/shifts`, {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(shiftId)
    //     });
    // };


    // showEdit = () => {
    //     this.setState({
    //         showEdit: !this.state.showEdit
    //     })
    // }

    shiftData = () => {
        const target = event.target.parentElement;
        const shiftId = target.getAttribute('shift-key');
        const employeeId = target.getAttribute('empid-key');
        this.setState({
            shiftEditId: shiftId,
            empEditId: employeeId
        })
    }

    // editShift = (startTime, endTime, note, shiftData, empData) => {
    //     // const editStart = startTime;
    //     // const editEnd = endTime;
    //     // const editNote = note;
    //     const duration = endTime - startTime;


    //     fetch('/api/shifts', {
    //         method: 'PUT',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             employeeId: empData,
    //             shiftId: shiftData,
    //             start: startTime,
    //             end: endTime,
    //             note: note,
    //             duration: duration
    //         })
    //     });

    // };

    cancel = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }


    render() {
        const currentDay = this.props.currentDay;
        const shiftData = this.shiftData;
        const showEdit = this.showEdit;
        const editShift = this.editShift
        const deleteShift = this.deleteShift;
        const cancel = this.cancel;
        const data = this.state.employeeShifts;
        const currentDate = dateFns.format(currentDay, 'dddd MMMM Do');
        const currentDateNum = dateFns.format(currentDay);
        const currentDateDay = dateFns.format(currentDay, 'dddd');
        const employeeId = [];
        const shiftId = [];
        const shiftInfo = [];
        const employeeNames = [];

        data.forEach(function(employee){
            employee.shifts.forEach(function(shift){
                if(shift.day === currentDate) {
                    employeeId.push(shift.employee_id);
                    shiftId.push(shift.id);
                    shiftInfo.push({start: (shift.start_time - 9) * 7.66, length: shift.duration * 7.69, note: shift.note})
                }
            });
        });
        employeeId.forEach(function(employeeId){
            data.forEach(function(employee){
                if (employee.id === employeeId) {
                    employeeNames.push(employee.first_name + ` `+ employee.last_name)
                }
            })
        })

        function checkLengthExist() {
            return shiftInfo[0] ? `${shiftInfo[0].length}%` : 0;
        }
        function checkStartExist() {
            return shiftInfo[0] ? `${shiftInfo[0].start}%` : 0;
        }
        function checkNoteExist() {
            return shiftInfo[0] ? shiftInfo[0].note : null;
        }
        function addDeleteButton() {
            return shiftInfo[0] ? (<button onClick={() => {deleteShift()}} className="delete-shift">delete</button>) : null;
        }
        function addEditButton() {
            return shiftInfo[0] ? (<button onClick={() => {showEdit(); shiftData()}} className="edit-shift">edit</button>) : null;
        }
        function findDayforMon(currentDateDay) {
            let position = 0;
            const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            week.forEach((day,i) => {if (currentDateDay == day) position = i});
            return position;
        }

        const firstEmployee = employeeNames[0];
        const listOfEmployees = employeeNames.slice(1).map(function(name, i) {
            return (
                <tr key={i + 2}>
                    <td key={i + 2} colSpan="13">
                        <span
                        key={i + 2}
                        shift-key={shiftId[i + 1]}
                        empid-key={employeeId[i + 1]}
                        style={{
                        display: 'block',
                        width:`${shiftInfo[i + 1].length}%`,
                        marginLeft: `${shiftInfo[i + 1].start}%`,
                        wordWrap: "break-word"}}
                        >
                        {name} <br/><hr/>
                        {shiftInfo[i + 1].note}
                        </span>
                    </td>
                </tr>
            )
        });
        const dateFormatForWeek = dateFns.format(currentDay, 'YYYY, M, D');
        const monForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay));
        const tuesForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 1);
        const wedForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 2);
        const thursForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 3);
        const friForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 4);
        const satForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 5);
        const sunForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 6)

        function findWeeklyMon(monForWeeklyView) {
            const monDate = dateFns.format(monForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
            if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<p>{info}</p>)
            })
        };

        function findWeeklyTues(tuesForWeeklyView) {
            const monDate = dateFns.format(tuesForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
            if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<p>{info}</p>)
            })
        };
        function findWeeklyWed(wedForWeeklyView) {
            const monDate = dateFns.format(wedForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
            if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<p>{info}</p>)
            })
        };
        function findWeeklyThurs(ThursForWeeklyView) {
            const monDate = dateFns.format(ThursForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
            if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<p>{info}</p>)
            })
        };
        function findWeeklyFri(FriForWeeklyView) {
            const monDate = dateFns.format(FriForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
            if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<p>{info}</p>)
            })
        };
        function findWeeklySat(SatForWeeklyView) {
            const monDate = dateFns.format(SatForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
            if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<p>{info}</p>)
            })
        };
        function findWeeklySun(SunForWeeklyView) {
            const monDate = dateFns.format(SunForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
            if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<p>{info}</p>)
            })
        };
        return(
            <div>
                <div className={`schedule-platform${this.state.mounted ? " enter" : ""}`}>
                <div className="schedule-container">
                    <table className="schedule-weekly-table">
                         <thead>
                            <tr className="weekly-time">
                                <th>9AM</th>
                                <th>10AM</th>
                                <th>11AM</th>
                                <th>12PM</th>
                                <th>1PM</th>
                                <th>2PM</th>
                                <th>3PM</th>
                                <th>4PM</th>
                                <th>5PM</th>
                                <th>6PM</th>
                                <th>7PM</th>
                                <th>8PM</th>
                                <th>9PM</th>
                            </tr>
                        </thead>
                        <tr>
                            <td colSpan="13">
                            {(shiftId.length !== 0) ?
                                <span
                                key={1}
                                shift-key={shiftId[0]}
                                empid-key={employeeId[0]}
                                style={{
                                display: 'block',
                                width: checkLengthExist(), marginLeft: checkStartExist(),}}
                                >
                                {firstEmployee} <br/><hr/>
                                {checkNoteExist()}
                                </span>
                            : <h4 className="nothing-scheduled">Nothing scheduled</h4>
                            }
                            </td>
                        </tr>
                        {listOfEmployees}
                    </table>
                    {this.state.showEdit ? <EditShift cancel={cancel} editShift={editShift} shiftData={this.state.shiftEditId} empData={this.state.empEditId}/> : null}
                </div>
                </div>
                <div className={`weekly-view-container${this.state.mounted ? " enter" : ""}`}>

                    <table className="weekly-view">
                        <tr>
                            <th>Monday {dateFns.format(monForWeeklyView, 'Do')}</th>
                            <th>Tuesday {dateFns.format(tuesForWeeklyView, 'Do')}</th>
                            <th>Wednesday {dateFns.format(wedForWeeklyView, 'Do')}</th>
                            <th>Thursday  {dateFns.format(thursForWeeklyView, 'Do')}</th>
                            <th>Friday {dateFns.format(friForWeeklyView, 'Do')}</th>
                            <th>Saturday {dateFns.format(satForWeeklyView, 'Do')}</th>
                            <th>Sunday {dateFns.format(sunForWeeklyView, 'Do')}</th>
                        </tr>
                        <tr>
                            <td>{findWeeklyMon(monForWeeklyView)}</td>
                            <td>{findWeeklyTues(tuesForWeeklyView)}</td>
                            <td>{findWeeklyWed(wedForWeeklyView)}</td>
                            <td>{findWeeklyThurs(thursForWeeklyView)}</td>
                            <td>{findWeeklyFri(friForWeeklyView)}</td>
                            <td>{findWeeklySat(satForWeeklyView)}</td>
                            <td>{findWeeklySun(sunForWeeklyView)}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}