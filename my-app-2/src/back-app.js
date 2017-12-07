import React,{Component} from 'react'
//import {
//    BrowserRouter as Router,
//    Route,
//    Link
//} from 'react-router-dom'
import Leftmenu from  './component/Leftmenu.jsx';
import Rightcontent from  './component/Rightcontent.jsx';
import './style/App.css';

const [bdH,bdW] = [window.innerHeight, window.innerWidth];
//document.body.style.height = bdH;
let leftmenuObj;
let leftmenuArr = [];

class ParamsExample extends Component {
    constructor() {
        super()
        this.state = {
            leftmenu: [],
            showflag: false,
            reading: false
        }
        this.savechapter = this.savechapter.bind(this)
        this.addchapters = this.addchapters.bind(this)
        this.cancelchapter = this.cancelchapter.bind(this)
        this.reading = this.reading.bind(this)
    }

    savechapter(title, content) {
        console.log(title, content.value)
        leftmenuObj = {
            title: title.value,
            time: getNowFormatDate(),
            content: content.value
        }
        leftmenuArr.push(leftmenuObj)
        this.setState({
                leftmenu: leftmenuArr,
                showflag: false,
                reading: false,
                readingIndex:0
            }
        )
    }

    cancelchapter() {
        this.setState({
            showflag: false
        })
    }

    addchapters() {
        this.setState({
            showflag: true,
            reading: false
        })
    }

    reading(a) {

        this.setState({
            showflag: true,
            reading: true,
            readingIndex:a
        })
    }

    render() {
        return (
            <div className="box" style={{height:bdH-2}}>
                <div className="header">
                    App
                </div>
                <Leftmenu leftmenue={this.state.leftmenu} reading={this.reading} addflag={this.addchapters}/>
                <Rightcontent rightcontent={this.savechapter}
                              cancelchapter={this.cancelchapter}  alldata = {this.state} />
                <div className="clear"></div>
            </div>
        )
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}


export default ParamsExample