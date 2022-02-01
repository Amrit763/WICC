$(document).ready(() => {
    // $('#helloButton').click(() => { //#button for id
    //     //.button for class
    //     console.log('hi i m here')
    // })

    // $("#checklink").click((e) => {
    //     if (e.target.checked) {
    //         $("a").click((e) => {
    //             event.preventDefault()
    //         });
    //     }
    // })

    // $('#helloButton').click(() => {
    //     $('li').not('.here').css('color', 'red');
    // })


    $('#helloButton').click(() => {
        $('li:nth-child(3)').css('color', 'black');
    })
})