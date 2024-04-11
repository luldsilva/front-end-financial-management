const loginFields=[
    {
        labelText:"Email address",
        labelFor:"emailaddress",
        id:"emailaddress",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"currentpassword",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Primeiro nome",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Primeiro nome"   
    },
    {
        labelText:"Sobrenome",
        labelFor:"lastname",
        id:"lastname",
        name:"lastname",
        type:"text",
        autoComplete:"lastname",
        isRequired:true,
        placeholder:"Sobrenome"   
    },
    {
        labelText:"E-mail",
        labelFor:"email-address",
        id:"email-address",
        labelText:"Email address",
        labelFor:"emailaddress",
        id:"emailaddress",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Seu e-mail"   
    },
    {
        labelText:"Senha",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"currentpassword",
        isRequired:true,
        placeholder:"********"   
    },
    {
        labelText:"Confirme sua senha",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirmpassword",
        isRequired:true,
        placeholder:"********"   
    }
]

export {loginFields,signupFields}