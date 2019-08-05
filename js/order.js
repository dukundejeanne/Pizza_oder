
$(document).ready(function() {
    $("#add-address").click(function() {
      $("#new-pizzas").append('<div class="new-pizza">' +
                                
                                   '<div class="form-group">' +
    
                         '<label for="new-number"><strong>Number of Pizza:</strong></label>' +
                         '<input type="number" min="1" id="numbers" class="form-control new-number" style="background:transparent">' +
                                   '</div>' +
                                 
                                  
                         ' <div class="form-group">' +
                        '<label for="new-crust"><strong>Favorite Crust:</strong></label>' +
                 '<select class="form-control new-crust" id="new-crust"  style="background:transparent">' +
                               '<option value="Thin" id="crust">Thin Crust</option>' +
                              '<option value="Thick" id="crust">Thick Crust</option>' +
                               '<option value="FatBread" id="crust">FatBread Crust</option>' +
                               '<option value="Custom" id="crust">Custom Crust</option>' +
                               
                                    
                            '</select>' +
                                     '</div>' +
                                   
                            
                                 '</div>'
                                 );
    });
});
function Pizza_Order(size,tiza,number,favo,local,totalPrice){
    this.sizePizza=size;
    this.typePizza=tiza;
    this.numberPizza=number;
    this.favoritePizza=favo;
    this.locationPizza=local;
    this.total=totalPrice;
    this.orders=[];

}
 function Pizza_Orders(size1,tiza1,number1,favo1,local1){
    this.sizePizza1=size1;
    this.typePizza1=tiza1;
    this.numberPizza1=number1;
    this.favoritePizza1=favo1;
    this.locationPizza1=local1;
  

 }
 Pizza_Order.prototype.fullOrder=function(){
    return this.sizePizza + " " + this.typePizza + " " +this.numberPizza+ " " + this.favoritePizza + " " +this.locationPizza+ " " +this.totalPrice;
}

// Pizza_Order.prototype.fullOrder=function(){
//     return this.sizePizza + " " + this.typePizza + " " +this.numberPizza+ " " + this.favoritePizza + " " +this.locationPizza+" "+this.orders;
// }
Pizza_Orders.prototype.fullOrder=function(){
    //  return this.numberPizza1+ " " + this.favoritePizza1 ;
  return this.numberPizza1+ " " + this.favoritePizza1 + " " +this.locationPizza1;
 }
// var ada=new Pizza_Order("small", "Italian", "1", "thin" , " rwanda");
$(document).ready(function(){
    $("form#new-pizz").submit(function(event){
        event.preventDefault();
        var inputtedSizePizza=$("select#new-size").val();
        var inputtedTypePizza=$("select#type").val();
        var inputtedNumberPizza=$("input#numbers").val();
        var inputtedFavoritePizza=$("select#new-crust").val();
        var inputtedLocationPizza=$("input#new-location").val();

         var newPizza_Order=new Pizza_Order(inputtedSizePizza,inputtedTypePizza,inputtedNumberPizza,inputtedFavoritePizza,inputtedLocationPizza);
            console.log(newPizza_Order);
              $(".new-pizza").each(function(){
                var inputtedSizePizza=$(this).find("select.newsize").val();
                var inputtedTypePizza=$(this).find("select.newType").val();
                var inputtedNumberPizza=$(this).find("input.new-number").val();
                var inputtedFavoritePizza=$(this).find("select.new-crust").val(); 
                var inputtedLocationPizza=$("input.new-location").val(); 

                var newPizza =new Pizza_Orders(inputtedSizePizza, inputtedTypePizza ,inputtedNumberPizza,inputtedFavoritePizza,inputtedLocationPizza);
         newPizza_Order.orders.push(newPizza);
         console.log(newPizza);
              });
            
    
    $("ul#your").append("<li><span class='contact'>" + newPizza_Order.fullOrder() + "</span></li>");            
 // $("ul#your").append("<li><span class='contact'>" + newPizza_Orders.fullOrder() + "</span></li>");
 $(".contact").last().click(function(){
    $("#show-your-order").show();
    //  $("#show-your-order h5").text(newPizza_Order.fullOrder());
    $(".pizza-size").text(newPizza_Order.sizePizza);
    $(".pizza-type").text(newPizza_Order.typePizza);
     $(".pizza-number").text(newPizza_Order.numberPizza);
    // $(".pizza-number1").text(newPizza_Order.numberPizza1);
     //$(".pizza-favor").text(newPizza_Order.favoritePizza);
     $(".pizza-favor").text(newPizza_Order.favoritePizza);
    $(".pizza-local").text(newPizza_Order.locationPizza);
    $(".total-price").text(newPizza_Order.totalPrice);
    
    $("ul#addresses").text(" ");
    newPizza_Order.orders.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullOrder()+ "</li>");
    });  

});
    });
    $("select#new-size").val("");
    $("select#type").val("");
    $("input.new-number").val("");
    $("select.new-crust").val("");
    $("input#new-location").val("");
   
});

Pizza_Order.prototype.fullOrder=function(){
    return this.sizePizza + " " + this.typePizza + " " +this.numberPizza+ " " + this.favoritePizza + " " +this.locationPizza+ " " +this.totalPrice;
}
$(document).ready(function(){
    $("form#new-pizz").submit(function(event){
        event.preventDefault()
    });
    $(".btn").click(function(){

 

var size=$("select#new-size").val();
var type=$("select#type").val();
var number=$("input#numbers").val();
var crust=$("select#new-crust").val();
//var location=$("input#new-location").val();
var total=price * number;
var price=20;
var newPiza=new Pizza_Order(size,inputtedTypePizza,inputtedNumberPizza,inputtedFavoritePizza,inputtedLocationPizza,total);
 switch(size){
     case size="Large":
     switch(type){
        case type="Italian pizza":
            if (crust=="Thin Crust"){
                total=price * number+ 50;
            }else if(crust=="Thick Crust"){
                total=price * number+ 40;
            }else if(crust=="FatBread Crust"){
                total=price * number+ 30;
            }else {
                total=price * number + 20;
            }
            break;
        case type="Vegetable pizza":
                if (crust=="Thin Crust"){
                    total=price * number+ 100;
                }else if(crust=="Thick Crust"){
                    total=price * number+ 110;
                }else if(crust=="FatBread Crust"){
                    total=price * number+ 120;
                }else {
                    total=price * number+ 130;
                }
            break;
        case type="Hawaiian pizza":
                if (crust=="Thin Crust"){
                    total=price * number+ 100;
                }else if(crust=="Thick Crust"){
                    total=price * number+ 110;
                }else if(crust=="FatBread Crust"){
                    total=price * number+ 120;
                }else {
                    total=price * number+ 130;
                }
            break;
        case type="Mushroom pizza":
                    if (crust=="Thin Crust"){
                        total=price * number+ 100;
                    }else if(crust=="Thick Crust"){
                        total=price * number+ 110;
                    }else if(crust=="FatBread Crust"){
                        total=price * number+ 120;
                    }else {
                        total=price * number+ 130;
                    }
                break;
                case type="Mushroom pizza":
                    if (crust=="Thin Crust"){
                        total=price * number+ 100;
                    }else if(crust=="Thick Crust"){
                        total=price * number+ 110;
                    }else if(crust=="FatBread Crust"){
                        total=price * number+ 120;
                    }else {
                        total=price * number+ 130;
                        }
                    break;
                    case type="Regima pizza":
                        if (crust=="Thin Crust"){
                            total=price * number+ 100;
                        }else if(crust=="Thick Crust"){
                            total=price * number+ 110;
                        }else if(crust=="FatBread Crust"){
                            total=price * number+ 120;
                        }else {
                            total=price * number+ 130;
                            }
                        break;
                        case type=" Chicken Tikka pizza":
                                if (crust=="Thin Crust"){
                                    total=price * number+ 100;
                                }else if(crust=="Thick Crust"){
                                    total=price * number+ 110;
                                }else if(crust=="FatBread Crust"){
                                    total=price * number+ 120;
                                }else {
                                    total=price * number+ 130;
                                    }
                                break;
                                }
                    break;
        case size="Small":
            switch(type){
                case type="Italian pizza":
            if (crust=="Thin Crust"){
                total=price * number+ 10;
            }else if(crust=="Thick Crust"){
                total=price * number+ 20;
            }else if(crust=="FatBread Crust"){
                total=price * number+ 30;
            }else {
                total=price * number+ 40;
            }
            break;
        case type="Vegetable pizza":
                if (crust=="Thin Crust"){
                    total=price * number+ 100;
                }else if(crust=="Thick Crust"){
                    total=price * numberl+ 90;
                }else if(crust=="FatBread Crust"){
                    total=price * number+ 80;
                }else {
                    Tprice=total+ 70;
                }
            break;
        case type="Hawaiian pizza":
                if (crust=="Thin Crust"){
                    total=price * number+ 100;
                }else if(crust=="Thick Crust"){
                    total=price * numberl+ 110;
                }else if(crust=="FatBread Crust"){
                    total=price * number+ 120;
                }else {
                    total=price * number+ 130;
                }
            break;
        case type="Mushroom pizza":
                    if (crust=="Thin Crust"){
                        total=price * number+ 150;
                    }else if(crust=="Thick Crust"){
                        total=price * number+ 160;
                    }else if(crust=="FatBread Crust"){
                        total=price * number+ 170;
                    }else {
                        total=price * number+ 180;
                    }
                break;
                case type="Mushroom pizza":
                    if (crust=="Thin Crust"){
                        total=price * number+ 100;
                    }else if(crust=="Thick Crust"){
                        total=price * number+ 110;
                    }else if(crust=="FatBread Crust"){
                        total=price * number+ 120;
                    }else {
                        total=price * number+ 130;
                        }
                    break;
                    case type="Regima pizza":
                        if (crust=="Thin Crust"){
                            total=price * number+ 10;
                        }else if(crust=="Thick Crust"){
                            total=price * number+ 110;
                        }else if(crust=="FatBread Crust"){
                            total=price * number+ 12;
                        }else {
                            total=price * number+ 13;
                            }
                        break;
                        case type=" Chicken Tikka pizza":
                                if (crust=="Thin Crust"){
                                    total=price * number+ 102;
                                }else if(crust=="Thick Crust"){
                                    total=price * number+ 112;
                                }else if(crust=="FatBread Crust"){
                                    total=price * number+ 122;
                                }else {
                                    total=price * number+ 133;
                                    }
                                break;
                                }
                    break;

                    case type="Medium":
                            switch(type){
                                case type="Italian pizza":
                                    if (crust=="Thin Crust"){
                                        total=price * number+ 50;
                                    }else if(crust=="Thick Crust"){
                                        total=price * number+ 40;
                                    }else if(crust=="FatBread Crust"){
                                        total=price * number+ 30;
                                    }else {
                                        total=price * number+ 20;
                                    }
                                    break;
                                case type="Vegetable pizza":
                                        if (crust=="Thin Crust"){
                                            total=price * number+ 100;
                                        }else if(crust=="Thick Crust"){
                                            total=price * number+ 110;
                                        }else if(crust=="FatBread Crust"){
                                            total=price * number+ 120;
                                        }else {
                                            total=price * number+ 130;
                                        }
                                    break;
                                case type="Hawaiian pizza":
                                        if (crust=="Thin Crust"){
                                            total=price * number+ 100;
                                        }else if(crust=="Thick Crust"){
                                            total=price * number+ 110;
                                        }else if(crust=="FatBread Crust"){
                                            total=price * number+ 120;
                                        }else {
                                            total=price * number+ 130;
                                        }
                                    break;
                                case type="Mushroom pizza":
                                            if (crust=="Thin Crust"){
                                                total=price * number+ 100;
                                            }else if(crust=="Thick Crust"){
                                                total=price * number+ 110;
                                            }else if(crust=="FatBread Crust"){
                                                total=price * number+ 120;
                                            }else {
                                                total=price * number+ 130;
                                            }
                                        break;
                                        case type="Mushroom pizza":
                                            if (crust=="Thin Crust"){
                                                total=price * number+ 100;
                                            }else if(crust=="Thick Crust"){
                                                total=price * number+ 110;
                                            }else if(crust=="FatBread Crust"){
                                                total=price * number+ 120;
                                            }else {
                                                total=price * number+ 130;
                                                }
                                            break;
                                            case type="Regima pizza":
                                                if (crust=="Thin Crust"){
                                                    total=price * number+ 100;
                                                }else if(crust=="Thick Crust"){
                                                    total=price * number+ 110;
                                                }else if(crust=="FatBread Crust"){
                                                    total=price * number+ 120;
                                                }else {
                                                    total=price * number+ 130;
                                                    }
                                                break;
                                                case type=" Chicken Tikka pizza":
                                                        if (crust=="Thin Crust"){
                                                            total=price * number+ 100;
                                                        }else if(crust=="Thick Crust"){
                                                            total=price * number+ 110;
                                                        }else if(crust=="FatBread Crust"){
                                                            total=price * number+ 120;
                                                        }else {
                                                            total=price * number+ 130;
                                                            }
                                                        break;
                                                        }
                                            break;
            }
           
            console.log(newPiza);
     
        });
    });



















            /////////////////////////////////////////////////////////////////////////////////////////////////

// if(size=='small'&& number=='1'){
//     document.getElementById('sale').innerHTML='20$' 

// }
// if(size=='small'&& number=='1'){
//     document.getElementById('sell').innerHTML='20$' 
//     if(type=='Italian pizza'){
//     $document.write("20$");

//     }else if(type=='Vegetable pizza'){
    
//     total= price * number;
//     $document.write("total");
//     document.getElementById('sale').innerHTML='20$' 
//     }

// }else if(size == 'large'){

// }else if(size=='medium'){

// }







// $("form#new-pizz").submit(function(event){
//     event.preventDefault();
//     var input
// })

// $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
//     $(".new-address").each(function() {
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedCounty = $(this).find("input.new-county").val();
//       var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
//       newContact.addresses.push(newAddress)
//     });

//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.fullName());
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $("ul#addresses").text("");
//       newContact.addresses.forEach(function(address) {
//         $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.county + "</li>");
//       });
//     });

//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-county").val("");

//   });
// // });
