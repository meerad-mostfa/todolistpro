let formdata = document.querySelector(".formadd");
var input1=document.querySelector(".text2");
formdata.onsubmit = function (e) {
    e.preventDefault();
    const elements = e.target.elements;
    let data = {
        list: elements['listad'].value,
    }

    let listItem = document.createElement('li');//انشاء عنصر 
    listItem.innerHTML = `<input type="checkbox"> ${data.list} `;// حط بداخله محتوي 
    listItem.classList.add("chek")//ضيف هاد الكلاس
    document.querySelector("ul").appendChild(listItem); 
    console.log(listItem)
    let x = listItem.querySelector('input[type="checkbox"]');
    x.onclick = function() {
        if (x.checked) {
            listItem.classList.add("checkd");
            listItem.classList.remove("chek");
        } else {
            listItem.classList.remove("checkd");
            listItem.classList.add("chek");
        }
    };
    input1.value=" ";

}

//عن طريق appendchild 
//يمكن اضافه محتوى للعنصر الي احنا ماسكينه 
//ul 
//ابنه 
//li 
