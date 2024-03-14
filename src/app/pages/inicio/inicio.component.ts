import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  products = [
    {
      name: 'Mango',
      description: 'Mango de alta calidad',
      price: 20.99,
      imageUrl: 'assets/mango.jpg'
    },
    {
      name: 'Manzana',
      description: 'Manzana Roja',
      price: 39.99,
      imageUrl: 'assets/manzana.jpg'
    },
    {
      name: 'Pera',
      description: 'Pera de alta calidad',
      price: 59.99,
      imageUrl: 'assets/pera.jpg'
    },
    {
      name: 'Piña',
      description: 'Piña dulce Oro miel',
      price: 20.99,
      imageUrl: 'assets/piña.jpg'
    },
    {
      name: 'Uvas',
      description: 'Uvas negras chilenas',
      price: 39.99,
      imageUrl: 'assets/uvas.jpg'
    },
    {
      name: 'Mango',
      description: 'Mango de alta calidad',
      price: 20.99,
      imageUrl: 'assets/mango.jpg'
    },
    {
      name: 'Manzana',
      description: 'Manzana Roja',
      price: 39.99,
      imageUrl: 'assets/manzana.jpg'
    },
    {
      name: 'Pera',
      description: 'Pera de alta calidad',
      price: 59.99,
      imageUrl: 'assets/pera.jpg'
    },
    {
      name: 'Piña',
      description: 'Piña dulce Oro miel',
      price: 20.99,
      imageUrl: 'assets/piña.jpg'
    },
    {
      name: 'Uvas',
      description: 'Uvas negras chilenas',
      price: 39.99,
      imageUrl: 'assets/uvas.jpg'
    },
    {
      name: 'Mango',
      description: 'Mango de alta calidad',
      price: 20.99,
      imageUrl: 'assets/mango.jpg'
    },
    {
      name: 'Manzana',
      description: 'Manzana Roja',
      price: 39.99,
      imageUrl: 'assets/manzana.jpg'
    },
    {
      name: 'Pera',
      description: 'Pera de alta calidad',
      price: 59.99,
      imageUrl: 'assets/pera.jpg'
    },
    {
      name: 'Piña',
      description: 'Piña dulce Oro miel',
      price: 20.99,
      imageUrl: 'assets/piña.jpg'
    },
    {
      name: 'Uvas',
      description: 'Uvas negras chilenas',
      price: 39.99,
      imageUrl: 'assets/uvas.jpg'
    }
  ];

  public totalH = this.products.length;
  public page = 0;
  public rowsOnPage = 6;
  public math = Math.ceil;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    Swal.fire({
      title: 'Producto añadido al carrito',
      text: `${product.name} ha sido añadido a tu carrito.`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'OK'
    });
  }

  showLargeImage(product: any) {
    // Mostrar una alerta con SweetAlert2 y la imagen ampliada
    Swal.fire({
      imageUrl: product.largeImageUrl,
      imageAlt: 'Ampliar imagen',
      customClass: {
        image: 'large-image'
      },
      showCloseButton: true,
      showConfirmButton: false
    });
  }

  pageChange(p: number): void {
    this.page = p;
  }

  nextPage() {
    if (this.page < this.totalH - this.rowsOnPage) {
      this.page += 6;
    }
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 6;
    }
  }

  filteredProducts = [...this.products];
  searchTerm: string = '';

  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      
    );
    this.products=this.filteredProducts;
  }

  limpiarbusqueda(){
    this.searchTerm="";
    this.products = [
      {
        name: 'Mango',
        description: 'Mango de alta calidad',
        price: 20.99,
        imageUrl: 'assets/mango.jpg'
      },
      {
        name: 'Manzana',
        description: 'Manzana Roja',
        price: 39.99,
        imageUrl: 'assets/manzana.jpg'
      },
      {
        name: 'Pera',
        description: 'Pera de alta calidad',
        price: 59.99,
        imageUrl: 'assets/pera.jpg'
      },
      {
        name: 'Piña',
        description: 'Piña dulce Oro miel',
        price: 20.99,
        imageUrl: 'assets/piña.jpg'
      },
      {
        name: 'Uvas',
        description: 'Uvas negras chilenas',
        price: 39.99,
        imageUrl: 'assets/uvas.jpg'
      },
      {
        name: 'Mango',
        description: 'Mango de alta calidad',
        price: 20.99,
        imageUrl: 'assets/mango.jpg'
      },
      {
        name: 'Manzana',
        description: 'Manzana Roja',
        price: 39.99,
        imageUrl: 'assets/manzana.jpg'
      },
      {
        name: 'Pera',
        description: 'Pera de alta calidad',
        price: 59.99,
        imageUrl: 'assets/pera.jpg'
      },
      {
        name: 'Piña',
        description: 'Piña dulce Oro miel',
        price: 20.99,
        imageUrl: 'assets/piña.jpg'
      },
      {
        name: 'Uvas',
        description: 'Uvas negras chilenas',
        price: 39.99,
        imageUrl: 'assets/uvas.jpg'
      },
      {
        name: 'Mango',
        description: 'Mango de alta calidad',
        price: 20.99,
        imageUrl: 'assets/mango.jpg'
      },
      {
        name: 'Manzana',
        description: 'Manzana Roja',
        price: 39.99,
        imageUrl: 'assets/manzana.jpg'
      },
      {
        name: 'Pera',
        description: 'Pera de alta calidad',
        price: 59.99,
        imageUrl: 'assets/pera.jpg'
      },
      {
        name: 'Piña',
        description: 'Piña dulce Oro miel',
        price: 20.99,
        imageUrl: 'assets/piña.jpg'
      },
      {
        name: 'Uvas',
        description: 'Uvas negras chilenas',
        price: 39.99,
        imageUrl: 'assets/uvas.jpg'
      }
    ];
   
  }

}
