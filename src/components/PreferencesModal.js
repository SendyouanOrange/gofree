import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

class PreferencesModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={<Button icon='checkmark' labelPosition='right' content="注册" />}
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