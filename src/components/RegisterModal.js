import React, { Component } from 'react'
import { Button,Modal,Embed,Form,Message} from 'semantic-ui-react'
import axios from '../util/axios.js';
import gofree_mock from '../mock/gofree_mock.js';

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
      passwordWarning:false,
      phoneWarning: false,
      verifyNote: '获取验证码',
      verifyBtn: true
    }

    // gofree_mock.restore();
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.props.closeRegisterModal();
    this.setState({ modalOpen: false })
  }

  clearWarning = () => {
    const {username,password,confirmPassword,phone,verifyCode} = this.state;
    this.setState({
      usernameValid:username === '',
      passwordValid:password === '',
      passwordConfirmValid: confirmPassword === '',
      phoneValid: phone === '',
      verifyCodeValid: verifyCode === ''
    });
  }

  handleVerifyBtn =() => {
    const {phone} = this.state;
    this.countDown(60);
    axios.get('/account/veri_sms/api',{params: { phone: phone}})
    .then(function(res){
      console.log(res)
    });
  }

  countDown(time) {
    if (time == 0) {  
        this.setState({
          verifyBtn: false,
          verifyNote: '获取验证码'
        })  
    } else {  
        const $this = this;
        this.setState({
          verifyBtn: true,
          verifyNote: time-- + "s"
        });
        setTimeout(function() {  
            $this.countDown(time)
        },1000);
    }  
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
    const {phoneWarning,verifyNote,verifyBtn,modalOpen,username,password,confirmPassword,phone,verifyCode,usernameValid,passwordValid,passwordConfirmValid,phoneValid,verifyCodeValid,passwordWarning} = this.state;
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
                <Form.Field>
                  <label>用户名</label>
                  <Form.Input placeholder='请输入用户名' value={username} onChange={(e) => {
                    this.setState({username:e.target.value});
                    this.clearWarning();
                  }} error={usernameValid}/>
                </Form.Field>
                <Form.Field required>
                  <label>密码</label>
                  <Form.Input placeholder='请输入密码' type='password' value={password} onChange={(e) => {
                    this.setState({password:e.target.value});
                    this.clearWarning();
                  }} error={passwordValid}/>
                </Form.Field>
                <Form.Field required>
                  <label>确认密码</label>
                  <Form.Input placeholder='请重新输入密码' type='password' value={confirmPassword} onBlur={() => this.setState({passwordWarning: password !== confirmPassword })} onChange={(e) =>{
                     this.setState({confirmPassword:e.target.value});
                     this.clearWarning();
                  }} error={passwordConfirmValid}/>
                  {this.state.passwordWarning ?<p style={{'color':'red','fontSize':'8px'}}>请保持输入的密码一致</p> : <p></p>}
                </Form.Field>
                <Form.Field required>
                  <label>手机号</label>
                  <Form.Input placeholder='请输入手机号' type='number' value={phone} onChange={(e) => {
                    this.setState({phone:e.target.value});
                    this.clearWarning();
                  }} error={phoneValid} onBlur={() => {
                    const reg = /^1[0-9]{10}$/;
                    this.setState({phoneWarning: !reg.test(phone),verifyBtn:!reg.test(phone) });
                  }}/>
                  {this.state.phoneWarning ?<p style={{'color':'red','fontSize':'8px'}}>请输入有效手机号</p> : <p></p>}
                </Form.Field>
                <Form.Field required>
                  <label>验证码</label>
                  <Form.Group widths='equal'>
                    <Form.Input placeholder='请输入验证码' value={verifyCode} onChange={(e) => {
                      this.setState({verifyCode:e.target.value});
                      this.clearWarning();
                    }} error={verifyCodeValid}/>
                    <Button color='green' style={{width: '200px'}} disabled={verifyBtn} onClick={this.handleVerifyBtn}>{verifyNote}</Button>
                  </Form.Group>                  
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