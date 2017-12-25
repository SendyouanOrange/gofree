import React, { Component } from 'react'
import { Button,Modal,Embed,Form} from 'semantic-ui-react'

export default class LoginModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen,
      username: '',
      password: '',
      usernameValid: false,
      passwordValid: false
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.props.closeLoginModal();
    this.setState({ modalOpen: false })
  }

  loginHandle = () => {
    const {username,password} = this.state;
    if(username === '' || password === ''){
      console.log("ssss");
      console.log(password === '');
        this.setState({
          usernameValid:username === '',
          passwordValid:password === ''
        });
    }else {
      this.props.loginHandle(username,password);
    }
  }

  render() {
    const {modalOpen,username,password,usernameValid,passwordValid} = this.state;
    return (
      <Modal
        open={modalOpen}
        size='tiny'
      >
          <Modal.Header>
            登录
          </Modal.Header>
          <Modal.Content>
              <Form>
                <Form.Field required>
                  <label>用户名</label>
                  <Form.Input placeholder='请输入用户名' value={username} onChange={(e) => this.setState({username:e.target.value})} error={usernameValid}/>
                </Form.Field>
                <Form.Field required>
                  <label>密码</label>
                  <Form.Input placeholder='请输入密码' type='password' value={password} onChange={(e) => this.setState({password:e.target.value})} error={passwordValid}/>
                </Form.Field>
              </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.handleClose}>
              取消
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="登录" onClick={this.loginHandle} />
          </Modal.Actions>
      </Modal>
    )
  }
}