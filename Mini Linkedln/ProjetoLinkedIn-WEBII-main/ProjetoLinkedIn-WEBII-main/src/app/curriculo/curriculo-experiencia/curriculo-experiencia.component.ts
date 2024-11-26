import { Component, Input } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculo-experiencia',
  templateUrl: './curriculo-experiencia.component.html',
  styleUrls: ['./curriculo-experiencia.component.css']
})
export class CurriculoExperienciaComponent {
  @Input() experiencia: any;
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