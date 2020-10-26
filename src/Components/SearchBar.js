import React from "react";
import "../Components/SearchBar.css";

class SearchBar extends React.Component {
  state = { trem: "" };

  onSetChange = (event) => {
    this.setState({ trem: event.target.value });
  };

  onformSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.trem);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onformSubmit}>
          <div className="field ">
            <input
              type="text"
              className="inputField"
              value={this.state.trem}
              placeholder="search"
              onChange={this.onSetChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
