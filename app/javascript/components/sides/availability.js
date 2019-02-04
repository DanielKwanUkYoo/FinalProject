import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class Availability extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: true
        }
    }

    render() {
        return (
            <div>
                <SideNav expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({ expanded: !this.state.expanded });
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav>
                        <NavItem eventKey="add-shift">
                            <NavIcon>
                                <i className="fas fa-arrow-alt-circle-left"></i>
                            </NavIcon>
                            <NavText onClick={() => this.props.back()}>
                                Back
                        </NavText>
                        </NavItem>


                        <h1>Availability</h1>
                        <form onSubmit={this.handleSubmit}>
                            Monday:
    
                            Start
                    <select name="monStart" value={this.state.monStart} onChange={(event) => this.setState({ monStart: event.target.value })}>
                                <option value="mon1:00 AM">1:00 AM</option>
                                <option value="mon2:00 AM"> 2:00 AM</option>
                                <option value="mon3:00 AM"> 3:00 AM</option>
                                <option value="mon4:00 AM"> 4:00 AM</option>
                                <option value="mon5:00 AM"> 5:00 AM</option>
                                <option value="mon6:00 AM"> 6:00 AM</option>
                                <option value="mon7:00 AM"> 7:00 AM</option>
                                <option value="mon8:00 AM"> 8:00 AM</option>
                                <option value="mon9:00 AM"> 9:00 AM</option>
                                <option value="mon10:00 AM"> 10:00 AM</option>
                                <option value="mon11:00 AM"> 11:00 AM</option>
                                <option value="mon12:00 PM"> 12:00 PM</option>
                                <option value="mon1:00 PM"> 1:00 PM</option>
                                <option value="mon2:00 PM"> 2:00 PM</option>
                                <option value="mon3:00 PM"> 3:00 PM</option>
                                <option value="mon4:00 PM"> 4:00 PM</option>
                                <option value="mon5:00 PM"> 5:00 PM</option>
                                <option value="mon6:00 PM"> 6:00 PM</option>
                                <option value="mon7:00 PM"> 7:00 PM</option>
                                <option value="mon8:00 PM"> 8:00 PM</option>
                                <option value="mon9:00 PM"> 9:00 PM</option>
                                <option value="mon10:00 PM"> 10:00 PM</option>
                                <option value="mon11:00 PM"> 11:00 PM</option>
                                <option value="mon12:00 AM"> 12:00 AM</option>
                            </select>

                            End
                    <select name="monEnd" value={this.state.monEnd} onChange={(event) => this.setState({ monEnd: event.target.value })}>
                                <option value="mon1:00 AM">1:00 AM</option>
                                <option value="mon2:00 AM"> 2:00 AM</option>
                                <option value="mon3:00 AM"> 3:00 AM</option>
                                <option value="mon4:00 AM"> 4:00 AM</option>
                                <option value="mon5:00 AM"> 5:00 AM</option>
                                <option value="mon6:00 AM"> 6:00 AM</option>
                                <option value="mon7:00 AM"> 7:00 AM</option>
                                <option value="mon8:00 AM"> 8:00 AM</option>
                                <option value="mon9:00 AM"> 9:00 AM</option>
                                <option value="mon10:00 AM"> 10:00 AM</option>
                                <option value="mon11:00 AM"> 11:00 AM</option>
                                <option value="mon12:00 PM"> 12:00 PM</option>
                                <option value="mon1:00 PM"> 1:00 PM</option>
                                <option value="mon2:00 PM"> 2:00 PM</option>
                                <option value="mon3:00 PM"> 3:00 PM</option>
                                <option value="mon4:00 PM"> 4:00 PM</option>
                                <option value="mon5:00 PM"> 5:00 PM</option>
                                <option value="mon6:00 PM"> 6:00 PM</option>
                                <option value="mon7:00 PM"> 7:00 PM</option>
                                <option value="mon8:00 PM"> 8:00 PM</option>
                                <option value="mon9:00 PM"> 9:00 PM</option>
                                <option value="mon10:00 PM"> 10:00 PM</option>
                                <option value="mon11:00 PM"> 11:00 PM</option>
                                <option value="mon12:00 AM"> 12:00 AM</option>
                            </select>

                            <br />
                            <br />

                            Tuesday:
    
                            Start
                    <select name="tueStart" value={this.state.tueStart} onChange={(event) => this.setState({ tueStart: event.target.value })}>
                                <option value="tue1:00 AM">1:00 AM</option>
                                <option value="tue2:00 AM"> 2:00 AM</option>
                                <option value="tue3:00 AM"> 3:00 AM</option>
                                <option value="tue4:00 AM"> 4:00 AM</option>
                                <option value="tue5:00 AM"> 5:00 AM</option>
                                <option value="tue6:00 AM"> 6:00 AM</option>
                                <option value="tue7:00 AM"> 7:00 AM</option>
                                <option value="tue8:00 AM"> 8:00 AM</option>
                                <option value="tue9:00 AM"> 9:00 AM</option>
                                <option value="tue10:00 AM"> 10:00 AM</option>
                                <option value="tue11:00 AM"> 11:00 AM</option>
                                <option value="tue12:00 PM"> 12:00 PM</option>
                                <option value="tue1:00 PM"> 1:00 PM</option>
                                <option value="tue2:00 PM"> 2:00 PM</option>
                                <option value="tue3:00 PM"> 3:00 PM</option>
                                <option value="tue4:00 PM"> 4:00 PM</option>
                                <option value="tue5:00 PM"> 5:00 PM</option>
                                <option value="tue6:00 PM"> 6:00 PM</option>
                                <option value="tue7:00 PM"> 7:00 PM</option>
                                <option value="tue8:00 PM"> 8:00 PM</option>
                                <option value="tue9:00 PM"> 9:00 PM</option>
                                <option value="tue10:00 PM"> 10:00 PM</option>
                                <option value="tue11:00 PM"> 11:00 PM</option>
                                <option value="tue12:00 AM"> 12:00 AM</option>
                            </select>

                            End
                    <select name="tueEnd" value={this.state.tueEnd} onChange={(event) => this.setState({ tueEnd: event.target.value })}>
                                <option value="tue1:00 AM">1:00 AM</option>
                                <option value="tue2:00 AM"> 2:00 AM</option>
                                <option value="tue3:00 AM"> 3:00 AM</option>
                                <option value="tue4:00 AM"> 4:00 AM</option>
                                <option value="tue5:00 AM"> 5:00 AM</option>
                                <option value="tue6:00 AM"> 6:00 AM</option>
                                <option value="tue7:00 AM"> 7:00 AM</option>
                                <option value="tue8:00 AM"> 8:00 AM</option>
                                <option value="tue9:00 AM"> 9:00 AM</option>
                                <option value="tue10:00 AM"> 10:00 AM</option>
                                <option value="tue11:00 AM"> 11:00 AM</option>
                                <option value="tue12:00 PM"> 12:00 PM</option>
                                <option value="tue1:00 PM"> 1:00 PM</option>
                                <option value="tue2:00 PM"> 2:00 PM</option>
                                <option value="tue3:00 PM"> 3:00 PM</option>
                                <option value="tue4:00 PM"> 4:00 PM</option>
                                <option value="tue5:00 PM"> 5:00 PM</option>
                                <option value="tue6:00 PM"> 6:00 PM</option>
                                <option value="tue7:00 PM"> 7:00 PM</option>
                                <option value="tue8:00 PM"> 8:00 PM</option>
                                <option value="tue9:00 PM"> 9:00 PM</option>
                                <option value="tue10:00 PM"> 10:00 PM</option>
                                <option value="tue11:00 PM"> 11:00 PM</option>
                                <option value="tue12:00 AM"> 12:00 AM</option>
                            </select>


                            <br />
                            <br />


                            Wednesday:
    
                            Start
                    <select name="wedStart" value={this.state.wedStart} onChange={(event) => this.setState({ wedStart: event.target.value })}>
                                <option value="wed1:00 AM">1:00 AM</option>
                                <option value="wed2:00 AM"> 2:00 AM</option>
                                <option value="wed3:00 AM"> 3:00 AM</option>
                                <option value="wed4:00 AM"> 4:00 AM</option>
                                <option value="wed5:00 AM"> 5:00 AM</option>
                                <option value="wed6:00 AM"> 6:00 AM</option>
                                <option value="wed7:00 AM"> 7:00 AM</option>
                                <option value="wed8:00 AM"> 8:00 AM</option>
                                <option value="wed9:00 AM"> 9:00 AM</option>
                                <option value="wed10:00 AM"> 10:00 AM</option>
                                <option value="wed11:00 AM"> 11:00 AM</option>
                                <option value="wed12:00 PM"> 12:00 PM</option>
                                <option value="wed1:00 PM"> 1:00 PM</option>
                                <option value="wed2:00 PM"> 2:00 PM</option>
                                <option value="wed3:00 PM"> 3:00 PM</option>
                                <option value="wed4:00 PM"> 4:00 PM</option>
                                <option value="wed5:00 PM"> 5:00 PM</option>
                                <option value="wed6:00 PM"> 6:00 PM</option>
                                <option value="wed7:00 PM"> 7:00 PM</option>
                                <option value="wed8:00 PM"> 8:00 PM</option>
                                <option value="wed9:00 PM"> 9:00 PM</option>
                                <option value="wed10:00 PM"> 10:00 PM</option>
                                <option value="wed11:00 PM"> 11:00 PM</option>
                                <option value="wed12:00 AM"> 12:00 AM</option>
                            </select>

                            End
                    <select name="wedEnd" value={this.state.wedEnd} onChange={(event) => this.setState({ wedEnd: event.target.value })}>
                                <option value="wed1:00 AM">1:00 AM</option>
                                <option value="wed2:00 AM"> 2:00 AM</option>
                                <option value="wed3:00 AM"> 3:00 AM</option>
                                <option value="wed4:00 AM"> 4:00 AM</option>
                                <option value="wed5:00 AM"> 5:00 AM</option>
                                <option value="wed6:00 AM"> 6:00 AM</option>
                                <option value="wed7:00 AM"> 7:00 AM</option>
                                <option value="wed8:00 AM"> 8:00 AM</option>
                                <option value="wed9:00 AM"> 9:00 AM</option>
                                <option value="wed10:00 AM"> 10:00 AM</option>
                                <option value="wed11:00 AM"> 11:00 AM</option>
                                <option value="wed12:00 PM"> 12:00 PM</option>
                                <option value="wed1:00 PM"> 1:00 PM</option>
                                <option value="wed2:00 PM"> 2:00 PM</option>
                                <option value="wed3:00 PM"> 3:00 PM</option>
                                <option value="wed4:00 PM"> 4:00 PM</option>
                                <option value="wed5:00 PM"> 5:00 PM</option>
                                <option value="wed6:00 PM"> 6:00 PM</option>
                                <option value="wed7:00 PM"> 7:00 PM</option>
                                <option value="wed8:00 PM"> 8:00 PM</option>
                                <option value="wed9:00 PM"> 9:00 PM</option>
                                <option value="wed10:00 PM"> 10:00 PM</option>
                                <option value="wed11:00 PM"> 11:00 PM</option>
                                <option value="wed12:00 AM"> 12:00 AM</option>
                            </select>

                            <br />
                            <br />

                            Thursday:
    
                            Start
                    <select name="thuStart" value={this.state.thuStart} onChange={(event) => this.setState({ thuStart: event.target.value })}>
                                <option value="thu1:00 AM">1:00 AM</option>
                                <option value="thu2:00 AM"> 2:00 AM</option>
                                <option value="thu3:00 AM"> 3:00 AM</option>
                                <option value="thu4:00 AM"> 4:00 AM</option>
                                <option value="thu5:00 AM"> 5:00 AM</option>
                                <option value="thu6:00 AM"> 6:00 AM</option>
                                <option value="thu7:00 AM"> 7:00 AM</option>
                                <option value="thu8:00 AM"> 8:00 AM</option>
                                <option value="thu9:00 AM"> 9:00 AM</option>
                                <option value="thu10:00 AM"> 10:00 AM</option>
                                <option value="thu11:00 AM"> 11:00 AM</option>
                                <option value="thu12:00 PM"> 12:00 PM</option>
                                <option value="thu1:00 PM"> 1:00 PM</option>
                                <option value="thu2:00 PM"> 2:00 PM</option>
                                <option value="thu3:00 PM"> 3:00 PM</option>
                                <option value="thu4:00 PM"> 4:00 PM</option>
                                <option value="thu5:00 PM"> 5:00 PM</option>
                                <option value="thu6:00 PM"> 6:00 PM</option>
                                <option value="thu7:00 PM"> 7:00 PM</option>
                                <option value="thu8:00 PM"> 8:00 PM</option>
                                <option value="thu9:00 PM"> 9:00 PM</option>
                                <option value="thu10:00 PM"> 10:00 PM</option>
                                <option value="thu11:00 PM"> 11:00 PM</option>
                                <option value="thu12:00 AM"> 12:00 AM</option>
                            </select>

                            End
                    <select name="thuEnd" value={this.state.thuEnd} onChange={(event) => this.setState({ thuEnd: event.target.value })}>
                                <option value="thu1:00 AM">1:00 AM</option>
                                <option value="thu2:00 AM"> 2:00 AM</option>
                                <option value="thu3:00 AM"> 3:00 AM</option>
                                <option value="thu4:00 AM"> 4:00 AM</option>
                                <option value="thu5:00 AM"> 5:00 AM</option>
                                <option value="thu6:00 AM"> 6:00 AM</option>
                                <option value="thu7:00 AM"> 7:00 AM</option>
                                <option value="thu8:00 AM"> 8:00 AM</option>
                                <option value="thu9:00 AM"> 9:00 AM</option>
                                <option value="thu10:00 AM"> 10:00 AM</option>
                                <option value="thu11:00 AM"> 11:00 AM</option>
                                <option value="thu12:00 PM"> 12:00 PM</option>
                                <option value="thu1:00 PM"> 1:00 PM</option>
                                <option value="thu2:00 PM"> 2:00 PM</option>
                                <option value="thu3:00 PM"> 3:00 PM</option>
                                <option value="thu4:00 PM"> 4:00 PM</option>
                                <option value="thu5:00 PM"> 5:00 PM</option>
                                <option value="thu6:00 PM"> 6:00 PM</option>
                                <option value="thu7:00 PM"> 7:00 PM</option>
                                <option value="thu8:00 PM"> 8:00 PM</option>
                                <option value="thu9:00 PM"> 9:00 PM</option>
                                <option value="thu10:00 PM"> 10:00 PM</option>
                                <option value="thu11:00 PM"> 11:00 PM</option>
                                <option value="thu12:00 AM"> 12:00 AM</option>
                            </select>

                            <br />
                            <br />

                            Friday:
    
                            Start
                    <select name="friStart" value={this.state.friStart} onChange={(event) => this.setState({ friStart: event.target.value })}>
                                <option value="fri1:00 AM">1:00 AM</option>
                                <option value="fri2:00 AM"> 2:00 AM</option>
                                <option value="fri3:00 AM"> 3:00 AM</option>
                                <option value="fri4:00 AM"> 4:00 AM</option>
                                <option value="fri5:00 AM"> 5:00 AM</option>
                                <option value="fri6:00 AM"> 6:00 AM</option>
                                <option value="fri7:00 AM"> 7:00 AM</option>
                                <option value="fri8:00 AM"> 8:00 AM</option>
                                <option value="fri9:00 AM"> 9:00 AM</option>
                                <option value="fri10:00 AM"> 10:00 AM</option>
                                <option value="fri11:00 AM"> 11:00 AM</option>
                                <option value="fri12:00 PM"> 12:00 PM</option>
                                <option value="fri1:00 PM"> 1:00 PM</option>
                                <option value="fri2:00 PM"> 2:00 PM</option>
                                <option value="fri3:00 PM"> 3:00 PM</option>
                                <option value="fri4:00 PM"> 4:00 PM</option>
                                <option value="fri5:00 PM"> 5:00 PM</option>
                                <option value="fri6:00 PM"> 6:00 PM</option>
                                <option value="fri7:00 PM"> 7:00 PM</option>
                                <option value="fri8:00 PM"> 8:00 PM</option>
                                <option value="fri9:00 PM"> 9:00 PM</option>
                                <option value="fri10:00 PM"> 10:00 PM</option>
                                <option value="fri11:00 PM"> 11:00 PM</option>
                                <option value="fri12:00 AM"> 12:00 AM</option>
                            </select>

                            End
                    <select name="friEnd" value={this.state.friEnd} onChange={(event) => this.setState({ friEnd: event.target.value })}>
                                <option value="fri1:00 AM">1:00 AM</option>
                                <option value="fri2:00 AM"> 2:00 AM</option>
                                <option value="fri3:00 AM"> 3:00 AM</option>
                                <option value="fri4:00 AM"> 4:00 AM</option>
                                <option value="fri5:00 AM"> 5:00 AM</option>
                                <option value="fri6:00 AM"> 6:00 AM</option>
                                <option value="fri7:00 AM"> 7:00 AM</option>
                                <option value="fri8:00 AM"> 8:00 AM</option>
                                <option value="fri9:00 AM"> 9:00 AM</option>
                                <option value="fri10:00 AM"> 10:00 AM</option>
                                <option value="fri11:00 AM"> 11:00 AM</option>
                                <option value="fri12:00 PM"> 12:00 PM</option>
                                <option value="fri1:00 PM"> 1:00 PM</option>
                                <option value="fri2:00 PM"> 2:00 PM</option>
                                <option value="fri3:00 PM"> 3:00 PM</option>
                                <option value="fri4:00 PM"> 4:00 PM</option>
                                <option value="fri5:00 PM"> 5:00 PM</option>
                                <option value="fri6:00 PM"> 6:00 PM</option>
                                <option value="fri7:00 PM"> 7:00 PM</option>
                                <option value="fri8:00 PM"> 8:00 PM</option>
                                <option value="fri9:00 PM"> 9:00 PM</option>
                                <option value="fri10:00 PM"> 10:00 PM</option>
                                <option value="fri11:00 PM"> 11:00 PM</option>
                                <option value="fri12:00 AM"> 12:00 AM</option>
                            </select>

                            <br />
                            <br />

                            Saturday:
    
                            Start
                    <select name="satStart" value={this.state.satStart} onChange={(event) => this.setState({ satStart: event.target.value })}>
                                <option value="sat1:00 AM">1:00 AM</option>
                                <option value="sat2:00 AM"> 2:00 AM</option>
                                <option value="sat3:00 AM"> 3:00 AM</option>
                                <option value="sat4:00 AM"> 4:00 AM</option>
                                <option value="sat5:00 AM"> 5:00 AM</option>
                                <option value="sat6:00 AM"> 6:00 AM</option>
                                <option value="sat7:00 AM"> 7:00 AM</option>
                                <option value="sat8:00 AM"> 8:00 AM</option>
                                <option value="sat9:00 AM"> 9:00 AM</option>
                                <option value="sat10:00 AM"> 10:00 AM</option>
                                <option value="sat11:00 AM"> 11:00 AM</option>
                                <option value="sat12:00 PM"> 12:00 PM</option>
                                <option value="sat1:00 PM"> 1:00 PM</option>
                                <option value="sat2:00 PM"> 2:00 PM</option>
                                <option value="sat3:00 PM"> 3:00 PM</option>
                                <option value="sat4:00 PM"> 4:00 PM</option>
                                <option value="sat5:00 PM"> 5:00 PM</option>
                                <option value="sat6:00 PM"> 6:00 PM</option>
                                <option value="sat7:00 PM"> 7:00 PM</option>
                                <option value="sat8:00 PM"> 8:00 PM</option>
                                <option value="sat9:00 PM"> 9:00 PM</option>
                                <option value="sat10:00 PM"> 10:00 PM</option>
                                <option value="sat11:00 PM"> 11:00 PM</option>
                                <option value="sat12:00 AM"> 12:00 AM</option>
                            </select>

                            End
                    <select name="satEnd" value={this.state.satEnd} onChange={(event) => this.setState({ satEnd: event.target.value })}>
                                <option value="sat1:00 AM">1:00 AM</option>
                                <option value="sat2:00 AM"> 2:00 AM</option>
                                <option value="sat3:00 AM"> 3:00 AM</option>
                                <option value="sat4:00 AM"> 4:00 AM</option>
                                <option value="sat5:00 AM"> 5:00 AM</option>
                                <option value="sat6:00 AM"> 6:00 AM</option>
                                <option value="sat7:00 AM"> 7:00 AM</option>
                                <option value="sat8:00 AM"> 8:00 AM</option>
                                <option value="sat9:00 AM"> 9:00 AM</option>
                                <option value="sat10:00 AM"> 10:00 AM</option>
                                <option value="sat11:00 AM"> 11:00 AM</option>
                                <option value="sat12:00 PM"> 12:00 PM</option>
                                <option value="sat1:00 PM"> 1:00 PM</option>
                                <option value="sat2:00 PM"> 2:00 PM</option>
                                <option value="sat3:00 PM"> 3:00 PM</option>
                                <option value="sat4:00 PM"> 4:00 PM</option>
                                <option value="sat5:00 PM"> 5:00 PM</option>
                                <option value="sat6:00 PM"> 6:00 PM</option>
                                <option value="sat7:00 PM"> 7:00 PM</option>
                                <option value="sat8:00 PM"> 8:00 PM</option>
                                <option value="sat9:00 PM"> 9:00 PM</option>
                                <option value="sat10:00 PM"> 10:00 PM</option>
                                <option value="sat11:00 PM"> 11:00 PM</option>
                                <option value="sat12:00 AM"> 12:00 AM</option>
                            </select>


                            <br />
                            <br />

                            Sunday:
    
                            Start
                    <select name="sunStart" value={this.state.sunStart} onChange={(event) => this.setState({ sunStart: event.target.value })}>
                                <option value="sun1:00 AM">1:00 AM</option>
                                <option value="sun2:00 AM"> 2:00 AM</option>
                                <option value="sun3:00 AM"> 3:00 AM</option>
                                <option value="sun4:00 AM"> 4:00 AM</option>
                                <option value="sun5:00 AM"> 5:00 AM</option>
                                <option value="sun6:00 AM"> 6:00 AM</option>
                                <option value="sun7:00 AM"> 7:00 AM</option>
                                <option value="sun8:00 AM"> 8:00 AM</option>
                                <option value="sun9:00 AM"> 9:00 AM</option>
                                <option value="sun10:00 AM"> 10:00 AM</option>
                                <option value="sun11:00 AM"> 11:00 AM</option>
                                <option value="sun12:00 PM"> 12:00 PM</option>
                                <option value="sun1:00 PM"> 1:00 PM</option>
                                <option value="sun2:00 PM"> 2:00 PM</option>
                                <option value="sun3:00 PM"> 3:00 PM</option>
                                <option value="sun4:00 PM"> 4:00 PM</option>
                                <option value="sun5:00 PM"> 5:00 PM</option>
                                <option value="sun6:00 PM"> 6:00 PM</option>
                                <option value="sun7:00 PM"> 7:00 PM</option>
                                <option value="sun8:00 PM"> 8:00 PM</option>
                                <option value="sun9:00 PM"> 9:00 PM</option>
                                <option value="sun10:00 PM"> 10:00 PM</option>
                                <option value="sun11:00 PM"> 11:00 PM</option>
                                <option value="sun12:00 AM"> 12:00 AM</option>
                            </select>

                            End
                    <select name="sunEnd" value={this.state.sunEnd} onChange={(event) => this.setState({ sunEnd: event.target.value })}>
                                <option value="sun1:00 AM">1:00 AM</option>
                                <option value="sun2:00 AM"> 2:00 AM</option>
                                <option value="sun3:00 AM"> 3:00 AM</option>
                                <option value="sun4:00 AM"> 4:00 AM</option>
                                <option value="sun5:00 AM"> 5:00 AM</option>
                                <option value="sun6:00 AM"> 6:00 AM</option>
                                <option value="sun7:00 AM"> 7:00 AM</option>
                                <option value="sun8:00 AM"> 8:00 AM</option>
                                <option value="sun9:00 AM"> 9:00 AM</option>
                                <option value="sun10:00 AM"> 10:00 AM</option>
                                <option value="sun11:00 AM"> 11:00 AM</option>
                                <option value="sun12:00 PM"> 12:00 PM</option>
                                <option value="sun1:00 PM"> 1:00 PM</option>
                                <option value="sun2:00 PM"> 2:00 PM</option>
                                <option value="sun3:00 PM"> 3:00 PM</option>
                                <option value="sun4:00 PM"> 4:00 PM</option>
                                <option value="sun5:00 PM"> 5:00 PM</option>
                                <option value="sun6:00 PM"> 6:00 PM</option>
                                <option value="sun7:00 PM"> 7:00 PM</option>
                                <option value="sun8:00 PM"> 8:00 PM</option>
                                <option value="sun9:00 PM"> 9:00 PM</option>
                                <option value="sun10:00 PM"> 10:00 PM</option>
                                <option value="sun11:00 PM"> 11:00 PM</option>
                                <option value="sun12:00 AM"> 12:00 AM</option>
                            </select>

                            <input className="edit_employee_submit_button" type="submit" value="Submit" />
                        </form>


                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}