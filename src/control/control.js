import React, { Component } from 'react';
import '../html2canvas/html2canvas.min.js';

export class Control extends Component {
    constructor(props) {
        super(props);
        this.generateImage = (download) => {
            html2canvas(
               document.getElementById(this.props.print), {
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
                <p className="center">
                    <button className="myButton" onClick={this.generateImage}>Generate Image</button>
                </p>
                </div>
                {this.props.children}
            </div>
        );
  }
}

