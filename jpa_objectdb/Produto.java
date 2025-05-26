import javax.persistence.*;
@Entity
public class Produto {
    @Id
    private int id;
    private String nome;
    private String categoria;
    private double preco;
    public Produto() {}
    public Produto(int id, String nome, String categoria, double preco) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
    }
}

