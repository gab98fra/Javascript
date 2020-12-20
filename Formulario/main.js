/*
    # ----------------------------------------------------------------------------
    # Nombre:       main.js
    # Autor:        Gabriel F
    # GitHub:       https://github.com/gab98fra/
    # Creado:       14 de Noviembre 2020
    # Modificado:   19 de Noviembre 2020
    # Copyright:    (c) 2020 by Gabriel F, 2020
    # ----------------------------------------------------------------------------

*/


class Product 
{
    constructor(name="", price="", year="")
    {
        this.name=name;
        this.price=price;
        this.year=year;
    }
    
    addProduct(){
        const productList=document.getElementById("tbody");
        const element=document.createElement("tr");
        
        element.innerHTML=`
                <tr>
                    <th>${this.name}</th>
                    <th>${this.price}</th>
                    <th>${this.year}</th>
                    <th><input class="btn-info" type="submit" value="Modificar" id="updatebtn1"></th>
                    <th><input class="btn-danger" type="submit" value="Eliminar" id="deletbtn1" name="deletebtn"></th>
                </tr> 
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    deleProduct(htmlElement)
    {   
        if (htmlElement.name=="deletebtn")
        {
            //console.log(htmlElement.parentElement.parentElement);
            htmlElement.parentElement.parentElement.remove();

            this.showMessage("Producto eliminado", "info");
        }   
    }
    showMessage(msg, cssElement)
    {   
        const html=document.createElement("div")
        html.className=`alert alert-${cssElement} mt-3`;
        html.appendChild(document.createTextNode(msg));
        
        //select
        const container=document.querySelector(".container");
        const app=document.querySelector("#App");

        //show
        container.insertBefore(html, app);
        //remove msg
        setTimeout(()=>document.querySelector(".alert").remove(),2000);
        

    }
    resetForm()
    {
        document.getElementById("Product-form").reset();
    }
}

//Main
document.getElementById("Product-form")
.addEventListener("submit", function(e) {

   const name = document.getElementById("name").value; 
   const price = document.getElementById("price").value;
   const year = document.getElementById("year").value;
   const product = new Product(name,price,year);

   if (name!="" || price!="")
   {
    //Object-Method
    product.addProduct()
    product.showMessage("Se registró correctamente el producto", "success");

    e.preventDefault();
    }
    else   
    product.showMessage("Favor de ingresar los datos", "danger");
    }    
);

document.getElementById("product-list").addEventListener("click",(event)=>{
    
    //Object-Method
    const product = new Product();
    product.deleProduct(event.target)
    
    }
);


