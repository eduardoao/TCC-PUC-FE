import { SegurancaService } from './../../../services/seguranca.service';
import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Criminalidade } from 'src/app/model/criminalidade';

@Component({
  selector: 'app-homicidio',
  templateUrl: './homicidio.component.html',
  styleUrls: ['./homicidio.component.css']
})
export class HomicidioComponent implements OnInit {

 
  homicidio: Criminalidade[]
  errMess: string;


constructor(private criminalidadeservice: SegurancaService) {}

ngOnInit() {  
  this.retornarDadosHomicidio()
}

retornarDadosHomicidio(){
  this.criminalidadeservice.retornaCriminalidadeAnoCorrente()
  .subscribe( (criminalidade) => {   
    this.homicidio = criminalidade.filter(t => t.tipo == "Homicidio")
    console.log(this.homicidio)
  },    
  errmess => this.errMess = (errmess as any) );
}

  zoom: number = 12;    
  lat: number = -23.5405;
  long: number = -46.6333;   
  googleMapType = 'satellite';

  markers: Criminalidade[] = []
  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      long: $event.coords.lng,
      draggable: true,
      label: '',
      quantidade: 1 ,
      tipo: ''     
    });
  }

  markerDragEnd(m: Criminalidade, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  

  ngAfterViewInit() {}
 
}


