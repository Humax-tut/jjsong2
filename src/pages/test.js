import React from "react";

class Test extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.showMessage = this.showMessage.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  
  render() {
    // props의 값을 고정!
    const props = this.props;

    // Note: 여긴 *render 안에* 존재하는 곳이다!
    // 클래스의 메서드가 아닌 render의 메서드
    const showMessage = () => {
      alert('call Class.. > Followed ' + props.user);
    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}>Follow</button>;
  }
}

export default Test;