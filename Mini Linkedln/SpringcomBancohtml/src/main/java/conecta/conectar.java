package conecta;

import java.sql.*;

public class conectar {

    private static Connection conexao_MySql = null;
    private static String localBD = "127.0.0.1";
    private static String LINK = "jdbc:mysql://" + localBD + ":3307/usuario";
    private static final String usuario = "root";
    private static final String senha = "";

    // Método para fazer a conexão com um banco de dados MySql
    public Connection connectionMySql() {
        try {
            conexao_MySql = DriverManager.getConnection(LINK, usuario, senha);
            System.out.println("Conexão OK!");
        } catch (SQLException e) {
            throw new RuntimeException("Ocorreu um problema na conexão com o BD", e);
        }
        return conexao_MySql;
    }

    public void consulta(Connection con) {
        try {
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM usuarios");
            System.out.println("Consulta ao banco:");
            while (rs.next()) {
                System.out.println(" - Nome: " + rs.getString("nome")
                        + " - Telefone: " + rs.getString("telefone")
                        + " - Email: " + rs.getString("email")
                        + " - Senha: " + rs.getString("senha"));
            }
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public String dataBaseSelect(int cod) {
        Connection connection = connectionMySql();
        String x = "";
        String sql = "SELECT nome, telefone, email, senha FROM usuarios WHERE codigo=?";
        try (PreparedStatement preparedStmt = connection.prepareStatement(sql)) {

            // Substitui o '?' pelo valor do parâmetro
            preparedStmt.setInt(1, cod);
            ResultSet result = preparedStmt.executeQuery();

            // Processa o resultado
            while (result.next()) {
                String nome = result.getString("nome");
                String telefone = result.getString("telefone");
                String email = result.getString("email");
                String senha = result.getString("senha");

                System.out.println("Nome: " + nome);
                System.out.println("Telefone: " + telefone);
                System.out.println("Email: " + email);
                System.out.println("Senha: " + senha);

                x = nome;
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return x;
    }

    public void dataBaseInsert(String Nome, String Telefone, String Email, String Senha) {
        Connection connection = connectionMySql();
        String sql = "INSERT INTO usuarios (nome, telefone, email, senha) VALUES (?, ?, ?, ?)";
        try (PreparedStatement preparedStmt = connection.prepareStatement(sql)) {

            // Substitui os '?' pelos valores fornecidos
            preparedStmt.setString(1, Nome);
            preparedStmt.setString(2, Telefone);
            preparedStmt.setString(3, Email);
            preparedStmt.setString(4, Senha);

            // Executa o comando
            preparedStmt.executeUpdate();
            System.out.println("Dados inseridos com sucesso!");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void closeConnectionMySql(Connection con) {
        try {
            if (con != null) {
                con.close();
                System.out.println("Conexão encerrada com sucesso.");
            }
        } catch (SQLException e) {
            throw new RuntimeException("Ocorreu um problema para encerrar a conexão com o BD.", e);
        }
    }
}