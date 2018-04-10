import React, { Component } from 'react'
import { Grid, Dimmer, Loader } from 'semantic-ui-react'


export default class Loading extends Component {
	
	render() {
		return (
			<Grid.Row className="line_grid_row line_loading_div">
				<Grid.Column width={16}>
					<Dimmer active inverted className="line_loading">
						<Loader size='big'><span style={{color:'#99A3A4'}}>{this.props.tip}</span></Loader>
					</Dimmer>
				</Grid.Column>
			</Grid.Row>
		)
	}
}