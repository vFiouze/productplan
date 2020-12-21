function handleToolTip(type) {
	event.preventDefault()
	var tooltip=document.getElementById(type)
	tooltip.style.display='none'
}
function handleToolTipLane() {
	event.preventDefault()
	var tooltip=document.getElementById('tooltipLane')
	tooltip.style.display='none'
}
function createtooltip(type){
	if(type=='bar'){
		var template = document.createElement("div")
		template.innerHTML=
		`
		<div id="tooltipBar" role="tooltip">
			<div class="close"><i onclick="handleToolTip('tooltipBar')" class="fas fa-times"></i></div>
			<h3>We'll start with a lane</h3>
        	<p>Lanes represent high level categories, such as teams, product lines, or strategic initiatives.
         		Add a color and description to your lane to communicate valuable details to stakeholders
         		<br>
         		Drag and drop to get started</p>
        	<a href="#" id='gotit' onclick="handleToolTip('tooltipBar')">Got it</a>
        	<div id="arrow" data-popper-arrow></div>
        </div>`
	}else{

		 var template = document.createElement("div")
		 template.innerHTML=
		`
        <div id="tooltipLane" role="tooltip">
        	<div class="close"><i onclick="handleToolTip('tooltipLane')" class="fas fa-times"></i></div>
			<h3>Awesome! Now let's add few bars.</h3>
        	<p>Bars are your specific initiative. Use them to represent your epics, projects, or tasks, and provide 
        		an at glance view of priority, relashionship and progress.
         		<br>
         		Drag and drop a bar to get started</p>
        	<a href="#" id='gotit' onclick="handleToolTip('tooltipLane')">Got it</a>
        	<div id="arrow" data-popper-arrow></div>
        </div>
	`
	}
	document.getElementsByTagName("BODY").append(template)
	alert('app')
}