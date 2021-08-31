import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cadastroUsuario } from './cadastro-usuario';
  
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {
  constructor(private http: HttpClient) { }

  REST_API_SERVER = "https://localhost:44303/CadastroUsuario/";

  cadastroUsuario: cadastroUsuario = new cadastroUsuario();
  public dataSource:any[] = []
  
  ngOnInit(): void {
    this.carregarUsuarios()
    debugger;
  }

  carregarUsuarios() {
    this.http.get(this.REST_API_SERVER + "Get").subscribe((data: any)=>{
      this.dataSource = data;
      debugger;
    });
  }

  salvar(){
    debugger;
    this.http.post(this.REST_API_SERVER + "Create", this.cadastroUsuario).subscribe(()=>{
      //this.cadastroUsuario = new cadastroUsuario();
      this.carregarUsuarios()
    });    
  }  

  deletar(cad:cadastroUsuario){
    debugger;
    this.http.post(this.REST_API_SERVER + "Delete", cad.id).subscribe(()=>{
      this.carregarUsuarios()
    });    
  }  
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
