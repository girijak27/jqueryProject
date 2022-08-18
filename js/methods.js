
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

            function checkPhone(){

                $.ajax({
                    url:'js/students.json', 
                    method: 'get', 
                    // crossDomain: true,
                    dataType: 'jsonp', 
                    data: {'phone': document.getElementById('phone').value},
                    success: function(resp){
                        console.log(resp)
                    },
                    error: function(err){
                        console.log(err);
                    } 
                });    
            }



