import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
        
        <form class="row g-3"
                action="."
                onSubmit={e => {
                e.preventDefault()
                this.props.onSubmitMessage(this.state.message)
                this.setState({ message: '' })
                }}
        >
                <div class="col-auto">
                    <input type="text" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} placeholder={'Enter message...'}></input>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3" value={'Send'}>Send</button>
                </div>
        </form>
    )
  }
}

export default ChatInput;