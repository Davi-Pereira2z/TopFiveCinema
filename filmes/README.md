# 🎬 Pasta `filmes/`

Contém as **35 páginas individuais de filmes** (5 filmes × 7 gêneros), separadas em uma subpasta por gênero.

> 📌 A página `filmes.html`, que lista os gêneros, fica na raiz do projeto e não nesta pasta.

## 📁 Subpastas e arquivos

| Pasta | Gênero | Páginas |
| --- | --- | --- |
| `acao/` | 💥 Ação | `o_cavaleiro_das_trevas.html`, `o_exterminador_do_futuro_2.html`, `os_sete_samurais.html`, `gladiador.html`, `leon_o_profissional.html` |
| `aventura/` | 🗺️ Aventura | `o_senhor_dos_aneis_o_retorno_do_rei.html`, `o_senhor_dos_aneis_a_sociedade_do_anel.html`, `o_senhor_dos_aneis_as_duas_torres.html`, `tres_homens_em_conflito.html`, `vingadores_ultimato.html` |
| `comedia/` | 😂 Comédia | `a_vida_e_bela.html`, `de_volta_para_o_futuro.html`, `intocaveis.html`, `tempos_modernos.html`, `luzes_da_cidade.html` |
| `ficcao-cientifica/` | 🚀 Ficção Científica | `a_origem.html`, `interestelar.html`, `matrix.html`, `star_wars_episodio_v.html`, `star_wars_episodio_iv.html` |
| `romance/` | ❤️ Romance | `forrest_gump.html`, `a_felicidade_nao_se_compra.html`, `casablanca.html`, `cinema_paradiso.html`, `your_name.html` |
| `animacao/` | 🎨 Animação | `a_viagem_de_chihiro.html`, `o_rei_leao.html`, `homem_aranha_aranhaverso.html`, `o_tumulo_dos_vagalumes.html`, `wall_e.html` |
| `terror/` | 👻 Terror/Horror | `o_silencio_dos_inocentes.html`, `alien_o_oitavo_passageiro.html`, `psicose.html`, `o_iluminado.html`, `aliens_o_resgate.html` |

## 🧱 Padrão das páginas

Todas as páginas seguem o mesmo modelo HTML, com a estrutura: botão Voltar → capa + ficha técnica + sinopse → trailer → onde assistir.

- 📝 O nome do arquivo é o nome do filme em minúsculo, sem acentos e com `_` no lugar dos espaços.
- 🎨 Cada página carrega o CSS compartilhado (`css/style.css`) e o CSS exclusivo do filme (`css/filmes/GENERO/NOME-DO-FILME.css`).
- 🔗 Como as páginas estão 2 pastas dentro da raiz, os links usam `../../` para voltar até ela.
