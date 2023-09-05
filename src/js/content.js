window.addEventListener("load",()=>{

    setTimeout(() => {
        
        let passwordFileds = [];

        if('querySelectorAll' in document){

            passwordFileds = document.querySelectorAll("input[type='password']");

        }else{

            let inputs = document.getElementsByTagName("input");

            for (let i=0; i<inputs.length; i++) {
                if (inputs[i].type.toLowerCase() === "password") {
                    passwordFileds.push(inputs[i]);
                }
            }

        }
        
        passwordFileds.forEach((input)=>{

            input.addEventListener("keydown", function(event) {
                
                if ((event.ctrlKey || event.metaKey) && event.key === "c") {
                    navigator.clipboard.writeText(input.value);
                }

            });

        });


    },1000);

})