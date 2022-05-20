

function playTheGame (){
     let c

    a=confirm("voulez vous jouer?");{
        if (a==false){
            b=alert("pas de probleme aurevoir")
        }else{
            c=Number(prompt('entrez une valeur'))            
            if (isNaN(c)) {
                alert("Desole ceci n'est pas un numero, au revoir")                
            } else if (c<0 || c>10){
                alert("Desole c'est pas un bon chiffe, au revoir")
            }else if(c>=0 && c<=10){
                //let computerNumber = Math.random()*(10-0+1)+1;
                let   computerNumber = Math.floor(Math.random()*11) 
                console.log(computerNumber);
            }
        }        
    }    
}
playTheGame()

function compareNumbers(userNumber,computerNumber){
    //let userNumber
    if (computerNumber==userNumber){
        alert("vous avez gagne");       
    } else if (userNumber>compareNumbers){
        alert("votre numero est superieur a celui de l'ordinateur");
        d=prompt("entrez un nouveau numero");
    }
}
compareNumbers(userNumber,computerNumber)









