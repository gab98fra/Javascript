/*
    # ----------------------------------------------------------------------------
    # Nombre:       main.js
    # Autor:        Gabriel F
    # GitHub:       https://github.com/gab98fra/
    # Creado:       14 de Noviembre 2020
    # Modificado:   11 de Enero 2021
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
                    <td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>${this.year}</td>
                    <td><input class="btn-info" type="submit" value="Modificar" name="updatebtn"></td>
                    <td><input class="btn-danger" type="submit" value="Eliminar" name="deletebtn"></td>
                </tr> 
        `;
        productList.appendChild(element);
        this.resetForm();
    }
    
    deleProduct(htmlElement)
    {   
        htmlElement.parentElement.parentElement.remove();
        this.showMessage("Producto eliminado", "info");
        
    }

    updateProduct(htmlElement)
    {   
        const row=htmlElement.parentElement.parentElement;
        let td_All=row.querySelectorAll("td");

        const name=td_All[0].innerHTML;
        const price=td_All[1].innerHTML;
        const year=td_All[2].innerHTML;
        
        document.getElementById("name").value=name;
        document.getElementById("price").value=price;
        document.getElementById("year").value=year;
        document.getElementById("button").value="Actualizar";
        

        document.getElementById("button")
        .addEventListener("click",()=>{
            if (document.getElementById("button").value=="Actualizar")
            {
            const new_Name = document.getElementById("name").value; 
            const new_Price = document.getElementById("price").value;
            const new_Year = document.getElementById("year").value;
            
            td_All[0].innerHTML=new_Name;
            td_All[1].innerHTML=new_Price;
            td_All[2].innerHTML=new_Year;
            
            document.getElementById("button").value="Registrar";
            document.getElementById("Product-form").reset();

            };
        });
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

//DOM-Main
document.getElementById("Product-form").addEventListener("submit", function(e) {
   const name = document.getElementById("name").value; 
   const price = document.getElementById("price").value;
   const year = document.getElementById("year").value;
   const product = new Product(name,price,year);

   if (document.getElementById("button").value=="Registrar")
    {
        if (name!="" && price!="")
        {
        product.addProduct()
        product.showMessage("Se registró correctamente el producto", "success");
        }
        else   
            product.showMessage("Favor de ingresar los datos", "danger");
    };    
    e.preventDefault();
});


document.getElementById("product-list").addEventListener("click",(event)=>{

    const product = new Product();
    //product.control(event.target);
    
    if (event.target.name=="deletebtn")
        {
            product.deleProduct(event.target);
        }
    if (event.target.name=="updatebtn")
        {
            product.updateProduct(event.target);
        }
    });


