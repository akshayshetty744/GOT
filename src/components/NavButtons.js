import React from "react";
import Cards from "./Cards";
class NavButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: this.props.names,
        };
    }
  handleClick = (event) => {
      let data = event.target.textContent;
      for (let i = 0; i < this.props.names.length; i++) {
        if (data === this.props.names[i].name.toUpperCase()) {
            this.setState({ brand: [this.props.names[i]] });
        }
      }
     
    };
    inputValue = (Element) => {
          if (Element.target.value == "") {
            this.setState({ brand: this.props.names });
        } 
          let stringValue = JSON.stringify(this.props.names);
               stringValue = JSON.parse(stringValue);
          let all = stringValue.map((ele) => {
            ele.people = ele.people.filter((e) => {
              return e.name.toLowerCase().includes(Element.target.value.toLowerCase());
            });
            return ele;
          });
          this.setState({ brand: all });
    }  
  render() {
      return (
          <div>
                <div className="header">
                    <h1 className="people">People of GOT 👑</h1>
                    <div className="inputDiv"> <input className="input" type="text" onKeyUp={this.inputValue} placeholder="Search the people of GOT" />
                  </div>
           </div>
          <div className="navBar">
            {this.props.names.map((element, i) => (
              <button className="buttonName" key={i} onClick={this.handleClick} value={0}>
                {element.name.toUpperCase()}
              </button>
            ))}
            <Cards data={this.state.brand} />
          </div>
        </div>
      );
  }
}
export default NavButtons;
