window.addEventListener("load",()=>{

    setTimeout(() => {
        
        let pwdFields = [];

        if('querySelectorAll' in document){

            pwdFields = document.querySelectorAll("input[type='password']");

        }else{

            const inputs = document.getElementsByTagName("input");

            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].type.toLowerCase() === "password") pwdFields.push(inputs[i]);
            }

        }

        pwdFields.forEach((input)=>{

            input.addEventListener("keydown", async function(event) {
                if ((event.ctrlKey || event.metaKey) && event.key === "c") await navigator.clipboard.writeText(input.value);
            });

        });


    },1000);

});