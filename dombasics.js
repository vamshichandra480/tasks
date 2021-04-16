//Examining the document object
//console.dir(document);
// console.log(document.domain);
// console.log(document.all);
// //document.all[10].textContent = 'hello'
// console.log(document.forms)
var header = document.getElementById('headertag');
header.style.borderBottom ="3px solid black"
console.log(header);
//header.textContent = 'hello'
//header.innerHTML ='<h1>ola</h1>'
console.log(header.textContent)
console.log(header.innerText)
var text = document.getElementById('bodyh2');
text.innerHTML = '<b>add items</b>'
text.style.color = 'green';
console.log(text)
//get elements by tagname
var li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent = 'hellooo'
for (let index = 0 ; index < li.length; index++)
{
    li[index].style.fontWeight = 'bold';

}
//get elements by class name
var li1 = document.getElementsByClassName('listgroupitems');
for(let i=0;i<li1.length;i++)
{
li1[i].style.backgroundColor = 'yellow';
}
