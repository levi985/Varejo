import javax.persistence.*;
@Entity
public class Cliente {
    @Id
    private int id;
    private String nome;
    private String email;
    private String cidade;
    public Cliente() {}
    public Cliente(int id, String nome, String email, String cidade) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cidade = cidade;
    }
}

