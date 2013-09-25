$(document).ready(function(){

    var options = {
        autoPlay: true,
        nextButton: false,
        prevButton: false,
        preloader: false,
        navigationSkip: false,
        autoPlayDirection: 1
    };
    var sequence = $("#sequence").sequence(options).data("sequence");

    if(sequence != undefined && sequence != 'undefined' && sequence != void 0)
    {
        sequence.afterLoaded = function(){
            
        }
    }
});