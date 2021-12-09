import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  products: IProduct[] = [
    {
        nombre: 'Portatil Asus - ZenBook Pro',
        descripcion: 'lorem ipsum',
        precio: 3000000,
        categoria: 'PORTATILES',
        img_url: 'https://m.media-amazon.com/images/I/81deSneMCOL._AC_SL1500_.jpg'
    },
    {
        nombre: 'Portatil Asus - ZenBook 13',
        descripcion: 'lorem ipsum',
        precio: 3500000,
        categoria: 'PORTATILES',
        img_url: 'https://m.media-amazon.com/images/I/81NbyNDC8eS._AC_SY450_.jpg'
    },
    {
        nombre: 'Portatil Asus - Vivobook S15',
        descripcion: 'lorem ipsum',
        precio: 2800000,
        categoria: 'PORTATILES',
        img_url: 'https://acf.geeknetic.es/imgw/imagenes/auto/2020/9/16/45g-image.png?f=webp&s=b'
    },
    {
        nombre: 'Portatil HP Pavilion 15',
        descripcion: 'lorem ipsum',
        precio: 2000000,
        categoria: 'PORTATILES',
        img_url: 'https://m.media-amazon.com/images/I/7156VgoIhdL._AC_SL1500_.jpg'
    },
    {
        nombre: 'Portatil Hp 14-cf303la',
        descripcion: 'lorem ipsum',
        precio: 1800000,
        categoria: 'PORTATILES',
        img_url: 'https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/9/U/9UV19LA-1_T1596563813.png'
    },
    {
        nombre: 'Portatil Hp Chromebook 14',
        descripcion: 'lorem ipsum',
        precio: 1200000,
        categoria: 'PORTATILES',
        img_url: 'https://m.media-amazon.com/images/I/91XR+02AJBL._AC_SL1500_.jpg'
    },
    {
        nombre: 'Portatil MSI GL66 15.6',
        descripcion: 'lorem ipsum',
        precio: 5100000,
        categoria: 'PORTATILES',
        img_url: 'https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SY355_.jpg'
    },
    {
        nombre: 'Portatil Asus ROG Strix G15',
        descripcion: 'lorem ipsum',
        precio: 5899000,
        categoria: 'PORTATILES',
        img_url: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_SY450_.jpg'
    },
    {
        nombre: 'iPhone 13 128 GB',
        descripcion: 'lorem ipsum',
        precio: 3500000,
        categoria: 'CELULARES',
        img_url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842709000'
    },
    {
        nombre: 'iPhone 13 Pro Max 128 GB',
        descripcion: 'lorem ipsum',
        precio: 3900000,
        categoria: 'CELULARES',
        img_url: 'https://tiendasishop.com/media/catalog/product/m/l/mlvu3lz_a_12.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
        nombre: 'Samsung Galaxy S21 256 GB',
        descripcion: 'lorem ipsum',
        precio: 3349900,
        categoria: 'CELULARES',
        img_url: 'https://m.media-amazon.com/images/I/512Va+-kCJL._AC_SX466_.jpg'
    },
    {
        nombre: 'Samsung Galaxy S21 Ultra 256 GB',
        descripcion: 'lorem ipsum',
        precio: 4000000,
        categoria: 'CELULARES',
        img_url: 'https://falabella.scene7.com/is/image/FalabellaCO/11530235_1?wid=800&hei=800&qlt=70'
    },
    {
        nombre: 'Xiaomi Redmi Note 10 Pro',
        descripcion: 'lorem ipsum',
        precio: 1519900,
        categoria: 'CELULARES',
        img_url: 'https://http2.mlstatic.com/D_NQ_NP_2X_657027-MLA46490505119_062021-V.webp'

    },
    {
        nombre: 'Xiaomi Redmi Note 9',
        descripcion: 'lorem ipsum',
        precio: 899900,
        categoria: 'CELULARES',
        img_url: 'https://http2.mlstatic.com/D_NQ_NP_962241-MLA46167098351_052021-O.jpg'
    },
    {
        nombre: 'Motorola Moto G100 128 GB',
        descripcion: 'lorem ipsum',
        precio: 2149900,
        categoria: 'CELULARES',
        img_url: 'https://m.media-amazon.com/images/I/815Oew9j7fL._AC_SL1500_.jpg'
    },
    {
        nombre: 'Motorola Moto G30 128 GB',
        descripcion: 'lorem ipsum',
        precio: 899256,
        categoria: 'CELULARES',
        img_url: 'https://comoto.vteximg.com.br/arquivos/ids/160630-800-800/g30.png?v=637595674957030000'
    },
    {
        nombre: 'Auriculares Apple AirPods Pro',
        descripcion: 'lorem ipsum',
        precio: 1024900,
        categoria: 'ACCESORIOS',
        img_url: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000'
    },
    {
        nombre: 'Cargador iPhone 20w tipo C',
        descripcion: 'lorem ipsum',
        precio: 100000,
        categoria: 'ACCESORIOS',
        img_url: 'https://m.media-amazon.com/images/I/51gFDOCj+rS._AC_SS450_.jpg'
    },
    {
        nombre: 'Cable Samsung Tipo C a C',
        descripcion: 'lorem ipsum',
        precio: 40000,
        categoria: 'ACCESORIOS',
        img_url: 'https://http2.mlstatic.com/D_NQ_NP_781992-MCO44042000202_112020-O.jpg'
    },
    {
        nombre: 'Audifonos Samsung Galaxy Buds Live',
        descripcion: 'lorem ipsum',
        precio: 349900,
        categoria: 'ACCESORIOS',
        img_url: 'https://falabella.scene7.com/is/image/FalabellaCO/9263352_1?wid=800&hei=800&qlt=70'
    },
    {
        nombre: 'Cargador Xiaomi Redmi Carga Rápida Usb Tipo C a Tipo A',
        descripcion: 'lorem ipsum',
        precio: 45000,
        categoria: 'ACCESORIOS',
        img_url: 'https://i.linio.com/p/d4a1c39eafe5e3a10e357b4fd87a55a5-product.jpg'
    },
    {
        nombre: 'Audifonos in-ear Xiaomi Redmi Airdots negro',
        descripcion: 'lorem ipsum',
        precio: 62000,
        categoria: 'ACCESORIOS',
        img_url: 'https://http2.mlstatic.com/D_NQ_NP_942862-MLA45258687178_032021-O.jpg'
    },
    {
        nombre: 'Cargador Motorola TurboPower USB-C 45W',
        descripcion: 'lorem ipsum',
        precio: 60000,
        categoria: 'ACCESORIOS',
        img_url: 'https://m.media-amazon.com/images/I/51hJPIt8ZlL._AC_SX522_.jpg'
    },
    {
        nombre: 'Audifonos Motorola Verve Buds 100',
        descripcion: 'lorem ipsum',
        precio: 40000,
        categoria: 'ACCESORIOS',
        img_url: 'https://falabella.scene7.com/is/image/Falabella/8426504_3?wid=800&hei=800&qlt=70'
    }
];

    getProductsByCategory( category: string ): IProduct[] {
        const productsCategory: IProduct[] = this.products.filter( item => item.categoria === category ) 
        return productsCategory;
    }
    
}
