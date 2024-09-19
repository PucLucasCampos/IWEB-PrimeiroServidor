/*
    Servidor simples
    usando o http sem express.
*/
import http from "http";

const port = 3000;

// criar duas funções: uma calcula a area do circulo
// outra: comprimento da circunferencia

const pi: number = 3.1415;
function calcularAreaCirculo(raio:number) : number {
    return pi * (raio * raio);
}

function calcCompCircunferencia(raio:number) : number {
        return 2 * pi * raio;
}

const server = http.createServer((req, res)=>{
    // vou criar as rotas do meu servidor aqui.
    //res.writeHead(200, {'Content-type': 'text/plain'}); // text/plain -> texto limpo
    if (req.url === "/calcCompCircunferencia"){
        res.writeHead(200, {'Content-type': 'text/plain'});
        const comp = calcCompCircunferencia(10);
        res.end(comp.toString());
    }else if (req.url === "/calcAreaCirculo"){
        res.writeHead(200, {'Content-type': 'text/plain'});
        const area = calcularAreaCirculo(10);
        res.end(area.toString());
    }else {
        res.writeHead(400, {'Content-type': 'text/plain'}); // nao pode alterar o cabeçalho da resposta
        res.end('Servico inexistente')
    }
});

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});

/*
    Desafio: numa requisição HTTP existem verbos, esses verbos são muitos porem os mais comuns são: get, put, post.
        
        Na requisição HTTP informamos tanto o verbo quanto os parametros que o serviço deve receber.
        
        Os parametros se dividem em dois tipos: Parametros de cabeçalhos (Headers) e  Parametros que podem ir no corpo (body) da requisição.

        Quando vamos usar um serviço que não precisa receber um parametro de dados sensivel, como senha, podemos enviar o parametro no corpo da requisição.
        Porem, quando precisamos enviar um dado sensivel fazemos isto enviando o paramreto como Header (No Header)

    Tarefa: Chamar os dois serviços passando um raio dinamico tanto no Header tanto no Body

    Aprender a invocar o serviço usando o comando `curl` (comand url)
    
    Postman
*/