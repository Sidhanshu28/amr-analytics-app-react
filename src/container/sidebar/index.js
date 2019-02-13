import React, { Component } from 'react'
import './index.css'
import { getOrgUnits } from '../../api/api';
import { OrgUnitTree } from '../../OrgUnitTree';

class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
            condition:false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = function(){
        this.setState( { condition : !this.state.condition } );
    }

    componentDidMount = async () => {
        const orgUnits = await getOrgUnits()
        let selected = []
        for(let i = 0; i < orgUnits.length; i++)
            selected.push(orgUnits[i].id)
        this.setState({
            orgUnits: orgUnits,
            selected: selected
        })
    }

    onOrgUnitClick = (orgUnitId) => {
        let selected = [...this.state.selected]
        if(selected.includes(orgUnitId)) {
            selected.splice(selected.indexOf(orgUnitId), 1)
        }
        else
            selected.push(orgUnitId)
        this.setState({ selected: selected })
    }

  render() {
      console.log(this.state.selected)
    return (
    <div className={"col sidebar " + (this.state.condition ? "sidebar-expanded":"")}>
        <div class='row px-2 pt-1'>
            <div class='col w-100'>
                <i class='material-icons sidebar-menu-icon' onClick={this.handleClick}>menu</i>
                {this.state.orgUnits && this.state.condition ?
                    <OrgUnitTree
                        onSelect={this.onOrgUnitClick}
                        selected={this.state.selected}
                        orgUnits={this.state.orgUnits}
                    />
                    : null
                }
            </div>
        </div>
    </div>
    );
  }
}

export default Sidebar;
