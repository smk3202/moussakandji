import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashbord',
  templateUrl: './Formulaire.component.html',
  styleUrl: './Formulaire.component.css'
})
export class FormulaireComponent {
 activeLink: string = 'Application Forms'
  forms = [
    { name: 'Job Application Form Template', image: 'https://image.freepik.com/free-vector/registration-form-template-with-flat-design_23-2147978006.jpg' },
    { name: 'Rental Application Form Template', image: 'https://i.pinimg.com/originals/ab/e9/c7/abe9c7f255291ddd2466ca3aeee1a73c.jpg' },
    { name: 'Volunteer Application Form Template', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_96369670.jpg?auto=format&q=60&fit=max&w=930' },
    { name: 'Affiliate Application Form Template', image: 'https://i.pinimg.com/originals/3d/75/09/3d7509d549b92bd1def2a47acf2a1e9f.gif' },
    { name: 'Award Application Form Template', image: 'https://i.ytimg.com/vi/WTXGb5tqM10/maxresdefault.jpg' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://th.bing.com/th/id/OIF.b4fOIKdusz9v2kk46EaZzw?rs=1&pid=ImgDetMain' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://cdn.dribbble.com/users/4648886/screenshots/11144851/media/bf4a16204384b9f9d23d7f5ee0b9ed94.jpg' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://th.bing.com/th/id/OIP.NuWPIPuJvtSRlpNYNmYfvQHaFj?w=1200&h=900&rs=1&pid=ImgDetMain' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://th.bing.com/th/id/OIP.kKYiP8MbH-KI1uusAHPIIQHaFn?w=1584&h=1200&rs=1&pid=ImgDetMain' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://th.bing.com/th/id/OIP.HzHVj863v0d5az0_hGirVAHaFj?w=1600&h=1200&rs=1&pid=ImgDetMain' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://cdn.dribbble.com/userupload/4382791/file/original-77f844fa78e51dcecda35010cc9ce9a2.png?resize=1200x900' },
    { name: 'Brand Ambassador Application Form Template', image: 'https://th.bing.com/th/id/OIP.Z-QeN72gK44eHIUjRrvW3gHaHa?rs=1&pid=ImgDetMain' },



  ];

  constructor() { }

  ngOnInit(): void { }
  setActive(link: string): void {
    this.activeLink = link;
  }
}




