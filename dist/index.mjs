var i=(o,e)=>()=>(o&&(e=o(o=0)),e);var S=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);import"dotenv/config";import{z as n}from"zod";var d,s,r,c=i(()=>{d=n.object({SSH_HOST:n.coerce.string(),SSH_PORT:n.coerce.number(),SSH_USERNAME:n.coerce.string(),SSH_PASSWORD:n.coerce.string(),ROOT_PASSWORD:n.coerce.string()}),s=d.safeParse(process.env);if(s.success===!1)throw console.error("Invalid environment variables",s.error.format()),new Error("Invalid environment variables");r=s.data});import{Client as a}from"ssh2";import"dotenv/config";var l=S(()=>{c();console.log(`
==============================
Bem-vindo ao JABIL SERVER SSH!
==============================
`);var t=new a;t.on("ready",()=>{console.log(`\u2705 Conex\xE3o SSH estabelecida. Iniciando terminal interativo...
`),t.shell({term:"xterm-color"},(o,e)=>{if(o)throw o;process.stdin.setRawMode(!0),process.stdin.resume(),process.stdin.pipe(e),e.pipe(process.stdout),e.write(`cd ..
`),e.write(`cd ..
`),e.write(`cd opt/
`),e.write(`sudo su
`),e.write(r.ROOT_PASSWORD+`
`),setTimeout(()=>e.write(`clear
`),500),e.on("close",()=>{console.log(`
\u{1F512} Conex\xE3o encerrada.`),t.end(),process.stdin.setRawMode(!1),process.stdin.pause()})})}).connect({host:r.SSH_HOST,port:Number(r.SSH_PORT),username:r.SSH_USERNAME,password:r.SSH_PASSWORD})});export default l();
