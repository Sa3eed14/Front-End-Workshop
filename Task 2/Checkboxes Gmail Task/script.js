var checkboxes = Array.from(document.querySelectorAll('.inbox .item [type="checkbox"] '));
var LastCheckBox;   // Last Pressed Checkbox
checkboxes.forEach(item => item.addEventListener('click', BoxChange));

function BoxChange(e) {
    if (e.shiftKey && this != LastCheckBox) {
        ChangeInBetweenBoxes(LastCheckBox, this);
    }
    LastCheckBox = this;
}

/**
 * @function: Change the State of all in Between Checkboxes
 * @param {*} start 
 * @param {*} end 
 * @return: void
 */
function ChangeInBetweenBoxes(start, end) {  // start => first checked box  end=> last check box
    if (checkboxes.indexOf(start) > checkboxes.indexOf(end)) {
        [end, start] = [start, end];
    }

  GetInBetweenBoxes(start,end).forEach(box=> {
      if(box.checked==true){
        GetInBetweenBoxes(start, end).forEach(box => box.checked = false);
      }
      else{
        GetInBetweenBoxes(start, end).forEach(box => box.checked = true);
      }
  });
}
    // if (GetInBetweenBoxes(start, end).forEach(box => box.checked == true)) {
    // }
    // else {
    //     GetInBetweenBoxes(start, end).forEach(box => box.checked = true);
    // }


/**
 * 
 * @param {*} start
 * @param {*} end
 * @return : Array Of In Between checkboxes
 */
function GetInBetweenBoxes(start, end) {
    return checkboxes.filter((item, key) => { return checkboxes.indexOf(start) < key && key < checkboxes.indexOf(end) });
}
// function filterBoxes(first,second){
//     return checkboxes.indexOf(first)<key && key <checkboxes.indexOf(second);
// }

