import { Component } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

interface Country {
  name: string;
  image: string;
}
@Component({
  selector: 'app-stellar-esim',
  templateUrl: './stellar-esim.component.html',
  styleUrls: ['./stellar-esim.component.css']
})
export class StellarEsimComponent {
  searchText: string = '';
  countries: Country[] = [
    { name: 'Belgium', image: '../../../assets/img/esim/belgium.png' },
    { name: 'Finland', image: '../../../assets/img/esim/finland.png' },
    { name: 'Switzerland', image: '../../../assets/img/esim/switzerland.png' },
    { name: 'Germany', image: '../../../assets/img/esim/germany.png' },
    { name: 'Slovakia', image: '../../../assets/img/esim/slovakia.png' },
    { name: 'Belgium', image: '../../../assets/img/esim/belgium.png' },
    { name: 'Germany', image: '../../../assets/img/esim/germany.png'},
    { name: 'Finland', image: '../../../assets/img/esim/finland.png'},
    { name: 'Slovakia', image: '../../../assets/img/esim/slovakia.png'},
    { name: 'Belgium', image: '../../../assets/img/esim/belgium.png' },
    { name: 'Switzerland', image: '../../../assets/img/esim/switzerland.png' },
    { name: 'Slovakia', image: '../../../assets/img/esim/slovakia.png' },
    { name: 'Finland', image: '../../../assets/img/esim/finland.png'},
    { name: 'Belgium', image: '../../../assets/img/esim/belgium.png' },
    { name: 'Switzerland', image: '../../../assets/img/esim/switzerland.png' },
  ];
  filteredCountries: Country[] = [];

  ngOnInit() {
    this.filteredCountries = this.countries; 
  }

  filterCountries() {
    if (this.searchText.trim() === '') {
      this.filteredCountries = this.countries; 
    } else {
      this.filteredCountries = this.countries.filter(country =>
        country.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
// For owl
  countryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 32,
    autoplay: true,
    center: true,
    autoWidth: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 6,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 20,
    autoplay: true,
    center: true,
    autoWidth: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 6,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
    rtl: true,
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 23,
    center: true,
    autoplay: true,
    autoWidth: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
