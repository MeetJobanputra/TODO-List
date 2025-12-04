var i = 0;
function onPress () {
  let arr=[];
  arr[i]=(document.createElement('div'));
  arr[i].innerHTML=i;
  document.body.appendChild(arr[i]);
  i++;
}
