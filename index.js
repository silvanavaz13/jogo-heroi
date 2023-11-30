class heroiAventura{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }


atacar() {
    let ataque;
    switch (this.tipo){
        case 'mago':
            ataque = 'magia';
            break;
        case 'guerreiro':
            ataque = 'espada';
            break;
        case 'monge':
            ataque = 'artes marciais';
            break;
        case 'ninja':
            ataque = 'shurike';
            break;
        default:
            ataque = 'ataque indefinido';                
    }

    const mensage = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
    console.log(mensage);
    }
}

const heroiMago = new heroiAventura("Cedric", 120, "mago");
heroiMago.atacar();

const heroiMonge = new heroiAventura("Buda", 40, "monge");
heroiMonge.atacar();