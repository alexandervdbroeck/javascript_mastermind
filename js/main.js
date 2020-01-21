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
    // pick  the new color
    color_index = (color_index == -1 || color_index == 3)? 0: (color_index + 1);
    //swap the color
    SetBGCol(circle_id,color_index)

}

function SetBGCol(clasid, color){
    let name_color = colors[color]
    document.getElementById(clasid).style.backgroundColor = name_color
}
function NewRow() {

    rij += 1
    let row = "<div id='rij_"+ rij + "'>" +
        "                 <div id=\"g" + rij + "_1\" class=\"circle\"  onclick=\"ProcesClick(this.id)\"></div>\n" +
        "                 <div id=\"g" + rij + "_2\" class=\"circle\" onclick=\"ProcesClick(this.id)\"></div>\n" +
        "                 <div id=\"g" + rij + "_3\" class=\"circle\"  onclick=\"ProcesClick(this.id)\"></div>\n" +
        "                 <div id=\"g" + rij + "_4\" class=\"circle\"  onclick=\"ProcesClick(this.id)\"></div>\n" +
        "             </div>" ;
    AppendContent("rijen",row)
    // document.getElementById("rijen").innerHTML += row ;

}

function Random1_4() {
    return  (Math.floor(Math.random() * 4))
}

function ToonOplossing() {
    if (document.getElementById('oplossing').style.display == 'flex' )
    {
        document.getElementById('oplossing').style.display = "none"
        document.getElementById('oplossing').innerHTML = ""
    }else
    {
        document.getElementById('oplossing').style.display = "flex"
        let text = "             <div id=\"rij_sol\">\n" +
            "                 <div id=\"sol1\" class=\"circle\" style=\"background-color:"+ colors[oplossing[0]] +";\"></div>\n" +
            "                 <div id=\"sol2\" class=\"circle\" style=\"background-color:"+ colors[oplossing[1]] +";\"></div>\n" +
            "                 <div id=\"sol3\" class=\"circle\" style=\"background-color:"+ colors[oplossing[2]] +";\"></div>\n" +
            "                 <div id=\"sol4\" class=\"circle\" style=\"background-color:"+ colors[oplossing[3]] +";\"></div>\n" +
            "             </div>"
        AppendContent("oplossing",text)

    }

}

function AppendContent(el_name, new_content) {
    document.getElementById(el_name).innerHTML += new_content

    
}

function CheckAwnser() {
    let awnser = [];
    let black = 0;
    let white = 0;
    let i = 0;

    // make an array of the awnser
    for(let i = 0; i < 4; i++)
    {
        color = document.getElementById("g"+ (rij - 1) + "_" + (i+1)).style.backgroundColor
        awnser.push(color)
    }

    // coppy the awnser and solution array
    copy_solution = CoppyArray(oplossing)
    copy_awnser = CoppyArray(awnser)

    // count the black points if the points are counted the colors are replaced by 5 or 6 to prevent double counts
    for(let i = 0; i < 4; i++)
    {
        if(copy_awnser[i] == colors[copy_solution[i]])
        {
            copy_solution[i] = 5
            copy_awnser[i] = 6
            black += 1;
        }
    }

    //count white points
    for(let i = 0; i < 4; i++)
    {
        for(x = 0; x < 4; x++)
        {
            if(copy_awnser[i] == colors[copy_solution[x]])
            {
                copy_solution[x] = 5
                copy_awnser[i] = 6
                white += 1;
            }

        }
    }
    
}

function CoppyArray(array)
{
    let new_array = [];
    for(i=0 ; i< array.length ; i++)
    {
        new_array.push(array[i])
    }
    return new_array;
}