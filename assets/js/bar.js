class Bar extends React.Component {
  constructor(props) {
    super(props)
    this.state={text:'Roadmap item '+this.props.number}
    this.onClickHandle=this.onClickHandle.bind(this)
  }
  render() {
    //use portal to render the children at the same DOM level
    return ReactDOM.createPortal(
      e('div',{
        id:this.props.id,
        className:'bar',
        style: {
            gridRow:this.props.y.toString()+'/'+this.props.y.toString(),
            gridColumn:this.props.x + '/' + (parseInt(this.props.x)+3).toString() 
        },
        onClick:this.onClickHandle,
      },[e('span',{className:'bar-text',key:this.props.number},this.state.text)]),
      document.querySelector('#drop')
    );
  }
  onClickHandle(){
    var children = React.Children.toArray(this.props.children)[0]
  }
}
export default Bar;