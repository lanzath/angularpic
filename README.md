## Convenções do Angular: 
1. Arquivos são criados com nome em lowercase e extensão `exemplo.component.ts`
2. Nome da classe componente é escrita em Pascal Case: `export class ExemploComponent`
3. O template e estilização segue a mesma convenção do componente com suas respectivas extensões (`.html`, `.css`)
4. Separa-se os imports do Angular com os do desenvolvedor no `app.module.ts`

## Estilização:
Estilizações globais adicionais devem ser declaradas no arquivo `angular.json` de modo que elas sejam incluídas na build do app, tanto em dev como em produção.

## Angular CLI
- Criação de componente: `ng g c` (`ng generate component`

## Data-binding
1. one-way databinding: os dados fluem do componente para o template, utiliza-se colchetes [] para atributos e Angular Expression {{ propriedade }} para conteúdo

## Props
1. Inbound properties: utiliza-se o decorator `Input()` para indicar ao componente que a propriedade aceita receber um valor por um atributo do template

## Diretivas
1. *ngFor - Diretiva para iterar uma lista, sendo aplicada diretamente no componente
