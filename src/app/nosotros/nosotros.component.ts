import { Component } from '@angular/core';
import { EquipoService } from '../equipo.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {



  constructor(private servicio:EquipoService)
  {
    
  }
}
