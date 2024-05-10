$(document).ready(function(){
    // Menu lateral
        $('#barras').click(function(){
            $('#barras').toggleClass('abierto');
            $('.menu').toggleClass('abierto');
        })
    
    // scroll flecha
        $('a').on('click', function(){
            if (this.hash !== ''){
                let hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800)
            }
        })
    
    })