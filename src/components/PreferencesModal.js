import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import axios from '../util/axios.js';
import gofree_mock from '../mock/gofree_mock.js';

class PreferencesModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen,
      items:[],
      ids:[]
    }
  }

  componentDidMount() {
    axios.get('/get-personal-rec-list').then(function(res){
      console.log(res);
    })
  }

  close = () => {
    const {ids} = this.state;
    this.props.finalRegisterHandle(ids);
  }

  render() {
    const { modalOpen } = this.state

    return (
      <Modal
        dimmer={false}
        open={modalOpen}
        onClose={this.close}
        size='small'
      >
        <Modal.Header>选择你喜欢的目的地</Modal.Header>
        <Modal.Content>
          <p>做一个直接的外貌党，哪些图片是你喜欢的风格,<span style={{color:'green'}}>不求你专一,可以选多个哦</span></p>

        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            跳过
          </Button>
          <Button icon='check' content='选好了' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}


export default PreferencesModal;