import React from "react";
import './CoolList.css';


class CoolListItem extends React.Component {
    render() {
        return(
            <li>{this.props.index} {this.props.value}</li>
        )
    }
}

class CoolListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };
        this.props.items.forEach((item) => {
            this.state.rows.push(item);
            console.log(this.state.rows)
        })
    }

    render() {
        return(
            <>
                {this.state.rows.map(function(row, i){
                    return <CoolListItem value={row} index={i} />;
                })}
            </>
        )
    }
}

class CoolList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.props.elements.forEach((element) => {
            this.state.items.push(element)
        });
    }

    render() {
        return(
            <>
                <div class="coolListLabel">{this.props.label}</div>
                <ul>
                    <CoolListItems items={this.state.items}/>
                </ul>
            </>
        )
    }
}

export default CoolList