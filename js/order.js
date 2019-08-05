

document.getElementById("delivery").addEventListener("click",function(){
    // prompt("Enter your address");
    alert("Your Order will be delivery at your address");
})
function Pizza_Order(size,tiza,number,favo,local,totalPrice){
    this.sizePizza=size;
    this.typePizza=tiza;
    this.numberPizza=number;
    this.favoritePizza=favo;
    this.toppingPizza=local;
    this.total=totalPrice;
    // this.orders=[];

}
 function Pizza_Orders(size1,tiza1,number1,favo1,local1){
    this.sizePizza1=size1;
    this.typePizza1=tiza1;
    this.numberPizza1=number1;
    this.favoritePizza1=favo1;
    this.locationPizza1=local1;
  

 }
 Pizza_Order.prototype.fullOrder=function(){
    return this.sizePizza + " " + this.typePizza + " " +this.numberPizza+ " " + this.favoritePizza + " " +this.toppingPizza+ " " +this.totalPrice;
}

// Pizza_Order.prototype.fullOrder=function(){
//     return this.sizePizza + " " + this.typePizza + " " +this.numberPizza+ " " + this.favoritePizza + " " +this.locationPizza+" "+this.orders;
// }
Pizza_Orders.prototype.fullOrder=function(){
    //  return this.numberPizza1+ " " + this.favoritePizza1 ;
  return this.numberPizza1+ " " + this.favoritePizza1 ;
 }
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

/*$(document).ready(function(){
    $("form#new-pizz").submit(function(event){
        event.preventDefault();
        var inputtedSizePizza=$("select#new-size").val();
        var inputtedTypePizza=$("select#type").val();
        var inputtedNumberPizza=$("input#numbers").val();
        var inputtedFavoritePizza=$("select#new-crust").val();
        var inputtedToppingPizza=$("select#new-topping").val();

         var newPizza_Order=new Pizza_Order(inputtedSizePizza,inputtedTypePizza,inputtedNumberPizza,inputtedFavoritePizza,inputtedToppingPizza);
            console.log(newPizza_Order);
              $(".new-pizza").each(function(){
                var inputtedSizePizza=$(this).find("select.newsize").val();
                var inputtedTypePizza=$(this).find("select.newType").val();
                var inputtedNumberPizza=$(this).find("input.new-number").val();
                var inputtedFavoritePizza=$(this).find("select.new-crust").val(); 
                var inputtedToppingPizza=$("select.new-Topping").val(); 

                var newPizza =new Pizza_Orders(inputtedSizePizza, inputtedTypePizza ,inputtedNumberPizza,inputtedFavoritePizza,inputtedToppingPizza);
         newPizza_Order.orders.push(newPizza);
         console.log(newPizza);
              });
            
    
    $("ul#your").append("<li><span class='contact'>" + newPizza_Order.fullOrder() + "</span></li>");            
 // $("ul#your").append("<li><span class='contact'>" + newPizza_Orders.fullOrder() + "</span></li>");*/
 /*$(".contact").last().click(function(){
   
    newPizza_Order.orders.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullOrder()+ "</li>");
    });  

});
    });*/
    $("select#new-size").val(" ");
    $("select#type").val(" ");
    $("input.new-number").val(" ");
    $("select.new-crust").val(" ");
    $("select#new-topping").val(" ");
   


// Pizza_Order.prototype.fullOrder=function(){
//     return this.sizePizza + " " + this.typePizza + " " +this.numberPizza+ " " + this.favoritePizza + " " +this.toppingPizza+ " " +this.totalPrice;
// }

    $("form#new-pizz").submit(function(event){
        event.preventDefault()
    });
    $(".btn").click(function(){

 

var size=$("select#new-size").val();
var type=$("select#type").val();
var number=$("input#numbers").val();
var crust=$("select#new-crust").val();
var topping=$("select#new-topping").val();
 var total;


var price=20;
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
            var newPizza_Order=new Pizza_Order(size,type,number,crust,topping,total);
            $("#show-your-order").show();
    //  $("#show-your-order h5").text(newPizza_Order.fullOrder());
    $(".pizza-size").text(newPizza_Order.sizePizza);
    $(".pizza-type").text(newPizza_Order.typePizza);
     $(".pizza-number").text(newPizza_Order.numberPizza);
    // $(".pizza-number1").text(newPizza_Order.numberPizza1);
     //$(".pizza-favor").text(newPizza_Order.favoritePizza);
     $(".pizza-favor").text(newPizza_Order.favoritePizza);
    $(".pizza-local").text(newPizza_Order.toppingPizza);
    $(".total-price").text(newPizza_Order.total);
    
    $("ul#addresses").text(" ");
            console.log(newPizza_Order);
     
        });
    });



















           

