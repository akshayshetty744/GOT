import React from 'react'
class Cards extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        {this.props.data.map((element, i) =>
          element.people.map((e) => (
            <div className="mainCard" >
              <img className="img" src={e.image} />
              <div className="name">{e.name}</div>
              <div className="description">{e.description}</div>
              <button className="knowMore">KNOW MORE</button>
            </div>
          ))
        )}
      </div>
    );
  }
}
export default Cards;