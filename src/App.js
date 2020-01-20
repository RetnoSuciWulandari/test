import React, { Component } from "react";
import "core-js/modules/es.array.find";
import "core-js/modules/es.array.find-index";
import "core-js/modules/es.promise";
import "core-js/modules/es.string.includes";
import "core-js/modules/es.object.assign";

import MultiSelectBox from "react-multiselect-box";
import "react-multiselect-box/build/css/index.css";
//import "./styles.css";

const getOptions = qty => {
  let options = [];
  for (let i = 0; i < qty; i++) {
    options.push({
      desc: "Item " + i,
      value: i
    });
  }
  return options;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOne: [],
      selectedTwo: []
    };
  }

  render() {
    const { selectedOne, selectedTwo } = this.state;
    return (
      <div className="container">
        <h5>Example 1</h5>

        <MultiSelectBox
          options={[
            {
              desc:
                "Item 1hfkdshfkshfjkdfhsjkfhjkdhdjksfdjkhgjkghdsjkghsdjkghdskjgh",
              value: "1"
            },
            {
              desc:
                "Item 2hfkdshfkshfjkdfhsjkfhjkdhdjksfdjkhgjkghdsjkghsdjkghdskjghhfkdshfkshfjkdfhsjkfhjkdhdjksfdjkhgjkghdsjkghsdjkghdskjgh",
              value: "2"
            },
            {
              desc:
                "Item 3hfkdshfkshfjkdfhsjkfhjkdhdjksfdjkhgjkghdsjkghsdjkghdskjghhfkdshfkshfjkdfhsjkfhjkdhdjksfdjkhgjkghdsjkghsdjkghdskjgh",
              value: "3"
            }
          ]}
          labelKey="desc"
          valueKey="value"
          onAdd={selectedItem => {
            this.setState({
              selectedOne: [...this.state.selectedOne, selectedItem.value]
            });
          }}
          onRemove={(removedItem, index) => {
            this.setState({
              selectedOne: [
                ...this.state.selectedOne.filter(
                  item => item !== removedItem.value
                )
              ]
            });
          }}
          onSelectAll={selectedItems => {
            this.setState({
              selectedOne: [
                ...this.state.selectedOne,
                ...selectedItems.map(item => item.value)
              ]
            });
          }}
          onRemoveAll={() =>
            this.setState({
              selectedOne: []
            })
          }
          valueArray={selectedOne}
        />
        <h5>Example 2</h5>
        <MultiSelectBox
          options={getOptions(2000)}
          labelKey="desc"
          valueKey="value"
          valueArray={selectedTwo}
          onAdd={selectedItem => {
            this.setState({
              selectedTwo: [...this.state.selectedTwo, selectedItem.value]
            });
          }}
          onRemove={(removedItem, index) => {
            this.setState({
              selectedTwo: [
                ...this.state.selectedTwo.filter(
                  item => item !== removedItem.value
                )
              ]
            });
          }}
          onSelectAll={selectedItems => {
            this.setState({
              selectedTwo: [
                ...this.state.selectedTwo,
                ...selectedItems.map(item => item.value)
              ]
            });
          }}
          onRemoveAll={() =>
            this.setState({
              selectedTwo: []
            })
          }
        />
        <br />
        <a
          href="https://github.com/facuesr/react-multiselect-box/blob/master/src/demo/App.js"
          target="_blank"
        >
          Source
        </a>
      </div>
    );
  }
}

export default App;
