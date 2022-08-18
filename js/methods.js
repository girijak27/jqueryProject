
            // document.getElementsByClassName('xyz');
            // document.getElementById('xyz');
            // document.getElementsByTagName('p');


            // $(".abc")
            // $("#xyz")
            // $("p")

            // $(".abc").html()
            // $(".abc").text()

            // $(".abc").prop()
            // $(".abc").addClass()
            // $(".abc").removeClass()

            // $(document).getReady(function(){

            // });

            // AJAX - Asynchornious JavaScript And XML 

                $.ajax({
                    url:'js/students.json', 
                    method: 'get', 
                    crossDomain: true,
                    dataType: 'jsonp', 
                    // data: {'phone': document.getElementById('phone').value},
                    success: function(resp){
                        console.log(resp);
                       var table ="<table>";
                       for(var i=0; i<resp.length; i++){
                        table +="<tr><td>" + resp[i].name +"</td><td>" + resp[i].phone + "</td></tr>"
                       }
                       table += "</table>";
                       $('#studentDetials').html(table);
                    },
                    error: function(err){
                        console.log(err);
                    } 
                }); 

            function checkPhone(){

                $.ajax({
                    url:'js/students.json', 
                    method: 'get', 
                    dataType: 'jsonp', 
                    data: {'phone': document.getElementById('phone').value},
                    success: function(resp){
                        console.log(resp)
                    },
                    error: function(err){
                        console.log(err);
                    } 
                });

                // Alternate

                // $.get("js/students.json", {}, function(data, status){
                //     alert("Data: " + data + "\nStatus: " + status);
                // });

                // $.post("demo_test.asp", {}, function(data, status){
                //     alert("Data: " + data + "\nStatus: " + status);
                // });
            }


// Write a program to add, substract, and multiple two matrix

function readMatrix(){
    // var r = prompt('Enter number of rows');
    // var c = prompt('Enter number of columns');
    var A = [[],[],[]];
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            A[i][j] = prompt('Enter the value at (' + i + ',' + j +')');
        }
    }
    return A;
}

var a = readMatrix();
// var b = readMatrix();
console.log(a);

function displayMatrix(matrix){
    var ele = "<div>";
    for(var i=0; i<3; i++){
        ele += "<div>";
        for(var j=0; j<3; j++){
            ele += "<span>" + matrix[i][j] + "</span>";
        }
        ele +="</div>"
    }
    ele +="</div>";
    $('#matrix').html(ele);
}
displayMatrix(a);

