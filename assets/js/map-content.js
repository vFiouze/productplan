'use strict';
import Text from './text.js'
import Bar from './bar.js'
import Lane from './lane.js'


class MapContent extends React.Component {
  constructor(props) {
    super(props)
    this.handleDrop=this.handleDrop.bind(this)
    this.state={numberOfLine:3}
  }

  render() {
    if (this.props.withStyle==true){
      return e(
        'div',
        {style:{border:"none",backgroundColor:"rgb(228,230,232)"},className:'drop',id:"drop",onDrop:this.handleDrop,onDragOver:this.handleDragOver},
        this.props.children
      );
    }else{
      return e(
        'div',
        {className:'drop',id:"drop",onDrop:this.handleDrop,onDragOver:this.handleDragOver},
        this.props.children
      )
    }
    
  }
  handleDragOver(event){
    event.preventDefault()
    // //get the coordinates
    // var xBar = event.clientX
    // //get the x coordinate of the dropzone
    // var xDropZone = document.querySelector('#map-content').offsetLeft
    // var x = xBar - xDropZone
    // var dropZone = document.getElementById('drop')
    // //create the drop guide if it doesn't exist and if it's not a Lane
    // // var id = event.dataTransfer.getData("Text");
    // // console.log(id)
    // // if(!document.getElementById('zone-guide') && id!='addlanediv'){
    // //   var div = document.createElement("div");
    // //   div.className="zone-guide"
    // //   div.id="zone-guide"
    // //   dropZone.appendChild(div)
    // // }
   
  }
  handleDrop(event){
    
    //make sure that we are dropping the correct div
    event.preventDefault()
    //create bar component if it doesn't exist already
    var exist = document.getElementById('lane')
    var id = event.dataTransfer.getData("Text");
    if(!exist && id == 'addlanediv'){
      //rerender component
      //createElement(type,prop,children)
      // var lane = e(Lane,{id:'lane',key:0},e('i', {className:"fas fa-caret-down"},''),e('span',{id:'lane-text'},'Lane'))
      var lane = e(Lane,{id:'lane',key:0},e('i', {className:"fas fa-caret-down"},''),e('span',{id:'lane-text'},e(Text,{text:'My Lane',id:'lane-t'},'')))
      ReactDOM.render(e(MapContent,{},[lane]), document.querySelector('#map-content'));
      
      //delete the text
      var textDrop = document.getElementById('drop-text')
      drop.innerHTML=""
      //show the other tooltip
      setTimeout(function(){
      const div = document.querySelector('#addbardivw');
      const tooltip = document.querySelector('#tooltipLane');

      Popper.createPopper(div, tooltip, {
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
      
      document.getElementById('tooltipLane').style.display='block'
    }
      ,1000)
    }else if(exist && id != 'addlanediv'){
      //the is a lane, add bar
      //get the coordinates
      var xBar = event.clientX
      var yBar = event.clientY
      //get the x coordinate of the dropzone
      var xDropZone = document.querySelector('#map-content').offsetLeft
      var yDropZone = document.querySelector('#map-content').offsetTop
      var x = xBar - xDropZone
      var y = yBar - yDropZone
      //render the Lane and the children Bars
      //get all the children of the bar
      //var numberOfBar=document.getElementsByClassName('bar').length
      
      // for(var i=0;i<numberOfBar;i++){
      //   children.push(e(Bar,{id:"bar-"+i.toString()}))
      // }
      //for the one we just add, specify the position
      //get the width of the container and divide it by the width of a column which is the width of the container/12
      var containerWidth = document.querySelector('#map-content').offsetWidth
      var containerHeight = document.querySelector('#map-content').offsetHeight
      var colStart = Math.floor(x/(containerWidth/12))+1
      var lineStart = Math.floor(y/(containerHeight/12))+1
      if(lineStart==1){
        return
      }
      //update numberOfLine if needed
      // if(lineStart==this.state.numberOfLine){
      //   //add line
      //   console.log('add line')
      //   //change the grid display
      //   var grid = document.getElementById('drop')
      //   var numberOfLine =lineStart+1
      //   var value = '60px repeat('+numberOfLine+',50px)'
      //   console.log(value)
      //   grid.style.gridTemplateRows= '60px repeat('+numberOfLine+',50 px)'
      // }

      //children.push(e(Bar,{id:"bar-1",x:colStart}))
      //console.log(this.state.children[0].Children)
      var childrenOfMap = React.Children.toArray(this.props.children)
      var laneZero = childrenOfMap[0]
      var childrenOfLane = React.Children.toArray(laneZero.props.children)
      var len = childrenOfLane.length
      //get height to display in the correct line
      //var height = 



      childrenOfLane.push(e(Bar,{id:"bar-"+len.toString(),x:colStart,y:lineStart,number:(len-1).toString(),key:len-1}))
      ///create the Lane
      //var bar = e(Lane,{},childrenOfLane)

      //ReactDOM.render(e(Lane,{id:'re'},childrenOfLane), document.querySelector('#map-content'));
      var lane = e(Lane,{id:'lane',key:0},childrenOfLane)
      //ReactDOM.createPortal(childrenOfLane, document.querySelector('#map-content'))
      ReactDOM.render(e(MapContent,{},[lane]), document.querySelector('#map-content'));
      //move the bar to the same level as the lane
      //var bars = document.querySelector('.lane').childNodes
      //document.getElementById('map-content').append(bars)
    }else if(exist && id =='addlanediv'){
      // TODO : Add a new Lane under the other ones
    }
    
  }
}






//create the map content component
ReactDOM.render(e(MapContent,{withStyle:false}), document.querySelector('#map-content'));
export default MapContent;
