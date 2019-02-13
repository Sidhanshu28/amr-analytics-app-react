import React, { Component } from "react";
import './index.css';

class AppHeader extends Component {
  render() {
    // return <div class='row'>
    return <div class='appheader row justify-content-end m-0'>
    <form class="col-6 form align-self-end">
    <div class='switch-field'>
    <input type="radio" id="switch_3_start" name="switch_3" value="isolation"/>
      <label for="switch_3_start">Isolation</label>
      <input type="radio" id="switch_3_left" name="switch_3" value="resistance" />
      <label for="switch_3_left">Resistance Pattern</label>
			<input type="radio" id="switch_3_center" name="switch_3" value="specialcases"/>
      <label for="switch_3_center">Special Cases</label>
			<input type="radio" id="switch_3_right" name="switch_3" value="predefined" />
      <label for="switch_3_right">Pre-defined cases</label>
			<input type="radio" id="switch_3_end" name="switch_3" value="fav" />
      <label for="switch_3_end">Favorites</label>
    </div>
    </form>
        
    </div>;
  }
}

export default AppHeader;
