# Tutorial de Next.js 14 Server Actions - App de Cadastro de Usuário

## Iniciando

1. **Faça o download/clone deste repositório exemplo**

2. **Após o donwload/clone, faça a instalação, abra o projeto no seu editor de código.**

```bash
   yarn
```

3. **Execute o servidor Next.js**
   ```bash
   yarn dev
   ```

## API

### Obter Todos os Usuário

- **Endpoint:** `http://localhost:3000/api/users`
- **Método:** `GET`
- **Resposta:** Array de Usuários

### Cadastrar um novo Usuário

- **Endpoint:** `http://localhost:3000/api/users`
- **Método:** `POST`
- **Corpo:**

```json
{
  "name": "Tarefa a Fazer",
  "birthday": "2024-01-01"
}
```

- **Resposta:** `Usuário adicionado com sucesso!`

## Realizando Requisições

- **Exemplo de Requisição POST:**

```javascript
const user = {
  name: "John Due",
  birthday: "2003-01-01",
};
// Opção 1: Usando fetch
fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro:", error));

// Opção 2: Usando axios
await axios.post("http://localhost:3000/api/users", user);
```
