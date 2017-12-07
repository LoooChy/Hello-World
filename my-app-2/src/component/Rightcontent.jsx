import React,{Component} from 'react'
import '../style/rightcontent.css'

const [bdH,bdW] = [window.innerHeight, window.innerWidth];

class Rightcontent extends Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    save(e) {
        if (this.refs.title.value == "") {
            alert("请输入标题")
        }else if(this.refs.content.value == ""){
            alert("请输入文章")
        }
        else {
            this.props.rightcontent(this.refs.title, this.refs.content)//向父组件传递内容

        }

    }

    cancel() {
        this.refs.title.value = "";
        this.refs.content.value = "";
        this.props.cancelchapter()
    }

    render() {
        return (
            <div className="rightcontent">
                {this.props.alldata.showflag ?
                    <div>
                        <div className="rightcontent-title-box">
                            {
                                this.props.alldata.reading ?
                                    <div className="rightcontent-title" >
                                        {this.props.alldata.leftmenu[this.props.alldata.readingIndex].title}
                                    </div> :
                                    <input type="text" ref="title" placeholder="请输入文章标题"
                                           className="rightcontent-title"/>
                            }
                        </div>
                        {
                            this.props.alldata.reading ? '' :
                                <div className="rightcontent-opt-save">
                                    <button type="button" className="rightcontent-save" onClick={this.save}>保存</button>
                                    <button type="button" className="rightcontent-cancle" onClick={this.cancel}>取消
                                    </button>
                                </div>
                        }
                        <div className="rightcontent-chapter">
                            {
                                this.props.alldata.reading ?
                                    <div style={{height:bdH-44-58}}>
                                        {this.props.alldata.leftmenu[this.props.alldata.readingIndex].content}

                                    </div> :
                                    <textarea ref="content" style={{height:bdH-44-58}}>

                                    </textarea>
                            }

                        </div>
                    </div> :
                    <div style={{height:window.innerHeight-55,lineHeight:'555px',textAlign:'center'}}>
                        请选择左侧列表里面的文章
                    </div>
                }
            </div>
        )
    }
}

export default Rightcontent