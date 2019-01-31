import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import EditEmployee from './editEmployee'
import Contact from './contact'

export default class SideEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            renderChild: false,
            expanded: true
        }

        this.editEmployee = this.editEmployee.bind(this);
        this.showContact = this.showContact.bind(this);

        this.back = this.back.bind(this);
    }

    editEmployee() {
        this.setState({
            renderChild: "edit"
        });
    }

    showContact() {
        this.setState({
            renderChild: "contact"
        });
    }

    back() {
        this.setState({
            renderChild: false
        });
    }

    render() {
        let shifts = this.props.shifts.map((e, index) => {
            if (e.employee_id === this.props.employee.id) {
                return (
                    <NavItem key={index}>
                        <NavIcon>

                        </NavIcon>
                        <NavText>
                            <li>{e.day} from {e.start_time} - {e.end_time}</li>
                        </NavText>
                    </NavItem>
                );
            }
        });

        const render = this.state.renderChild;

        if (render === "edit") {
            return (
                <EditEmployee back={this.back} employee={this.props.employee} />
            );
        }

        if (render === "contact") {
            return (
                <Contact back={this.back}  employee={this.props.employee} />
            );
        }

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
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText onClick={() => this.props.back()}>
                                Back
                            </NavText>
                        </NavItem>

                        <div className="container">
                            <div className="row profile">
                                <div className="col-md-3">
                                    <div className="profile-sidebar">

                                        <div className="profile-userpic">
                                            {/* <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" className="img-responsive" alt=""> */}
                                        </div>

                                        <div className="profile-usertitle">
                                            <div className="profile-usertitle-name">
                                                {this.props.employee.first_name} {this.props.employee.last_name}
                                            </div>
                                            <div className="profile-usertitle-job">
                                                {this.props.employee.occupation}
                                            </div>
                                        </div>

                                        <div className="profile-userbuttons">
                                            <button type="button" className="btn btn-success btn-sm" onClick={this.editEmployee}>Edit</button>
                                            <button type="button" className="btn btn-success btn-sm" onClick={this.showContact}>Contact</button>
                                        </div>

                                        <div className="profile-shifts">
                                            <div className="profile-shift-title">
                                                Scheduled Shifts
                                            </div>
                                            <div className="list-of-shifts">
                                                {shifts}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}