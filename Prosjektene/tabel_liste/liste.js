let submit 
let text = String
let list = [];
let listel = document.getElementById("list")

document.getElementById("submit").onclick = function () {
    let data = document.getElementById("text").value;
    list.push(data);
    //document.getElementById('list').innerHTML = list;
    //for (let i = 0; i < list.length; i++) {
    let newel = document.createElement("ol")
    newel.innerHTML = data
    listel.appendChild(newel)
    //}
}

document.getElementById("find").onclick = function () {
    let fdata = document.getElementById("tfind").value
    let found = false
    for (let i = 0; i < list.length; i++) {
            if (list[i] == fdata) {
                found = true
                
        }
    }
    if (!found) {
        let newel = document.createElement("ol")
        newel.innerHTML = fdata
        listel.appendChild(newel)
    }
}

