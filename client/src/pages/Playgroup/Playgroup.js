import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, MenuItem, Panel, Nav, NavItem, NavDropdown, } from 'react-bootstrap';
import { PlaygroupChat, PlaygroupSearch, PlaygroupCreate } from '../../components/PlayGroups';

import './Playgroup.css';

class Playgroup extends Component {

	state = {
		display: 'search',
		group: null,
	}

	handleNavSelect = key => {
		if (key === 'search' || key === 'new') {
			this.setState({display: key, group: null});
		} else {
			this.setState({display: 'group', group: key});
		}
	};

  render() {
		if(!this.props.user) {
      return (<Redirect to="/" />)
    }
    return (
      <Grid style={{paddingTop: this.props.navbarHeight + 'px',}}>
				<Row>
					<Col md={12}>
						
						<Panel id='main-panel' bsStyle='default'>
							<Panel.Heading style={{padding: '10px 0px 0px',}}>
								<Nav bsStyle="tabs" activeKey={this.state.display} onSelect={this.handleNavSelect} style={{padding: '0px 15px'}}>
									<NavDropdown eventKey="group" title="My Playgroups" id="playgroupSelect">
										<MenuItem active={this.state.group === "Playgroup 1"} eventKey="Playgroup 1">Playgroup 1</MenuItem>
										<MenuItem active={this.state.group === "Playgroup 2"} eventKey="Playgroup 2">Playgroup 2</MenuItem>
										<MenuItem active={this.state.group === "Playgroup 3"} eventKey="Playgroup 3">Playgroup 3</MenuItem>
									</NavDropdown>
									<NavItem eventKey="search">
										Find Playgroups
									</NavItem>
									<NavItem eventKey="new">
										New Playgroup
									</NavItem>
								</Nav>
							</Panel.Heading>

							{this.state.display === 'group' && <PlaygroupChat user={this.props.user} group={this.state.group} />}
							{this.state.display === 'search' && <PlaygroupSearch user={this.props.user} />}
							{this.state.display === 'new' && <PlaygroupCreate user={this.props.user} />}
						</Panel>
						{JSON.stringify(this.props.user)}
					</Col>
				</Row>
      </Grid>
    );
  }

}

export default Playgroup;
