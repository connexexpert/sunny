let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})



function Cart() {
    document.getElementById("cartcontainer").style.display = "flex";
}

function CartClose() {
    document.getElementById("cartcontainer").style.display = "none";
}

function ham() {
    document.getElementById("Navigation-bar-mini").style.display = "flex";
    document.getElementById("for-nav-hide").style.display = "flex";
}
function fornavhide() {
    document.getElementById("for-nav-hide").style.display = "none";
    document.getElementById("Navigation-bar-mini").style.display = "none";
}

function sideclose() {
    document.getElementById("Navigation-bar-mini").style.display = "none";
    document.getElementById("for-nav-hide").style.display = "none";
}



$(document).ready(function () {
    $("#Plant").click(function() {
        $(".Plant-item-bar").toggle();
        $(".Accessories-item-bar").hide();
        $(".Gifting-item-bar").hide();
        $(".Pots-item-bar").hide();
    })

    $("#Pots").click(function() {
        $(".Pots-item-bar").toggle();
        $(".Accessories-item-bar").hide();
        $(".Gifting-item-bar").hide();
    })

    $("#Gifting").click(function() {
        $(".Gifting-item-bar").toggle();
        $(".Accessories-item-bar").hide();
    })

    $("#Accessories").click(function() {
        $(".Accessories-item-bar").toggle();
    })

})



let abcd = document.querySelectorAll(".plant-Cart");
abcd.forEach(function (h) {
    h.addEventListener("click", function () {
        document.getElementById("plantFinalView").style.display = "flex";

        let zxc = h.parentElement.parentElement.children[0].children[0].src;
        document.getElementById("finalImage").src = zxc;

        let vbn = h.parentElement.children[0].innerHTML;
        document.getElementById("plantName").innerHTML = vbn;

        let plm = h.parentElement.children[1].innerHTML;
        document.getElementById("plantRating").innerHTML = plm;

        let okn = h.parentElement.children[2].innerHTML;
        document.getElementById("plantRate").innerHTML = okn;
    })
})

function ViewClose() {
    document.getElementById("plantFinalView").style.display = "none";
}


let mon = document.querySelectorAll(".cartbutton");
mon.forEach(function (s) {
    s.addEventListener("click", function () {
        document.getElementById("cartfill").style.display = "flex";
        document.getElementById("emptycart").style.display = "none";
        document.getElementById("plantFinalView").style.display = "none";
        document.getElementById("cartcontainer").style.display = "flex";

        let lil = s.parentElement.parentElement.parentElement.children[0].children[0].src;
        document.getElementById("cartfillimage").src = lil;

        let cdn = s.parentElement.parentElement.children[1].innerHTML;
        document.getElementById("cartfillname").innerHTML = cdn;

        let olk  = s.parentElement.parentElement.children[3].innerHTML;
        document.getElementById("cartfillprice").innerHTML = olk;

        // let okx = s.parentElement.parentElement.parentElement.children[0].innerHTML;
        // document.getElementById("cartfillquantity").innerHTML = okx;
    })
})


function sidelogin() {
    document.getElementById("formforphone").style.display = "flex";
    document.getElementById("Navigation-bar-mini").style.display = "none";
    document.getElementById("for-nav-hide").style.display = "none";
}
function phonedop() {
    document.getElementById("formforphone").style.display = "none";
}

$(document).ready(function () {

    $("#Signin").click(function () {
        $(".FOR-FORM-CONTAINER").hide();
        $(".FOR-FORM-CONTAINER1").show(200);
    })

    $("#Signup").click(function () {
        $(".FOR-FORM-CONTAINER1").hide();
        $(".FOR-FORM-CONTAINER").show(200);
    })
})


function buybutton() {
    document.getElementById("checkoutfinalcontainer").style.display = "flex";
    document.getElementById("plantFinalView").style.display = "none";
}

function checkout() {
    document.getElementById("checkoutfinalcontainer").style.display = "flex";
    document.getElementById("cartcontainer").style.display = "none";
}
function headclose() {
    document.getElementById("checkoutfinalcontainer").style.display = "flex";
}


function mobilecontinue() {
    document.getElementById("checkoutbox1").style.display = "none";
    document.getElementById("checkoutbox2").style.display = "flex";
}
function addresscontinue() {
    document.getElementById("checkoutbox1").style.display = "none";
    document.getElementById("checkoutbox2").style.display = "none";
    document.getElementById("checkoutbox3").style.display = "flex";
}

function paymentbutton() {
    document.getElementById("checkoutbox1").style.display = "none";
    document.getElementById("checkoutbox2").style.display = "none";
    document.getElementById("checkoutbox3").style.display = "none";
    document.getElementById("checkouthead").style.display = "none";
    document.getElementById("checkoutbox4").style.display = "flex";
    setTimeout(function () {
        
        document.getElementById("checkoutfinalcontainer").style.display = "none";
    },1500);

    }

function headclose() {
    document.getElementById("checkoutfinalcontainer").style.display = "none";
}

function head1() {
    document.getElementById("checkoutbox1").style.display = "flex";
    document.getElementById("checkoutbox2").style.display = "none";
    document.getElementById("checkoutbox3").style.display = "none";
}
function head2() {
    document.getElementById("checkoutbox2").style.display = "flex";
    document.getElementById("checkoutbox1").style.display = "none";
    document.getElementById("checkoutbox3").style.display = "none";
}
function head3() {
    document.getElementById("checkoutbox3").style.display = "flex";
    document.getElementById("checkoutbox1").style.display = "none";
    document.getElementById("checkoutbox2").style.display = "none";
}




    









function xyz() {
    document.getElementById("container").style.display = "flex";
}

function dop() {
    document.getElementById("container").style.display = "none";
}

$(document).ready(function () {

    $("#btn1").click(function () {
        $("#qaz").slideUp(1000);
    })
    $("#btn1").click(function () {
        $("#plm").slideDown(1000);
    })

    $("#btn2").click(function () {
        $("#plm").slideUp(1000);
    })
    $("#btn2").click(function () {
        $("#qaz").slideDown(1000);
    })

})