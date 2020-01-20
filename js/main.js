const colors = ['red','blue','yellow', 'green']
let rij = 0;
const oplossing =  []


function Initialize() {
    for (i = 0; i < 4; i++) {
        let x = (Random1_4())
        oplossing.push(x)
    }
    NewRow()

}
function ProcesClick(circle_id) {
    // get the gbcolor
    let bg_color = document.getElementById(circle_id).style.backgroundColor
    let color_index = colors.indexOf(bg_color);
    console.log(color_index)
    // pick  the new color
    color_index = (color_index == -1 || color_index == 3)? 0: (color_index + 1);
    //swap the color
    SetBGCol(circle_id,color_index)

}

function SetBGCol(clasid, color){
    let name_color = colors[color]
    document.getElementById(clasid).style.backgroundColor = name_color;
}
function NewRow() {
    rij += 1;
    let row = "<div id='rij_"+ rij + "'>" +
        "                 <div id=\"g" + rij + "_1\" class=\"circle\" onclick=\"ProcesClick(this.id)\"></div>\n" +
        "                 <div id=\"g" + rij + "_2\" class=\"circle\" onclick=\"ProcesClick(this.id)\"></div>\n" +
        "                 <div id=\"g" + rij + "_3\" class=\"circle\" onclick=\"ProcesClick(this.id)\"></div>\n" +
        "                 <div id=\"g" + rij + "1_4\" class=\"circle\" onclick=\"ProcesClick(this.id)\"></div>\n" +
        "             </div>" ;
    document.getElementById("rijen").innerHTML += row ;

}

function Random1_4() {
    return  (Math.floor(Math.random() * 4))
}

function ToonOplossing() {
    if (document.getElementById('oplossing').style.display == 'flex' )
    {
        document.getElementById('oplossing').style.display = "none"
        document.getElementById("oplossing").innerHTML = "" ;
    }else
    {
        document.getElementById('oplossing').style.display = "flex"
        let text = "             <div id=\"rij_sol\">\n" +
            "                 <div id=\"sol1\" class=\"circle\" style=\"background-color:"+ colors[oplossing[0]] +";\"></div>\n" +
            "                 <div id=\"sol2\" class=\"circle\" style=\"background-color:"+ colors[oplossing[1]] +";\"></div>\n" +
            "                 <div id=\"sol3\" class=\"circle\" style=\"background-color:"+ colors[oplossing[2]] +";\"></div>\n" +
            "                 <div id=\"sol4\" class=\"circle\" style=\"background-color:"+ colors[oplossing[3]] +";\"></div>\n" +
            "             </div>"
        document.getElementById("oplossing").innerHTML += text ;
    }

}