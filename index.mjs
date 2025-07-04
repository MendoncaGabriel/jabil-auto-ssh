import { Client } from 'ssh2'
import readline from 'readline'
import "dotenv/config"

const env = process.env
if(
  !env["SSH_HOST"] ||
  !env["SSH_PORT"] ||
  !env["SSH_USERNAME"] ||
  !env["SSH_PASSWORD"] 
){
  throw new Error("Credenciais inválidas")
}


const conexao = new Client()

conexao.on('ready', () => {
  console.log('✅ Conexão SSH estabelecida. Iniciando terminal interativo...\n')

  conexao.shell((err, stream) => {
    if (err) throw err

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    })

    // Envia os comandos automáticos ao entrar
    stream.write('cd ..\n')
    stream.write('cd ..\n')
    stream.write('cd opt/\n')
    stream.write('sudo su\n')
    stream.write(env["ROOT_PASSWORD"] + '\n')

    // Mostra a saída vinda do servidor
    stream.on('data', (data) => {
      process.stdout.write(data.toString())
    })

    stream.stderr.on('data', (data) => {
      process.stderr.write(`❌ STDERR: ${data.toString()}`)
    })

    stream.on('close', () => {
      console.log('\n🔒 Conexão encerrada.')
      conexao.end()
      rl.close()
    })

    // Captura comandos digitados no terminal local
    rl.on('line', (line) => {
      stream.write(line.trim() + '\n')
    })

    rl.on('SIGINT', () => {
      console.log('\n❌ Encerrando conexão...')
      stream.end('exit\n')
    })

    rl.prompt()
  })
}).connect({
  host: env["SSH_HOST"],
  port: env["SSH_PORT"],
  username: env["SSH_USERNAME"],
  password: env["SSH_PASSWORD"],
})
