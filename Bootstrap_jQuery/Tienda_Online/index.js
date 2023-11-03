jQuery(() => {

    $("#carrito").on("click", () => {
        $("#fondo").show();
        $(".modal").show(); 
    });

    $(".close").on("click", () => {
        $(".modal").hide();
        $("#fondo").hide();
    });

    let totalCompra = 0;

    $('.card').each(function() {

        let $card = $(this);

        let title = $card.find('.card-title').text();
        let price = $card.find('.price').text();
        let button = $card.find('.add');

        let cardData = {
            title: title,
            price: price,
            button: button
        };

        button.on("click", () => {
            $(".modal-body").append(`<p>${cardData.title} ${cardData.price}`);
            totalCompra += parseInt(cardData.price);
            $("#total").text(totalCompra);
        });

    });

})
