

document.addEventListener("DOMContentLoaded", function() {

        let paragraph = document.createElement('p');
        let text = document.createTextNode('DOM DOM DOM');

        paragraph.appendChild(text);
        document.body.appendChild(paragraph);

        let button = document.createElement('button');
        let btnText = document.createTextNode('Create Square');
        button.appendChild(btnText);
        document.body.appendChild(button);


        //Square container
        let cont = document.createElement('div');
        cont.id += "scontainer";

        document.body.appendChild(cont);

        var colors = ["blue", "red", "orange", "yellow", "green", "purple"
                    ,"pink"];

        let counter = 0;
        button.addEventListener("click", function() {


            let sq = document.createElement('div');

            sq.className += "square";
            sq.id += counter;
            counter++;
            
            sq.addEventListener("mouseenter", function(){
                let text = document.createTextNode(sq.id);
                sq.appendChild(text);
            })
            sq.addEventListener("mouseleave", function(){
                sq.innerHTML = "";
            })
            sq.addEventListener("click", function(){

                let randnumber = Math.floor((Math.random()*colors.length));

                sq.style.background = colors[randnumber];

                

    
            })
            sq.addEventListener("dblclick", function(){
                let thisid = sq.id;
                if (thisid % 2 == 0){
                    squares = document.getElementsByClassName("square");
                    let index = 0;
                    for (let i = 0; i < squares.length; i++){
                        if (thisid == squares[i].id){
                            index = i;
                        }
                    }
                    if (squares.length-2 >= index){
                        squares[index].remove();
                    }
                    else {
                        window.alert("There is no Square to the right of this box!");
                    }
                }
                else {
                    squares = document.getElementsByClassName("square");
                    index = 0
                    for (let i = 0; i < squares.length; i++){
                        if (thisid == squares[i].id){
                            index = i;
                        }
                    }
                    if(squares[0].id != thisid){
                        squares[index-1].remove();
                    }
                    else {
                        window.alert("There is no Square to the left of this box!");

                    }
                }
            })

            cont.appendChild(sq);
            
        })

})
