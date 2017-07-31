'use strict';           
var ini_x;
            var ini_y;
            var dir_count = 0;
            var direction;

            function setGrid(){
                
                ini_x = document.getElementById("_x").value;
                //console.log(ini_x);
                ini_y = document.getElementById("_y").value;
                var myDiv = document.getElementById("gridArea");
               
                var row=document.getElementById("row").value;
                var col=document.getElementById("col").value;
                // for (i=0;i<row;i++){
                //     var cell_row = document.createElement('tr');
                //     for (j=0;j<col;j++){
                //         var cell_col = document.createElement('td');
                //         cell_row.appendChild(cell_col);
                //     }
                //     myGrid.appendChild(cell_row)
                // }
                var theGrid = buildGrid(row,col);
                if (myDiv.childElementCount==0){myDiv.appendChild(theGrid);}
                else {
                  var cur_row = $('#row').val();
                  var cur_col = $ ('#col').val();
                  var ini_x = $("#_x").val();
                  var ini_y = $("#_y").val();
                  var cur_Grid = buildGrid(cur_row,cur_col);
                  $('#gridArea').html(cur_Grid);
                }
            
                setColor(ini_x,ini_y);
            }

            function buildGrid(row,col){
                    var myGrid = document.createElement("table");
                    myGrid.setAttribute("border",1);
                    myGrid.setAttribute("id","dynGrid");
                    for (i=0;i<row;i++){
                    var cell_row = document.createElement('tr');
                    for (j=0;j<col;j++){
                        var cell_col = document.createElement('td');
                        cell_row.appendChild(cell_col);
                    }
                    myGrid.appendChild(cell_row);
                }

                return myGrid;

            }

            //function getNewVal(){
            //    var userInput = $('#row');
            //    var cur

            //}

            function setColor(r,c){
                var myGrid = document.getElementById("dynGrid");
                myGrid.rows[r].cells[c].style.backgroundColor="#003366";
            }

            function removeColor(r,c){
                var myGrid = document.getElementById("dynGrid");
                myGrid.rows[r].cells[c].style.backgroundColor="#ffffff";
            }


            window.addEventListener("keydown",forward, false);


            function forward(e){
                    var keyvalue = e.keyCode;
                    //var cell = document.getElementById("dynGrid").rows[ini_x].cells[ini_y];
                    //press r for forwarding
                    if (keyvalue == 82){
                        console.log("r is pressed");
                        if ((ini_x -1)>=0) {
                            console.log("Moving forward");
                            removeColor(ini_x, ini_y);
                            ini_x--;
                            setColor(ini_x, ini_y);
                        }
                        else {
                            alert("Rover out of boundary");}
                    }
                    //press g for turning
                    else if(keyvalue == 71)
                {
                        console.log("turning");
                        dir_count++;

                }
            }
