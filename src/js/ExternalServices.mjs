const baseURL = "https://wdd330-backend.onrender.com/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor(category) {
    this.category = category;
    // this.path = `./public/partials/json/${this.category}.json`;
    this.path = `${window.location.origin}/json/${this.category}.json`;

  }


  async getData() {
    console.log('Requested category:', this.category); // Ahora usamos this.category
    const response = await fetch(baseURL + `products/search/${this.category}`);
    console.log('Response fetched:', response);
  
    const data = await convertToJson(response);
    console.log('Data fetched:', data);
  
    return data.Result;
  }
 
  async findProductById(id) {
    const baseURL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(`${baseURL}product/${id}`);
  
    if (!response.ok) {
      throw new Error('Producto no encontrado');
    }
  
    const data = await response.json();
   
   
    return data.Result; 
  }
 
  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }
}
