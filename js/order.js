
$(document).ready(function() {
    $("#add-address").click(function() {
      $("#new-pizzas").append('<div class="new-pizza">' +
                                
                                   '<div class="form-group">' +
    
                                     '<label for="new-number"><strong>Number of Pizza:</strong></label>' +
                        '<select class="form-control new-number" id="number" value="number" style="background:transparent">' +
                            '<option value="pizza1" id="pizza1">1</option>' +
                            '<option value="pizza2" id="pizza2">2</option>' +
                            '<option value="pizza3" id="pizza3">3</option>' +
                            '<option value="pizza4" id="pizza4">4</option>' +
                            '<option value="pizza5" id="pizza5">5</option>' +
                            '<option value="pizza6" id="pizza6">6</option>' +
                            '<option value="pizza7" id="pizza7">7</option>' +
                            '<option value="pizza8" id="pizza8">8</option>' +
                            '<option value="pizza9" id="pizza9">9</option>' +
                            '<option value="pizza10" id="pizza10">10</option>' +
                                    '</select>'+
                                   '</div>' +
                                   '<div class="form-group">' +
                                  
                                   '<label for="new-crust"><strong>Favorite Crust:</strong></label>' +
                           '<select class="form-control new-number" id="number" value="number" style="background:transparent">' +
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
function Pizza_Order(size,tiza,number,favo,local){
    this.sizePizza=size;
    this.typePizza=tiza;
    this.numberPizza=number;
    this.favoritePizza=favo;
    this.locationPizza=local;
    this.addresses=[];

}
Pizza_Order.prototype.fullOrder=function(){
    return this.sizePizza + " " + this.typePizza + " " +this.numberPizza+ " " + this.favoritePizza + " " +this.locationPizza;
}
// var ada=new Pizza_Order("small", "Italian", "1", "thin" , " rwanda");
$(document).ready(function(){
    $("form#new-pizz").submit(function(event){
        event.preventDefault();
        var inputtedSizePizza=$("select#new-size").val();
        var inputtedTypePizza=$("select#type").val();
        var inputtedNumberPizza=$("select#numbers").val();
        var inputtedFavoritePizza=$("select#new-crust").val();
        var inputtedLocationPizza=$("input#new-location").val();

        var newPizza_Order=new Pizza_Order(inputtedSizePizza,inputtedTypePizza,inputtedNumberPizza,inputtedFavoritePizza,inputtedLocationPizza);
            console.log(newPizza_Order);
 $("ul#your").append("<li><span class='contact'>" + newPizza_Order.fullOrder() + "</span></li>");
 $(".contact").last().click(function(){
    $("#show-your-order").show();
    $("#show-your-order h5").text(newPizza_Order.fullOrder());
    $(".pizza-size").text(newPizza_Order.sizePizza);
    $(".pizza-type").text(newPizza_Order.typePizza);
    $(".pizza-number").text(newPizza_Order.numberPizza);
    $(".pizza-favor").text(newPizza_Order.favoritePizza);
    $(".pizza-local").text(newPizza_Order.locationPizza);
    $("ul#addresses").text("");
    newPizza_Order.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.sizePizza + ", " + address.typePizza+ " " + address.numberPizza + "</li>");
    });

});
    });
    $("select#new-size").val();
    $("select#type").val();
    $("select#numbers").val();
    $("select#new-crust").val();
    $("input#new-location").val();
});

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
