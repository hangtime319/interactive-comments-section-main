# Interactive Comments Section

👀 **[Live Preview (Acesse o projeto online aqui)](https://hangtime319.github.io/interactive-comments-section-main/)**

Uma aplicação de seção de comentários interativa e totalmente responsiva. Este projeto simula um ambiente real de discussão, permitindo a interação entre usuários através de comentários, respostas e um sistema de votação.

## 🚀 Funcionalidades

- **CRUD de Comentários:** Criar, ler, atualizar (editar) e deletar comentários.
- **Sistema de Respostas (Threads):** Capacidade de responder diretamente a comentários específicos, com recuo visual (borda lateral) para fácil identificação.
- **Sistema de Votação:** Botões interativos de *upvote* e *downvote* para alterar o placar dos comentários (não permitindo valores negativos).
- **Persistência de Dados:** Integração com o `localStorage` do navegador para garantir que comentários, edições e votos sejam mantidos mesmo após o recarregamento da página.
- **Validação de Exclusão:** Modal de confirmação (Overlay) antes de deletar um comentário para evitar ações acidentais.
- **Design 100% Responsivo:** Abordagem *Mobile First* garantindo que a interface se adapte perfeitamente a smartphones, tablets e desktops de telas grandes.
- **Animações e Transições:** Efeitos suaves de *hover* em botões e uma transição elegante de *slide-down* no formulário de respostas utilizando manipulação de CSS Grid.

## 🛠️ Tecnologias Utilizadas

- **[React JS](https://react.dev/)** (Inicializado via Vite para maior performance de desenvolvimento)
- **[Tailwind CSS](https://tailwindcss.com/)** (Estilização utilitária e construção do layout responsivo)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

## 🧠 Aprendizados e Foco do Projeto

Este projeto foi construído com foco na aplicação prática dos fundamentos do **React JS** e na arquitetura escalável de aplicações front-end. Os principais conceitos abordados incluem:

- **Componentização Inteligente:** Quebra da interface em componentes altamente reutilizáveis com responsabilidades únicas (ex: `ScoreBox`, `Avatar`, `DeleteModal`).
- **Hooks Essenciais do React:**
  - `useState`: Gerenciamento dinâmico de interfaces (Modo de Edição, Abertura de Modais, Expansão de Respostas) e controle de inputs (*Controlled Components*).
  - `useContext`: Implementação da Context API (`UserContext`) para gerenciar e distribuir os dados do usuário ativo (`currentUser`) por toda a árvore de componentes, resolvendo o problema de *Prop Drilling*.
  - `useEffect`: Sincronização contínua do estado da aplicação com a API nativa do `localStorage`.
- **Elevação de Estado (Lifting State Up):** Comunicação eficiente entre componentes filhos e pais através da passagem de funções por *props*.
- **Estruturas de Dados:** Manipulação avançada de arrays e objetos utilizando métodos nativos do JavaScript (como `.map()` e `.filter()`) para atualizar e deletar nós específicos dentro de uma estrutura aninhada de comentários e respostas.
- **CSS Grid & Flexbox:** Domínio do layout bidimensional e unidimensional para reorganizar completamente a estrutura dos *cards* de comentário entre as versões mobile e desktop sem a necessidade de duplicar código HTML.

