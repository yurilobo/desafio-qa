# Avenue - Desafio QA 

**O primeiro desafio é identificar 3 cenários que eu considero importante para a plataforma. Eu identifiquei esses:**


- **Cambio:** Como o core da plataforma é a possibilidade de investimentos diretamente no mercado financeiro americano, é impresindivel que a conversão de moeda esteja funcionando corretamente.Tanto de Real para Dollar quanto de Dollar para real. Seguem alguns exemplos:
   ```sh 
    •Tansferencia de cambio com sucesso.

    -Cambio de real para dolar.
    -Cambio de real para dollar acima de 3000 dollares diários.
    -Cambio com saldo inferior ao cambio desejado.
    -Cambio de dollar para real fora do horario de negocioação(Mercado funciona das09:00 às 17:00 em dias úteis).
    ```


- **Saldos:** Esse com certeza é um do principais cénarios a ser observado, pois esta intimamente ligado as seguranças e inseguranças dos clientes, é natural que para alguns clientes uma parte considerável de seu patrimonio esta numa agencia financeira, quando por qualquer motivo perde o acesso a consultas, depositos e retiradas o cliete fica numa situaçao de fragilidade. A falta de acesso a consultas de saldos, depositos e retiradas pode por em risco mais operações, como a Ordem de compra. Seguem alguns exemplos:
   ```sh 
    •Consulta de saldo com sucesso.

    -Consulta no patrimonio nos EUA.
    -Consulta no patrimonio no Brasil.
    -Consulta de saldo em ações.
    -Consulta de saldos em fundos.
    ```


- **Ordem de compra:** A ordem de compra está ligada diretamente a necessidade do cliente, que no caso é comprar uma fração de ações no mercado americano, quando essa funcionalidade está fora do ar pode gerar muitos prejuisos, pois imposibilita o cliente de fazer novas compras, também pode afetar a estratégia do cliente (no caso do daytrade, ou swing trade, podendo fazer com que ele compre ou venda um ação com um preço maior ou menor que o esperado). Seguem alguns exemplos
  ```sh 
    •Realização de ordem de compra.

    -Compra de ETF s de Renda Fixa com poder de compra menor do que o valor da ordem.
    -Tentativa de compra fora do horario de funcionamento do mercado.
    -Ordem de compra com Stop.
    ```



- **Outros Cenários:** Não menos importante, é bom lembrar de cenários como o do cadastro, que é um dos primeiros contatos com a plataforma, e o do login que é a porta de entrada para o ambiente de investimento, onde o cliente tem acesso a todos os usos da plataformar como consultar saldo, ordem de compras, investimentos em bdrs, investimento em criptos, relatórios, banking e outras funcionalidades.



**O segundo desafio é criar uma automação UI de  algum dos cenários sugeridos**




**O terceiro desafio é criar uma automação de API**




# Instalação do projeto:
Sistema operacional utilizado:

- Windows 10 Pro

***
# Pré requisitos:
- Node.js versão 16 ou superior
- VSCode

**1. Instalação**

```sh
 1. Faça o fork no projeto.
 2. Clone o projeto na sua maquina.
 3- Acessa o diretorio
```

**2. Instale o cypress**

```sh
 npm install cypress@9.5.1 --save-dev 
```

**3. Teste a instalação e crie uma estrutura básica do cypres no seu diretório:**

```sh
 npx cypress open
```
**4. Rodar os testes:**

**UI**

```bash 
    npm run cypress:open
```
