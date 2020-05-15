import React, { Component } from "react";

class Pig extends React.Component {
    render() {
        let p = this.props.pigDat
        let picName = p.name.toLowerCase().split(" ").join('_')
        let pigImage = require(`../hog-imgs/${picName}.jpg`)

        return (
            <div className='pigTile ui seven wide column'>
                <div onClick={this.props.handleClick}>
                    <p>{p.name}</p>
                    <img src={pigImage} />
                </div>
                <div className="hoggyText hidden">
                    <p>specialty: {p.specialty}</p>
                    <p>greased: {String(p.greased)}</p>
                    <p>weight: {p.weight}</p>
                    <p>highest medal achieved: <a className='achievementText'>{p['highest medal achieved']}</a></p>
                </div>
            </div>
        )
    }
}

export default Pig;