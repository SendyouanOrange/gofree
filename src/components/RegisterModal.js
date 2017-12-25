import React, { Component } from 'react'
import { Button,Modal,Embed,Form,Message} from 'semantic-ui-react'

export default class RegisterModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen,
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      verifyCode: '',
      usernameValid: false,
      passwordValid: false,
      passwordConfirmValid: false,
      phoneValid: false,
      verifyCodeValid: false,
      passwordWarning:false
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.props.closeRegisterModal();
    this.setState({ modalOpen: false })
  }

  registerHandle = () => {
    const {username,password,confirmPassword,phone,verifyCode} = this.state;
    if(username === '' || password === ''|| confirmPassword === '' || phone === '' || verifyCode === ''){
        this.setState({
          usernameValid:username === '',
          passwordValid:password === '',
          passwordConfirmValid: confirmPassword === '',
          phoneValid: phone === '',
          verifyCodeValid: verifyCode === ''
        });
    }else if (password != confirmPassword){
      this.setState({
        passwordWarning:true
      });
    }else {
      this.props.registerHandle(username,password,phone,verifyCode);
    }
  }

  render() {
    const {modalOpen,username,password,confirmPassword,phone,verifyCode,usernameValid,passwordValid,passwordConfirmValid,phoneValid,verifyCodeValid,passwordWarning} = this.state;
    return (
      <Modal
        open={modalOpen}
        size='tiny'
      >
          <Modal.Header>
            注册
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
                <Form.Field required>
                  <label>确认密码</label>
                  <Form.Input placeholder='请重新输入密码' type='password' value={confirmPassword} onChange={(e) => this.setState({confirmPassword:e.target.value})} error={passwordConfirmValid}/>
                  {passwordWarning ?<p style={{'color':'red','fontSize':'8px'}}>请保持输入的密码一致</p> : null}
                </Form.Field>
                <Form.Field required>
                  <label>手机号</label>
                  <Form.Input placeholder='请输入手机号' type='number' value={phone} onChange={(e) => this.setState({phone:e.target.value})} error={phoneValid}/>
                </Form.Field>
                <Form.Field required>
                  <label>验证码</label>
                  <Form.Input placeholder='请输入验证码' value={verifyCode} onChange={(e) => this.setState({verifyCode:e.target.value})} error={verifyCodeValid}/>
                </Form.Field>
              </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.handleClose}>
              取消
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="注册" onClick={this.registerHandle} />
          </Modal.Actions>
      </Modal>
    )
  }
}