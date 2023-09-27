"use strict"

// let tabHeaders = document.querySelectorAll(".tab-header .item");
// let tabContents = document.querySelectorAll(".tab-content .item");

// tabHeaders.forEach(tabHeader => {
//     tabHeader.addEventListener("click", function () {
//         document.querySelector(".active-tab").classList.remove("active-tab");
//         this.classList.add("active-tab")

//         tabContents.forEach(content => {
//             if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
//                 content.classList.remove("d-none")
//             } else {
//                 content.classList.add("d-none")
//             }
//         });
//     })
// });

$(function () {
    let headerss = $(".tab-header .item")

    $(".tab-header .item").click(function () {
        headerss.removeClass("active-tab")
        $(this).addClass("active-tab")
    })

    if ($(this).attr("data-id")) {
        $(this).removeClass("d-none")

    } else {
        $(this).addClass("d-none")
    }

    tabContents.forEach(content => {
        if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
            content.classList.remove("d-none")
        } else {
            content.classList.add("d-none")
        }



    })

})