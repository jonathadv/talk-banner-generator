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
                  width: 1920,
                  height: 1080
            });
        }

        this.setBackground = () => {
            const  background = document.getElementsByClassName("background-image-upload")[0];
            background.click()
        }
    }

    render() {
        return (
            <div>
                <div className="control">
                    <p className="center"><a href="https://github.com/jonathadv/talk-banner-generator" target="_blank">Project on Github</a></p>
                    <p className="center">Firefox only (for while)</p><br/>
                    <p className="center">
                        <button className="myButton" onClick={this.generateImage}>Generate Image</button>
                        <button className="myButton" onClick={this.setBackground}>Set background</button>
                    </p>
                </div>
                <hr className="line"/>
                {this.props.children}
            </div>
        );
  }
}

