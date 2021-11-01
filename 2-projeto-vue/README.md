### CLI Vue

- O **CLI** é uma ferramenta de linha de comando do Vue;
- Possibilita **criar e configurar** projetos de forma mais avançada;
- **Por exemplo:** adicionar o Vue Router desde a instalação do projeto;
- Sendo assim flexibilizando muito o código;

---

### Componentes

- É por meio de **componentes** que podemos dividir o nosso layout em partes;
- **Cada componente tem a sua responsabilidade**, por exemplo: um componente que é uma tabela e outro que é um rodapé;
- Dividir as entidades desta maneira deixa o projeot com uma **separação de responsabilidades** maior;
- Cada um tendo seu Css e também os dados que manipula;

---

### Dados nos componentes

- Os componentes podem conter dados;
- Podemos **inicializar já com algum valor** e também modificar durante a execução do programa;
- Os dados ficam em uma função chamada **data**;
- Está função deve retornar os dados em **formato de objeto**;

---

### Life cycle Hooks

- Os **Life Cycle Hooks** são eventos que podem ser ativados em determinadas partes da execução do programa;
- Exemplo: **Created**;
- Executa o código a partir do momento que o componente é criado;
- Estes gatilhos são interessantes para alterar a aplicação em diversas etapas diferentes;

---

### Hierarquia de Componentes

- É comum **componentes terem outros componentes** que dependem deles;
- Ou seja, criamos uma **árvore de componentes**;
- Precisamos tomar cuidado para isso não virar uma bagunça;
- Com essa divisão de componentes em subcomponentes, separamos mais ainda as responsabilidades de cada um dos componentes;
