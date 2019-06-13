import React from 'react';
import { Row, Col ,Drawer} from 'antd'

class TabItem extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = { visible: false, placement: 'left' };

  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render() {

    return (

      <div>
        <Drawer
          title="Basic Drawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.props.tabOpen}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>

    )
  }


}

export default TabItem;
