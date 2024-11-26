import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json'; // Importa o JSON
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculo-perfil',
  templateUrl: './curriculo-perfil.component.html',
  styleUrls: ['./curriculo-perfil.component.css']
})
export class CurriculoPerfilComponent implements OnInit {
  dados: any = (data as any).default; 
  selectedUser: any;
  userId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId);

      if (this.userId && this.dados.usuario[this.userId]) {
        this.selectedUser = this.dados.usuario[this.userId]; 
      } else {
        console.error("Usuário não encontrado ou ID inválido");
      }
    });
  }
}
