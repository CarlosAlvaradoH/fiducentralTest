import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extractos',
  templateUrl: './extractos.component.html',
  styleUrls: ['./extractos.component.css']
})
export class ExtractosComponent implements OnInit {

  userInfo = [
    {year: 2022,
      ext: [
        // {
        //   mes: 'Enero',
        //   concepto: 'Concepto - A',
        //   link: '../../../../assets/files/extractos/pdf/Enero.pdf'
        // },
        // {
        //   mes: 'Febrero',
        //   concepto: 'Concepto - C',
        //   link: '../../../../assets/files/extractos/pdf/Febrero.pdf'
        // },
        // {
        //   mes: 'Marzo',
        //   concepto: 'Concepto - G',
        //   link: '../../../../assets/files/extractos/pdf/Marzo.pdf'
        // },
        {
          mes: 'Abril',
          concepto: 'Concepto - B',
          link: '../../../../assets/files/extractos/pdf/Abril.pdf'
        },
        {
          mes: 'Mayo',
          concepto: 'Concepto - D',
          link: '../../../../assets/files/extractos/pdf/Mayo.pdf'
        },
        {
          mes: 'Junio',
          concepto: 'Concepto - C',
          link: '../../../../assets/files/extractos/pdf/Junio.pdf'
        }
      ]
    },
    {year: 2023,
      ext: [
        {
          mes: 'Enero',
          concepto: 'Concepto - A',
          link: '../../../../assets/files/extractos/pdf/Enero.pdf'
        },
        {
          mes: 'Febrero',
          concepto: 'Concepto - C',
          link: '../../../../assets/files/extractos/pdf/Febrero.pdf'
        },
        {
          mes: 'Marzo',
          concepto: 'Concepto - G',
          link: '../../../../assets/files/extractos/pdf/Marzo.pdf'
        },
        {
          mes: 'Abril',
          concepto: 'Concepto - B',
          link: '../../../../assets/files/extractos/pdf/Abril.pdf'
        },
        {
          mes: 'Mayo',
          concepto: 'Concepto - D',
          link: '../../../../assets/files/extractos/pdf/Mayo.pdf'
        },
        {
          mes: 'Junio',
          concepto: 'Concepto - C',
          link: '../../../../assets/files/extractos/pdf/Junio.pdf'
        }
      ]
    },
    {year: 2024,
      ext: [
        {
          mes: 'Enero',
          concepto: 'Concepto - A',
          link: '../../../../assets/files/extractos/pdf/Enero.pdf'
        },
        {
          mes: 'Febrero',
          concepto: 'Concepto - C',
          link: '../../../../assets/files/extractos/pdf/Febrero.pdf'
        },
        // {
        //   mes: 'Marzo',
        //   concepto: 'Concepto - G',
        //   link: '../../../../assets/files/extractos/pdf/Marzo.pdf'
        // },
        // {
        //   mes: 'Abril',
        //   concepto: 'Concepto - B',
        //   link: '../../../../assets/files/extractos/pdf/Abril.pdf'
        // },
        // {
        //   mes: 'Mayo',
        //   concepto: 'Concepto - D',
        //   link: '../../../../assets/files/extractos/pdf/Mayo.pdf'
        // },
        // {
        //   mes: 'Junio',
        //   concepto: 'Concepto - C',
        //   link: '../../../../assets/files/extractos/pdf/Junio.pdf'
        // }
      ]
    }
    
  ];


  constructor() { }

  downloadPdf(user: any) {
    const link = document.createElement('a');
    link.href = user.link;  // Ruta relativa al archivo PDF en la carpeta `assets`
    link.download = `${user.mes}.pdf`;  // Nombre del archivo para la descarga
    link.click();
  }

  ngOnInit() {
  }

}
