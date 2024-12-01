const baseURL = https://wdd330-backend.onrender.com/;
console.log('Base URL:', baseURL); // Agrega este console.log para depurar

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
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
  
  
  // async getData(category) {
  //   console.log('Requested category:', category); 
  //   console.log('Fetching products for category:', category); // Nuevo log
  //   const response = await fetch(baseURL + `products/search/${category}`);
  //   console.log('Response status:', response.status); // Verifica el estado HTTP
  //   const data = await convertToJson(response);
  //   console.log('Data fetched:', data); // Muestra los datos obtenidos
      
  //   return data.Result;
  // }
  async findProductById(id) {
    const baseURL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(`${baseURL}product/${id}`);
  
    if (!response.ok) {
      throw new Error('Producto no encontrado');
    }
  
    const data = await response.json();
   
   
    return data.Result; // Ajusta según la estructura de tu API.
  }
  
}

/**
 
export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
    const baseURL = import.meta.env.VITE_SERVER_URL
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}*/
