# 🎨 Pasta `css/`

Contém todos os estilos do site.

## 📁 Conteúdo

| Caminho | Função |
| --- | --- |
| `style.css` | CSS principal e compartilhado: estiliza `index.html`, `sobre.html`, `filmes.html` e `contato.html` e o que for comum a todas as páginas (header, nav e footer). |
| `filmes/` | CSS exclusivo de cada filme, organizado em subpastas por gênero (`acao`, `aventura`, `comedia`, `ficcao-cientifica`, `romance`, `animacao`, `terror`). |

## 📌 Regras

- 🎞️ Há **um arquivo CSS para cada filme** (35 no total), com o mesmo nome da página HTML. Exemplo: `css/filmes/terror/psicose.css` é usado por `filmes/terror/psicose.html`.
- 🌈 Os CSS dos filmes definem a paleta de cores, o tema visual e a imagem de fundo da obra. Exemplo: terror usa tons de verde-escuro, preto e vermelho.
- 🚫 Não tem nos CSS dos filmes estilos de header, nav e footer. Isso fica em `style.css`.
- 🎭 Em `filmes.html`, a paleta de cores muda de acordo com o gênero selecionado, seguindo a mesma ideia.
