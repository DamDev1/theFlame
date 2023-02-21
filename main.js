function calculate(){
    let addBothInput;

    const loverOne = document.querySelector(".loverOne").value;
    const loverTwo = document.querySelector(".loverTwo").value;

    document.querySelector(".nameOne").innerHTML = loverOne;
    document.querySelector(".nameTwo").innerHTML = loverTwo

    if(loverOne === loverTwo){
        console.log("okay")
    }else{
        addBothInput =  loverOne + loverTwo;
        const Myarr = addBothInput.split('')
        
        function removeDuplicate( arr ){
            let discarded = [];
            let good = [];
            let test;

            while(test = arr.pop()){
                if(arr.indexOf( test ) > -1){
                    discarded.push( test )
                    continue;
                }else if( discarded.indexOf(test)){
                    good.push(test)
                }
            }
            return good.reverse();
        }

        x = removeDuplicate(Myarr)

        if(x.length === 1 || x.length === 7 || x.length ===13 || x.length ===19 || x.length ===25){
            document.querySelector(".flame").innerHTML = "FRIENDSHIP"
        }
        
        else if(x.length === 2 || x.length === 8 || x.length === 14 || x.length === 20 || x.length === 26){    
            document.querySelector(".flame").innerHTML = "Lovers"
        }
        
        else if(x.length === 3|| x.length === 9|| x.length === 15|| x.length === 21|| x.length === 27){    
            document.querySelector(".flame").innerHTML = "Admirers"
        }
        
        else if(x.length === 4|| x.length === 10|| x.length === 16|| x.length === 22|| x.length === 28){    
            document.querySelector(".flame").innerHTML = "Marriage"
        }
        
        else if(x.length === 5|| x.length === 11|| x.length === 17|| x.length === 23|| x.length === 29){    
            document.querySelector(".flame").innerHTML = "Enemies"
        }
        
        else if(x.length === 6|| x.length === 12|| x.length === 18|| x.length === 24|| x.length === 30){    
            document.querySelector(".flame").innerHTML = "Siblings"
        }
    }
}