/**
 * Created by tyb on 16-1-28.
 */
$(document).ready(function(){
    $("#header").load("views/header.html",[],function(){
        loadViews('home');

        $("#list").click(function(){
                loadViews('list');
            }
        );
        $("#home").click(function(){
                loadViews('home');
            }
        )

        $("#cart").click(function(){
                loadViews('cart');
            }
        )
    });
});

function loadViews(view){
    if (view=='list') loadList();
    if (view=='home') loadHome();
    if (view=='cart') loadCart();
}

function loadList(){
    $("#view").load("views/goodlist.html",[],function(){
        document.title='商品列表页';
        $("ul li").removeClass("active");
        $("ul li:eq(1)").addClass("active");
        addButtonClick();
        var count = 0;
        $('.btn-primary').click(function(){
            count++;
            $('#cart-count').text(count);
        });
    });

}

function loadHome(){
    $("#view").load("views/home.html",[],function(){
        document.title='主页';
        $("ul li").removeClass("active");
        $("ul li:eq(0)").addClass("active");
    });
}

function loadCart(){
    $("#view").load("views/cart.html",[],function(){
        document.title='购物车';
        $("ul li").removeClass("active");
        $("ul li:eq(2)").addClass("active");
    })
}

function addButtonClick(){
    var offset = $("#end").offset();
    $(".btn").click(function(event){
        var btn = $(this);
        var flight = $('<img class="flight" src="img/gift.png">');
        flight.fly({
            start: {
                left: event.pageX,
                top: event.pageY
            },
            end: {
                left: offset.left+10,
                top: offset.top+10,
                width: 0,
                height: 0
            },
            onEnd: function(){
                $("#msg").show().animate({width: '220px'}, 200).fadeOut(1000);
                this.destory();
            }
        });
    });
}

