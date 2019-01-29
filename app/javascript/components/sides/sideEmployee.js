import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class SideEmployee extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        let shifts = this.props.shifts.map((e, index) => {
            if (e.employee_id === this.props.employee.id) {
                return (
                    <NavItem key={index}>
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <li> {e.day} at {e.start_time} - {e.end_time} </li>
                        </NavText>
                    </NavItem>
                );
            }
        });

        return (
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
                                    <button type="button" className="btn btn-success btn-sm">Edit</button>
                                    <button type="button" className="btn btn-danger btn-sm">Contact</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <NavItem>
                    <NavText>
                        Scheduled Shifts
                    </NavText>
                </NavItem>
                {shifts}
            </SideNav.Nav>
        )
    }
}
