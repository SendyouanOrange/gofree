import React, { Component } from 'react'
import { Button, Container, Header, Menu, Segment, Visibility,Grid,Card,Image,Form} from 'semantic-ui-react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {withRouter} from 'react-router-dom'
import axios from '../util/axios.js';
import gofree_mock from '../mock/gofree_mock.js';

import FixedMenu from '../components/FixedMenu.js';
import Footer from '../components/Footer.js';
import AutoSuggest from '../components/AutoSuggest.js';
import VideoModal from '../components/VideoModal.js';
import LoginModal from '../components/LoginModal.js';
import RegisterModal from '../components/RegisterModal.js';

import {citys} from '../data/city.js';
import {MONTHS,WEEKDAYS_LONG,WEEKDAYS_SHORT} from '../data/date.js';
import {recVideos} from '../data/recVideo.js';


class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          activeMenu: 0,
          visible:false,
          formType:0,
          formStartDay: undefined,
          formEndDay: undefined,
          formDes: '',
          videoModalOpen: false,
          videoUrl: '',
          loginModalOpen:false,
          registerModalOpen:false
        };

        if(window.$wsCache.get('username')) {
          this.state ={isLogin:true};
        }else {
          this.state ={isLogin:false};
        }

        // gofree_mock.restore();
    }

    handleItemClick = (e, { index }) => this.setState({ activeMenu: index })

    handleTypeChange = (e, { value }) => this.setState({ formType:value })

    handleFormSubmit = () => {
      const {formType,formStartDay,formEndDay,formDes} = this.state;
      let path = {
          pathname: '/lines',
          data:{ type: formType,start:formStartDay,end:formEndDay,des:formDes }
      };
      this.props.history.push(path);
    }

    handleDesChange = (value) => this.setState({formDes:value})

    closeVideoModal = () => this.setState({videoModalOpen:false})

    closeLoginModal = () => this.setState({loginModalOpen:false})

    closeRegisterModal = () => this.setState({registerModalOpen:false})

    loginHandle = (username,password) => {
      const $this = this;
      axios({
        method: 'post',
        url: '/account/login/api',
        data: {
          username:username,
          password:password
        }
      }).then(function(res){
        if(res != null){
            window.$wsCache.set("username", username, {
                exp: 60 * 60
            });
            $this.setState({
              loginModalOpen: false,
              isLogin: true
            })
        }
      })
    }

    registerHandle(username,password,phone,verifyCode){
      const $this = this;
      axios({
        method: 'post',
        url:'/account/register/api',
        data: {
          username: username,
          password: password,
          confirm: password,
          phone: phone,
          veri_code: verifyCode,
          email:''
        }
      }).then(function(res){
        console.log(res);
      })
    }

    handleLoginOut = () => {
      const $this = this;
      axios.get('/account/logout').then(function(res){
        window.$wsCache.delete('username');
        $this.setState({isLogin:false});
        $this.props.history.push('/');
      })
    }

    handleLogin = () => this.setState({ loginModalOpen:true})

    handleRegister = () => this.setState({registerModalOpen:true})
     
    render() {
        const {isLogin,visible,activeMenu,formType,videoModalOpen,videoUrl,loginModalOpen,registerModalOpen} = this.state
        

        return (
            <div>
        
        { visible ? <FixedMenu activeMenu={activeMenu} isLogin={this.state.isLogin} isInverted={false} handleLogin={this.handleLogin} handleRegister={this.handleRegister} handleLoginOut={this.handleLoginOut}/> : null }

        <Visibility
            onBottomPassed={()=>this.setState({
              visible:true,
              activeMenu:1
            })}
            onBottomVisible={()=>this.setState({
              visible:false,
              activeMenu:0
            })}
            once={false}
            >
          <Segment
            inverted
            textAlign='center'
            style={{
                minHeight: 650,
                padding: '1em 0em'
            }}
            vertical
            id="seg_0"
            className="welcome_div"
            >
            <Container>
              <FixedMenu activeMenu={activeMenu} isLogin={this.state.isLogin} isInverted={true} handleLogin={this.handleLogin} handleRegister={this.handleRegister} handleLoginOut={this.handleLoginOut}/>
            </Container>

            <Container className="slogan_div" textAlign='left'>
              <Header
            as='h1'
            content='GoFree'
            inverted
            style={{
                fontSize: '4em',
                fontWeight: 'normal',
                margin: '3em 0 0 2.5em'
            }}
            />
              <Header
            as='h2'
            content='slogan 私人旅游定制首选'
            inverted
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginLeft:'6em'
            }}
            />
            </Container>
            <Container textAlign='left'>
                <Form  className="slogan_form">
                  <Form.Group inline className="slogan_form_row">
                      <label>旅行方式</label>
                      <Form.Radio label='经济舒适' value={0} checked={formType === 0} onChange={this.handleTypeChange} />
                      <Form.Radio label='民俗特色' value={1} checked={formType === 1} onChange={this.handleTypeChange} />
                      <Form.Radio label='高端精品' value={2} checked={formType === 2} onChange={this.handleTypeChange} />
                  </Form.Group>
                  <Form.Field inline style={{width:'360px'}} className="slogan_form_row">
                      <label>目的地</label>
                      <AutoSuggest suggestions={citys} getDestination={this.handleDesChange}/>
                  </Form.Field>
                  <Form.Group inline className="slogan_form_row">
                      <Form.Field>
                        <label>出发时间</label>
                        <DayPickerInput onDayChange={(day)=>this.setState({ formStartDay: day.toLocaleDateString() })} 
                        dayPickerProps={{
                            months: MONTHS,
                            weekdaysLong: WEEKDAYS_LONG,
                            weekdaysShort:WEEKDAYS_SHORT
                        }}
                        placeholder="出发时间"/>
                      </Form.Field>
                      <Form.Field>
                        <label>返程时间</label>
                        <DayPickerInput onDayChange={(day)=>this.setState({ formEndDay: day.toLocaleDateString() })} 
                        dayPickerProps={{
                            months: MONTHS,
                            weekdaysLong: WEEKDAYS_LONG,
                            weekdaysShort:WEEKDAYS_SHORT
                        }}
                        placeholder="返程时间"/>
                      </Form.Field>
                  </Form.Group>
                  <Button type='button' color='green' circular={true} fluid={true} onClick={this.handleFormSubmit}>开始定制</Button>
                </Form>
            </Container>
          </Segment>
        </Visibility>

        
        <div style={{height:'1em'}}></div>
        

        <Visibility
            onBottomPassed={()=>this.setState({
              visible:false,
              activeMenu:0
            })}
            onBottomVisible={()=>this.setState({
              visible:true,
              activeMenu:1
            })}
            once={false}
            >
        <Segment style={{
                padding: '5em 0em 5em 0'
            }} vertical id="seg_1">
          <Container>
          <Header as='h1' style={{fontSize: '3em',fontWeight: 'normal'}} textAlign='center'>
              推荐城市
              <Header.Subheader style={{fontSize: '0.5em',fontWeight: '150',margin:'1.5em 0'}}>
                人生就像一场旅行,不必在乎目的地,在乎的,是沿途的风景,以及看风景的心情。
              </Header.Subheader>
          </Header>        
            <Grid>
              <Grid.Row columns={3}>
                {recVideos.map((item,idx) => (
                    <Grid.Column key={idx} className="rec_content" onClick={() => 
                      this.setState({
                        videoModalOpen:true,
                        videoUrl: item.videoUrl
                    })}>
                      <Card centered fluid={true}>
                          <Image src={item.imgUrl}/>
                          <Card.Content>
                            <Card.Header textAlign='center'>
                              {item.name}
                            </Card.Header>
                            <Card.Description textAlign='center'>
                              {item.description}
                            </Card.Description>
                          </Card.Content>
                      </Card>
                    </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        </Visibility>
        {/**视频模态框**/}
        {videoModalOpen ? <VideoModal modalOpen={true} videoUrl={videoUrl} closeVideoModal={this.closeVideoModal} />:null}
        {/**登录模态框**/}
        {loginModalOpen ? <LoginModal modalOpen={true} closeLoginModal={this.closeLoginModal} loginHandle={this.loginHandle} /> :null}
        {/**注册模态框**/}
        {registerModalOpen ? <RegisterModal modalOpen={true} closeRegisterModal={this.closeRegisterModal} registerHandle={this.registerHandle} /> :null}
        <Footer/>
      </div>
        )
    }
}

export default withRouter(Home);