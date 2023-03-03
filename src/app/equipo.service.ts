import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  public equipo:Array<any> = [
    {
      nombre:'Jorgito',
      especialidad:'Java',
      descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, id veritatis tempore eaque soluta ex molestiae a fuga debitis cupiditate asperiores, tenetur cum fugiat quia animi laudantium dignissimos maiores beatae?'
    },
    {
      nombre:'Maria',
      especialidad:'CSS',
      descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, id veritatis tempore eaque soluta ex molestiae a fuga debitis cupiditate asperiores, tenetur cum fugiat quia animi laudantium dignissimos maiores beatae?'
    },

  ]

  constructor() { 
    console.log('Funcionando servicio')
  }

  obtEquip()
  {
    return this.equipo;
  }
}
