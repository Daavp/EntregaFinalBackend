console.log("js products");

 const addToCart = async(productId)=>{
    try {
        const userLog = document.getElementById("cartId");
        const cartId = userLog.innerText;
        const idProduct = productId;
        console.log(userLog.innerText);
        console.log("productId",idProduct);
        resp =await fetch(`/api/carts/product/${idProduct}`,{
            method:'POST',mode:"cors"
        });
        result = await resp.json();
        console.log("products js result",resp)
        /* console.log("Status: ",result.status,"Message: ",result.message); */
    } catch (error) {
        console.log("No hay sesión iniciada", error.message);
        console.log(error.message)
    }
    }
//fetch de datos para crear carrito o agregar info a carrito

/* const addToCart = async(productId,cartId)=>{
    if(userLog.innerText("")){
        return  console.log("No estas registrado, registrate para poder comprar")
    };
        resp =await fetch(`http://localhost:8080/api/carts/${cartId}/product/${productId}`,{
            method:'POST'
        });
        result = await resp.json();
        console.log("Status: ",result.status,"Message: ",result.message);
    } */