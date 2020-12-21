/**
 * @jsx React.DOM
 */
'use strict';

const e = React.createElement;

class AddButton extends React.Component {
  constructor(props) {
    super(props)
    //bind this to this.dragStartHandler so I can read the properties
    this.dragStartHandler = this.dragStartHandler.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

  }

  render() {
    return React.createElement(
      "div",
      {id:this.props.id,onDragStart:this.dragStartHandler,draggable:true},
      e('i',{className:"fas fa-arrows-alt"},''),
      this.props.title,
      
    )
  }
  componentDidMount() {
  	//when the button is mounted, add the tooltip
  	setTimeout(function(){
      //createtooltip('bar')
      const div = document.querySelector('#addlanedivw');
      const tooltip = document.querySelector('#tooltipBar');
      var t = Popper.createPopper(div, tooltip, {
        placement: 'left',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [10, 10],
            },
          },
        ],
      });
      document.getElementById('tooltipBar').style.display='block'
      
    },1000)
  }

  dragStartHandler(event){
    //style the div
  	//when we start dragging, show the droppable area if there is no lane
    var exist = document.getElementById('lane')
    var buttonId = this.props.id
    var laneId = buttonId.indexOf('lane')
    if(!exist && laneId!=-1){
      var drop = document.getElementById('drop')
      drop.style.border="1px dashed grey"
      drop.style.backgroundColor="white"
      drop.innerHTML="<p class='drop-text'>Drop here</p>"
      //attach some data
    }else if(exist && laneId!=-1){

    }
    event.dataTransfer.setData("Text", event.target.id);
  	
    
  }
  dragStopHandler(event){
  	drop.style.border="none"
  	drop.style.backgroundColor="rgb(228,230,232)"
  	//drop.innerHTML=""
  }
  hideTooltip(){
    alert('close')
    tippy(document.getElementById('addlane')).hide()
  }
}
var domLane=document.getElementById('addlanedivw')
var domBar=document.getElementById('addbardivw')
ReactDOM.render(e(AddButton,{id:'addlanediv',title:'Add Lane'}),domLane)
ReactDOM.render(e(AddButton,{id:'addbardiv',title:'Add Bar'}),domBar)
