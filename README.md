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
2. o BrowserModule é responsável pelo carregamento de todas as diretivas utilizadas na aplicação, e deve ser chamado somente no módulo raíz `app`

## Injeção de dependência
As dependências necessárias devem ser declaradas no constructor de cada componente, assim o Angular "injeta" a dependência solicita na classe instanciada, o provedor desta dependência (provider) deve ser declarado no `.module.ts`

## Bindings
- One-way data binding [], unidirecional, o dado sai do componente `.ts` para o template `.html`
- Event binding (), unidericional, o evento sai do template `.html` para o componente `.ts` e usa o $ para emissão de eventos para o componente.

## Pipes
Utilizado para formatação de dados no template ou validação.

## Resolvers
Utilizado nas rotas para determinar uma ação antes do carregamento do componente daquela rota.
Útil na resolução de dados assíncronos que precisam ser processados antes da inicialização do componente.
