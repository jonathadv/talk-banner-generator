import React, { Component } from 'react';
import '../css/layout.css';
import '../html2canvas/html2canvas.min.js';

export class Control extends Component {
    constructor(props) {
        super(props);
        this.generateImage = (download) => {
            html2canvas(
               this.props.children[0], {
                onrendered: function(canvas) {
                  let url = canvas.toDataURL()
                  if(false){
                    url = url.replace(/^data:image\/[^;]/, 'data:application/octet-stream')
                  }
                  window.open(url)
                },
                  background:'#ffffff',
                  width: 1920,
                  height: 1080
            }); 
        }
    } 

    render() {
        return (
            <div>
                <div className="control">
                    <button onClick="">Download Image</button>
                    <button onClick={this.generateImage}>View Image</button>                
                </div>
                {this.props.children}
            </div>
        );
  }
}

