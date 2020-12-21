/**
 * @jsx React.DOM
 */
'use strict';
import Lane from './lane.js'
import MapContent from './map-content.js'


class Text extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
    this.handleBlur=this.handleBlur.bind(this)
    this.state={text:this.props.text}
    

  }

  render() {
    return React.createElement(
      "p",
      {id:this.props.id,onClick:this.handleClick,onBlur:this.handleBlur,onChange:this.handleChange},
      this.state.text,
      
    )
  }

  handleClick(){
    var id = this.props.id
    var textArea = document.createElement("input")
    textArea.classList.add('edit-text')
    textArea.id=id
    textArea.value=this.props.text
    textArea.onblur=this.handleBlur
    document.getElementById(id).replaceWith(textArea)
    textArea.focus()

  }
  handleBlur(){
    //document.getElementById(this.props.id).remove()
    this.setState({text:document.getElementById(this.props.id).value})
    
    //rerender the component
    //ReactDOM.unmountComponentAtNode(document.querySelector('#lane'))
    //ReactDOM.render(e(Text,{text:document.getElementById(this.props.id).value,id:'lane-t'},''),document.querySelector('#lane'))
    
    //var lane = e(Lane,{id:'lane',key:0},e('i', {className:"fas fa-caret-down"},''),e('span',{id:'lane-text'},e(Text,{text:this.state.text,id:'lane-t'},'')))
    //ReactDOM.unmountComponentAtNode(document.querySelector('#map-content'))
    //ReactDOM.render(e(MapContent,{withStyle:true},[lane]), document.querySelector('#map-content'));
  }
}

export default Text;