import React, { Component } from 'react'
import { Button, Menu,Container} from 'semantic-ui-react'


export default class FixedMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: this.props.activeMenu
        };
    }
    
    handleItemClick = (e, { index }) => this.setState({ activeMenu: index })

    render() {
      const {activeMenu} = this.state;
        return (
            <Menu fixed='top' size='large'>
              <Container>
                <Menu.Item as='a' href="#seg_0" active={activeMenu === 0} index={0} onClick={this.handleItemClick}>旅游定制</Menu.Item>
                <Menu.Item as='a' href="#seg_1" active={activeMenu === 1} index={1} onClick={this.handleItemClick}>推荐城市</Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item className='item'>
                    <Button as='a'>登录</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button as='a' primary>注册</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>
        )
    }
}