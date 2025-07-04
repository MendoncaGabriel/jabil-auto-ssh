## 🚀 Jabil SSH Server

Este projeto conecta automaticamente a um servidor via **SSH** e executa comandos personalizados assim que a conexão é estabelecida.

---

### 📥 Instalação

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Compile o projeto:**

   ```bash
   npm run build
   ```

3. **Configure o ambiente:**

   Copie o arquivo `.env.example` e preencha com seus dados de conexão:

   ```bash
   cp .env.example .env
   ```

---

### ⚙️ Como usar

Para facilitar, crie um atalho na área de trabalho:

1. Vá até o arquivo `server-ss.bat` na raiz do projeto.
2. Clique com o botão direito → **Enviar para** → **Área de trabalho (criar atalho)**.
3. Para iniciar a conexão, **clique duas vezes no atalho**.

---

### ✅ Funcionalidades

* Conecta automaticamente a um servidor remoto via SSH.
* Executa comandos assim que a sessão começa (ex: `cd`, `sudo`, etc).
* Inicia no diretório `/opt`.
* Abre um terminal interativo para você digitar comandos.
* Interface simples, rápida e direta no terminal.

---

### 🧰 Requisitos

* **Node.js** instalado no computador.
* Permissões de acesso ao servidor SSH.
