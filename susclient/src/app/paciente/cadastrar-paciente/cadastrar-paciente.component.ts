import { Endereco } from './../../domain/Endereco';
import { Sexo } from './../../domain/Sexo';
import { ComumServiceService } from './../../comum-service.service';
import { Estado } from './../../domain/Estado';
import { Municipio } from './../../domain/Municipio';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/domain/Paciente';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {

  paciente: Paciente = new Paciente;
  estados: Estado[] = new Array;
  estado: Estado = new Estado;
  municipio: Municipio = new Municipio;
  municipios: Municipio[] = new Array;
  sexo: Sexo[] = new Array;
  endereco: Endereco = new Endereco;

  constructor(private servico: ComumServiceService) { }

  ngOnInit() {
    this.listarEstado();
    this.listarMunicipio();
    this.listarSexo();
  }

  listarEstado() {
    this.servico.getEstados().subscribe(resposta => this.estados = resposta);
  }

  listarMunicipio() {
    this.servico.getMunicipios().subscribe(resposta => this.municipios = resposta);
  }

  listarSexo() {
    this.servico.getSexo().subscribe(resposta => this.sexo = resposta);
  }

  cadastrarEndereco() {
    this.servico.cadastrarEndereco(this.endereco).subscribe(resultado => {
        alert('Cadastro salvo com sucesso!');
        console.log(this.endereco);
    });
  }

  cadastrar() {
    this.servico.cadastrarPaciente(this.paciente).subscribe(resultado => {
      this.cadastrarEndereco();
      if (this.endereco.id != null) {
        this.paciente.endereco.id === this.endereco.id;
      }
        alert('Cadastro salvo com sucesso!');
        console.log(this.paciente);
    });
  }

}
