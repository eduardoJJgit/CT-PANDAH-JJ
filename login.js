function logar(){
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    if(usuario == 'admin' && senha =='admin'){
        alert('LOGADO');
        location.href="index2.html";
        }
        else{
            document.write('usuario o usenha incorretos')
        }
    }
    