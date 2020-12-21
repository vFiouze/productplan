class Lane extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return e(
      'div',
      {id:this.props.id,className:'lane'},
      this.props.children
    )
  }
}
export default Lane;