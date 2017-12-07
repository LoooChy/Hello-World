import React,{Component} from 'react'
import '../style/leftmenu.css'
class Leftmenu extends Component {
    constructor(props) {
        super(props);
        this.addchapters = this.addchapters.bind(this)
        this.readchapter = this.readchapter.bind(this)
    }

    addchapters() {
        this.props.addflag()
    }
    readchapter(e){
        e.stopPropagation()
        let current = e.target;
        let a ;
        if(e.target.getAttribute("class")!=="leftmenu-box"){
            a = current.parentNode.getAttribute("data-item")
        }else {
            a = e.target.getAttribute("data-item")
        }
        this.props.reading(Number(a))
    }

    render() {
        return (
            <div className="leftmenu">
                <div className="leftmenu-box">
                    <span className="leftmenu-add" onClick={this.addchapters}>+创建新的文章</span>
                </div>
                {
                    this.props.leftmenue.map(
                        (item, i)=>
                            <div key={i} className="leftmenu-box" onClick={this.readchapter} data-item={i}>
                                <span className="leftmenu-title">{item.title}</span>
                                <span className="leftmenu-time">{item.time}</span>
                                <div className="clear"></div>
                            </div>
                    )

                }
            </div>

        )
    }
}
export default Leftmenu
