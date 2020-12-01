//Date
function date() {
    let today = new Date(),
        day = today.getDate(),
        month = today.getMonth() + 1,
        year = today.getFullYear();

    if (day < 10) {
        day = '0' + day
    }

    if (month < 10) {
        month = '0' + month
    }

    today = year + '-' + month + '-' + day;

    document.getElementById("datereserve").value = today;

    document.getElementById("datereserve").min = today;
}
date();

//--------------------------------------------------------------------------------------------------

document.getElementById("addroom").addEventListener("click", addRoom);
addRoom();

//-----------Constructor-------------

function createRoom(addremovebutton) {

    let room = document.createElement("div"),
        title = document.createElement("div"),
        adult = document.createElement("div"),
        children = document.createElement("div"),
        ageschild = document.createElement("div"),
        adultselect = createSelect([1, 2, 3, 4]),
        childrenselect = createSelect([0, 1, 2, 3, 4]),
        adultlabel = document.createElement("label"),
        childrenlabel = document.createElement("label");

    //---------------------------------------------------------
    room.classList.add("room");
    title.classList.add("title");
    adult.classList.add("adult");
    children.classList.add("children");
    ageschild.classList.add("ageschild");
    adultlabel.textContent = "Adultos";
    childrenlabel.textContent = "Niños";
    childrenselect.addEventListener("change", updateAgesSelects);


    if (addremovebutton) {
        let removeroom = document.createElement("div");
        removeroom.innerHTML = '<i class="fas fa-times"></i>';
        removeroom.addEventListener("click", deleteRoom);
        room.append(removeroom);
    }
    adult.append(adultlabel, adultselect);
    children.append(childrenlabel, childrenselect);
    room.append(title, adult, children, ageschild);

    return room;
}

function createSelect(options) {
    let select = document.createElement("select");

    options.forEach(option => {
        let opt = document.createElement("option");

        opt.value = option;

        opt.textContent = option;

        select.appendChild(opt);

    });
    return select;
}

function updateAgesSelects(event) {

    let select = event.target;
    let ageschild = select.closest(".room").querySelector(".ageschild");
    let numchild = parseInt(select.value);

    ageschild.querySelectorAll("select").forEach(element => element.remove());
    for (let cont = 0; cont < numchild; cont++) {

        let ages = createSelect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
        ageschild.append(ages);

    }

}

//----------------Room------------------------------------

function addRoom() {
    let numrom=document.querySelectorAll(".room").length;
    let room = createRoom(numrom>=1);
    document.getElementById("buttons").before(room);


}

function deleteRoom(event) {

    let room = event.target.closest(".room");
    room.remove();

}


