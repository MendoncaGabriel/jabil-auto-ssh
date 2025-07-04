## 🚀 Bem-vindo ao **Jabil SSH Server**

Este projeto conecta automaticamente a um servidor via SSH e executa comandos personalizados ao iniciar a sessão.

---

### 📦 Instalação

1. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Crie o arquivo `.env`:**

   Baseie-se no arquivo `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Preencha com suas credenciais SSH.

---

### ⚙️ Configuração Rápida

Crie um atalho do arquivo `server-ss.bat` na sua área de trabalho:

1. Localize o arquivo `server-ss.bat` na pasta raiz do projeto.
2. Clique com o botão direito > **Enviar para** > **Área de Trabalho (criar atalho)**.

Sempre que você quiser iniciar a sessão SSH automaticamente, **basta dar duplo clique nesse atalho**.

---

### ✅ O que esse projeto faz:

* Conecta a um servidor remoto via SSH.
* Executa comandos automáticos ao iniciar a sessão (`cd`, `sudo`, etc).
* Abre um terminal interativo onde você pode digitar novos comandos.
* Entra direto na diretorio `opt/`

---

### 🛠️ Requisitos

* Node.js instalado.
* Permissão de acesso ao servidor SSH.
