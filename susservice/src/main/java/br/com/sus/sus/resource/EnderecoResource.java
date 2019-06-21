package br.com.sus.sus.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sus.sus.domain.Endereco;
import br.com.sus.sus.service.EnderecoService;

@RestController
@RequestMapping("/api")
public class EnderecoResource {
	
	@Autowired
	private EnderecoService service;
	
	@GetMapping("/endereco")
	public List<Endereco> getEndereco(){
		return service.getEnderecos();
	}

}