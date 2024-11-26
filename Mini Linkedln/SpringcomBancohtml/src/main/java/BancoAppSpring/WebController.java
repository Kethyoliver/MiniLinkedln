package BancoAppSpring;

import conecta.conectar;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200/", methods = {RequestMethod.POST})
public class WebController {

    // Método para cadastrar usuário
    @RequestMapping(value = "/cadastrar", method = RequestMethod.POST)
    public ResponseEntity<Map<String, String>> cadastrar(@RequestBody Usuario usuario) {
        Map<String, String> response = new HashMap<>();
        try {
            System.out.println("Cadastrando usuário:");
            System.out.println("Nome: " + usuario.getNome());

            conectar obj = new conectar();
            obj.dataBaseInsert(usuario.getNome(), usuario.getTelefone(), usuario.getEmail(), usuario.getSenha());

            response.put("message", "Usuário cadastrado com sucesso!");
            return ResponseEntity.ok(response);
        } catch (DataIntegrityViolationException e) {
            throw e; // Lança a exceção para ser tratada mais acima, se necessário
        } catch (Exception e) {
            response.put("message", "Ocorreu um erro inesperado. Tente novamente.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
   
    }

