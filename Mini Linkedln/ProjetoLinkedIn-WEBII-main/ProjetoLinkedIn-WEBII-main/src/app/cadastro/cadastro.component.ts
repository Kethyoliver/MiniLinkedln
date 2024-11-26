import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Inicializa o formulário com controles
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const userData = this.cadastroForm.value; // Pega os valores do formulário

      this.http.post('http://localhost:8080/cadastrar', userData).subscribe(
        () => {
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/feed']);
        },
        (error) => {
          console.error('Erro ao cadastrar:', error);
          alert('Ocorreu um erro ao tentar cadastrar.');
        }
      );
    } else {
      console.log('Formulário inválido');
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
