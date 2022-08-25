function togglePanelCollapse(panel) {
    console.log(panel)
    if(panel){
        let panelClassList = panel.classList.value;
        console.log(panelClassList)
        if(panelClassList.includes('collapse')) panel.classList.remove("collapse")
        else panel.classList.add("collapse")
    }
}

export default togglePanelCollapse;