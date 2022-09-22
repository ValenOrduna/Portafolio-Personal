$(document).ready(()=>{
    let distancia=parseInt(screen.width-(17*screen.width/100))
    let menuHamburgesa=$('#hamburgesa')
    $('#cuadrado').animate({
        right:distancia,
        width:'0px'
    },4300)
    $('#cuadradodos').animate({
        left:distancia,
        width:'0px'
    },4300)
    $('#mounstro').animate({
        left:'-6px'
    },3500)
    $('#mounstrodos').animate({
        right:'-6px'
    },3500,()=>{
        $('.computadora').animate({
            opacity:'1'
        },1500)
    })
    menuHamburgesa.click(()=>{
        if(!menuHamburgesa.hasClass('abierto')){
            menuHamburgesa.addClass('abierto')
            $('.menu').addClass('abierto')
            $('.links').css({
                'display':'block'
            })
        }
    })
    $('.links').click((e)=>{
        e.preventDefault()
        $('.menu').removeClass('abierto')
        menuHamburgesa.removeClass('abierto')
        $('.links').css({
            'display':'none'
        })
        $('html,body').animate({
            scrollTop: $('#'+e.target.id+'seccion').offset().top-60
        },1000)
    })
    const distanciadiv=$('.juego').width()
    const distanciacerra=$('.cerrar').width()
    $('#cerrar').click(()=>{
        if(!$('#cerrar').hasClass('cerrado')){
            $('#cerrar').addClass('cerrado')
            cerrar('28px',''+distanciacerra+'px','none')
        }else{
            $('#cerrar').removeClass('cerrado')
            cerrar(''+distanciadiv+'px',''+distanciacerra+'px','flex')
        }
    })
    const cerrar=(uno,dos,tres)=>{
        $('.juego').animate({
            width:uno
        },500)
        $('.cerrar').animate({
            width:dos
        },500)
        $('.juego-contenedor').css({
            'display':tres
        },500)
    }
    let result1,result2
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    result1= parseInt(Math.random()*27)
    result2= parseInt(Math.random()*27)
    $('.contenedor-juego').click((e)=>{
        if(e.target.id==='juego-nube'){
            mostrarResultado(e.target.id,result1)
        }else if(e.target.id==='juego-nubedos'){
            mostrarResultado(e.target.id,result2)
        }
    })
    const mostrarResultado=(e,resultado)=>{
        $('#'+e).css({
            'backgroundImage':'none'
        })
        $('.'+e).text(characters[resultado])
        $('.'+e).animate({
            opacity:'1'
        },1000)

    }
    const typed = new Typed('.typed',{
        strings:['AM FRONT DEVELOPER','AM DIGITAL MARKETING EXPERT'],
        typeSpeed:120,
        backspeed:120,
        strartDelay:300,
        smartBackSpace:true,
        loop:true
    })
    const mostrarObjeto=(text,background)=>{
        Toastify({
            text: text,
            duration: 3000,
            position: 'left',
            gravity:'bottom',
            style: {
                background: background,
                color:'black',
                border:'2px solid black'
            }
        }).showToast();
    }
    let aspiradora=false,martillo=false;
    $('#aspiradora').click(()=>{
        if(aspiradora){
            mostrarObjeto('¡Ya tienes la Aspiradora en la mano!','#FF2424')
        }else{
            aspiradora=true
            mostrarObjeto('¡Has tomado la Aspiradora!','#07FF3E')
        }
    })
    $('.sobre-mi').click((e)=>{
        if(e.target.id==='activar'&&aspiradora===true){
            $(e.target).animate({
                opacity:'1'
            },400)
            $(e.target.parentElement).css({
                'backgroundImage':'none'
            },500)
        }else if(e.target.id==='activar'&& aspiradora===false){
            mostrarObjeto('¡No has recogido la aspiradora!','#FF2424')
        }
    })
    $('#martillo').click(()=>{
        if(martillo){
            mostrarObjeto('¡Ya tienes el Martillo en la mano!','#FF2424')
        }else{
            martillo=true
            mostrarObjeto('¡Has tomado el Martillo!','#07FF3E')
        }
    })
    const contenedorLadrillos=['(../media/html.png)','(../media/css.png)','(../media/js.png)','(../media/react.png)','(../media/jquery.png)','(../media/wordpress.png)','(../media/boostrap.png)','(../media/sass.png)','(../media/git.png)','(../media/mk.png)']
    $('.contenedor-ladrillos').click((e)=>{
        const imagenLadrillo=$(e.target).attr('data-index')
        const parrafoLadrillo=$(e.target).attr('data-imagen')
        if(e.target.id==='ladrillo' && martillo===true){
            $(e.target).css({
                'animation':'animar 1.5s ease-in-out'
            })
            setTimeout(() => {
                $(e.target).css({
                    'backgroundImage':'url'+contenedorLadrillos[imagenLadrillo]
                })
                $('#'+parrafoLadrillo).animate({
                    opacity:'1'
                },1000)
            }, 1500);
        }
    })

    $('.proyecto').click((e)=>{
        $('#mario').animate({
            left:'+'+screen.width*$(e.target).attr('data-valor')/14
        },1000)
    })

    let mover=0,valoraDescubrir=-1,saltoDistancia=0,permiso=false,proyecto=''

    document.addEventListener('scroll',()=>{
        if(window.pageYOffset>=$('#proyectosseccion').offset().top-10*$('#proyectosseccion').offset().top/100){
            permiso=true
        }else{
            permiso=false
        }
    })

    const comprobarPosicion= (posicionMario)=>{
        valoraDescubrir=-1
        proyecto=''
        if(mover>=3&&mover<=7){
            valoraDescubrir=0
            proyecto='#proyectouno'
        }
        if(mover>=10&&mover<=14){
            valoraDescubrir=1
            proyecto='#proyectodos'
        }
        if(mover>=16&&mover<=20){
            valoraDescubrir=2
            proyecto='#proyectotres'
        }
    }

    const moverMario = (movimiento) => {

        $('#mario').attr('src','../media/mario.gif')
        $('.mario').animate({
        right:movimiento+4*screen.width/100
        })
        setTimeout(() => {
            $('#mario').attr('src','../media/marioparado.png')
        }, 300);

    }

    const saltoMario = () =>{
        if(screen.width>=1700){
            saltoDistancia=210
        }else if (screen.width<1700 && screen.width>=1200){
            saltoDistancia=130
        }else{
            saltoDistancia=55
        }
    }

    $('#derecha').click(()=>{
        if(mover<=20){

            mover+=1
            moverMario('-=')
            
        }
    })

    $('#izquierda').click(()=>{
        if(mover > 0){

            mover-=1
            moverMario('+=')
            
        }
    })

    $('#arriba').click(()=>{
        comprobarPosicion()
        saltoMario()
        if(valoraDescubrir>-1){
            if($(proyecto).hasClass('abierto')){
                mostrarObjeto('¡Ya descubriste este trabajo!','#FF2424')
            }else {
                mostrarObjeto('¡Has descubierto un trabajo!','#07FF3E')
                $(proyecto).addClass('abierto')
            }
        }else{
            mostrarObjeto('¿Así saltas? ¡Ponle más ganas!','#FF2424')
        }
        $('#salto-mario').html('<audio src="/sonidosalto3.mp3" autoplay></audio>')
        $('.mario').animate({
            top:'0px'
        },300,()=>{
            $('#mario').attr('src','../media/mariosaltando.png')
            $('.mario').animate({
                top : saltoDistancia
            },500,()=>{
                $('#mario').attr('src','../media/marioparado.png')
            })
        })
    })

    document.addEventListener("keydown", function(event) {

        if(permiso===true){
            if (event.key == "ArrowRight"){
                
                if(mover<=20){

                    mover+=1
                    moverMario('-=')
                    
                }
                
            }else if (event.key == "ArrowLeft"){

                if(mover > 0){

                    mover-=1
                    moverMario('+=')
                    
                }
            
            }else if (event.code == "KeyW"){

                comprobarPosicion()
                saltoMario()
                if(valoraDescubrir>-1){
                    if($(proyecto).hasClass('abierto')){
                        mostrarObjeto('¡Ya descubriste este trabajo!','#FF2424')
                    }else {
                        mostrarObjeto('¡Has descubierto un trabajo!','#07FF3E')
                        $(proyecto).addClass('abierto')
                    }
                }else{
                    mostrarObjeto('¿Así saltas? ¡Ponle más ganas!','#FF2424')
                }
                $('#salto-mario').html('<audio src="/sonidosalto3.mp3" autoplay></audio>')
                $('.mario').animate({
                    top:'0px'
                },300,()=>{
                    $('#mario').attr('src','../media/mariosaltando.png')
                    $('.mario').animate({
                        top : saltoDistancia
                    },500,()=>{
                        $('#mario').attr('src','../media/marioparado.png')
                    })
                })
            
            }
        }
        
    });
})