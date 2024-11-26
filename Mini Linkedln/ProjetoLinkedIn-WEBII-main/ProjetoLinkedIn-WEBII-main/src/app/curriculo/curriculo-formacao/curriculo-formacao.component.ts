import { Component, Input } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculo-formacao',
  templateUrl: './curriculo-formacao.component.html',
  styleUrls: ['./curriculo-formacao.component.css']
})
export class CurriculoFormacaoComponent {
  @Input() formacao: any;
  dados: any = (data as any).default;
  selectedUser: any;
  userId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Capturando o 'id' da rota
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