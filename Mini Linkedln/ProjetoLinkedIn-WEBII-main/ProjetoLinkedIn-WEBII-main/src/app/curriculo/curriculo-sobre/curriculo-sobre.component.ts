import { Component, Input } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculo-sobre',
  templateUrl: './curriculo-sobre.component.html',
  styleUrls: ['./curriculo-sobre.component.css']
})
export class CurriculoSobreComponent {
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