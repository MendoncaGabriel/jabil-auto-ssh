import { Client } from "ssh2";
import "dotenv/config";
import { env } from "./env";

console.log(`
==============================
Bem-vindo ao JABIL SERVER SSH!
==============================
`)

const connection = new Client();

connection.on("ready", () => {
  console.log('✅ Conexão SSH estabelecida. Iniciando terminal interativo...\n');
  connection.shell({ term: "xterm-color" }, (error, stream) => {
    if (error) {
      throw error;
    }

    // Deixa o terminal em modo raw para funcionar tab, ctrl + c, etc
    process.stdin.setRawMode(true)
    process.stdin.resume()
    process.stdin.pipe(stream)
    stream.pipe(process.stdout)

    // Comandos automáticos ao entrar
    stream.write('cd ..\n')
    stream.write('cd ..\n')
    stream.write('cd opt/\n')
    stream.write('sudo su\n')
    stream.write(env.ROOT_PASSWORD + '\n')
    setTimeout(() => stream.write('clear\n'), 500)

    stream.on('close', () => {
      console.log('\n🔒 Conexão encerrada.')
      connection.end()
      process.stdin.setRawMode(false)
      process.stdin.pause()
    })

  })
}).connect({
  host: env.SSH_HOST,
  port: Number(env.SSH_PORT),
  username: env.SSH_USERNAME,
  password: env.SSH_PASSWORD,
})


