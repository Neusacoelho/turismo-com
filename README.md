<div align="center">

# ✈️ TURISMO.COM

**Descubra o mundo — um destino, uma cultura, uma história de cada vez.**

Projeto acadêmico e colaborativo de turismo, desenvolvido com HTML, CSS e JavaScript.

[🌐 Acessar o site](https://turismo-com.vercel.app/)

![Prévia animada das páginas do site Turismo.com](/turismo-preview.gif)

<sub>Prévia animada das páginas atuais do Turismo.com. O conteúdo pode continuar em desenvolvimento e receber novas melhorias.</sub>

</div>

## 🌍 Sobre o projeto

O **Turismo.com** é um guia educativo de viagens, criado em equipe para apresentar países, culturas, gastronomia, pontos turísticos e informações práticas para quem deseja explorar o mundo.

A proposta do projeto é reunir páginas dedicadas a diferentes destinos, com conteúdo visual e informativo, além de galerias de fotos, seções temáticas e páginas complementares de hospedagem, alimentação, compras, contato e apresentação da equipe.

## Comece por aqui

Se você vai criar ou adaptar a página de um país, comece pelo [guia principal — ESTRUTURA.md](documentacao/ESTRUTURA.md). Ele explica como escolher os arquivos, preparar a pasta do país, adaptar os caminhos e testar a página.

| Opção | Como usar |
| --- | --- |
| [Modelos básicos — modelos/](modelos/) | Uma principal e uma interna genérica para desenvolver seu próprio layout, acrescentando conteúdo aos poucos. |
| [Exemplo visual completo — template-modelo/](template-modelo/) | Principal, Cultura e Gastronomia para copiar integralmente ou reaproveitar por seções e cartões. Siga as [instruções do exemplo visual — LEIA-ME.md](template-modelo/LEIA-ME.md). |
| [Demonstração — teste-modelo/](teste-modelo/) | Página para observar os componentes compartilhados funcionando. O país e os dados são fictícios e não devem ser publicados como conteúdo real. |

Os modelos são opcionais e permitem personalização. Cada integrante pode adaptar sua página conforme a proposta do país e as necessidades do projeto.

## ✨ O que você encontra

- **Página inicial:** vitrine dos destinos disponíveis no projeto.
- **Destinos:** páginas dedicadas a países, com informações culturais, históricas e turísticas.
- **Galerias:** seleções de fotografias para complementar a experiência visual.
- **Guias práticos:** hospedagem, alimentação, compras e contato.
- **Página Sobre:** apresentação da equipe e dos colaboradores do Turismo.com.

> 🚧 **Em desenvolvimento:** o conteúdo e as páginas seguem em atualização contínua. Novas melhorias visuais, correções e expansões podem ser adicionadas pela equipe.

## 🗺️ Destinos

As páginas existentes no projeto incluem **Brasil, Portugal, Grécia, França, Espanha, Itália, Japão, México, China, Estados Unidos e República Dominicana**.

A pasta de **Países Baixos** também já contém páginas e uma galeria, mas o destino ainda não aparece na vitrine da página inicial. Outros conteúdos seguem em desenvolvimento.

## 🧰 Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-estrutura-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-estilos-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-interatividade-F7DF1E?logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-versionamento-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-colabora%C3%A7%C3%A3o-181717?logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-publica%C3%A7%C3%A3o-000000?logo=vercel&logoColor=white)

O projeto utiliza também arquivos auxiliares e recursos visuais para organização do conteúdo e apresentação das páginas.

## 📁 Organização do repositório

A estrutura abaixo destaca os arquivos principais e agrupa as páginas internas por país. Os espaços entre os grupos ajudam a visualizar cada parte do projeto.

```text
turismo-com/
│
├── index.html                       # Página inicial
├── turismo-inicio.css               # Visual da página inicial
├── estilo.css                       # Estilos usados por várias páginas
├── sobre.html                       # Apresentação da equipe
├── sobre.css                        # Estilos da página Sobre
├── turismo-preview.gif              # Animação do README
│
├── brasil.html                      # Página principal do Brasil
├── brasil.css
├── brasil-fotos.html                # Galeria do Brasil
├── brasil-fotos.css
│
├── portugal.html                    # Página principal de Portugal
├── portugal.css
├── portugal-fotos.html              # Galeria de Portugal
├── portugal-fotos.css
│
├── republica-dominicana.html        # Página principal da R. Dominicana
├── paises-baixos-fotos.html         # Galeria dos Países Baixos
│
├── grecia.html                      # Outras páginas principais
├── franca.html
├── espanha.html
├── italia.html
├── japao.html
├── mexico.html
├── china.html
├── estados-unidos.html
│
├── hospedagem.html                  # Guias e serviços gerais
├── hospedagem.css
├── alimentacao.html
├── alimentacao.css
├── compras.html
├── compras.css
├── contato.html
├── contato.css
│
├── equipe/                          # Imagens dos colaboradores
├── imagens-brasil/                  # Fotografias do Brasil
├── imagens-portugal/                # Fotografias de Portugal
│
├── assets/                          # Recursos compartilhados
│   ├── css/
│   │   ├── base.css
│   │   ├── componentes.css
│   │   └── pais.css
│   └── js/
│       └── site.js
│
├── paises/                          # Conteúdos organizados por país
│   │
│   ├── brasil/
│   │   ├── cultura.html / cultura.css
│   │   ├── gastronomia.html / gastronomia.css
│   │   ├── alimentacao.html / alimentacao.css
│   │   ├── pontos-turisticos.html / pontos-turisticos.css
│   │   └── curiosidades.html / curiosidades.css
│   │
│   ├── portugal/
│   │   ├── cultura.html / cultura.css
│   │   ├── gastronomia.html / gastronomia.css
│   │   ├── pontos-turisticos.html / pontos-turisticos.css
│   │   ├── curiosidades.html / curiosidades.css
│   │   ├── hospedagem.html / hospedagem.css
│   │   ├── alimentacao.html / alimentacao.css
│   │   ├── compras.html / compras.css
│   │   └── contato.html / contato.css
│   │
│   ├── republica-dominicana/
│   │   ├── cultura.html
│   │   ├── gastronomia.html
│   │   ├── pontos-turisticos.html
│   │   ├── curiosidades.html
│   │   ├── republica-dominicana-fotos.html
│   │   └── republica-dominicana.css
│   │
│   └── paises-baixos/
│       ├── paises-baixos.html / paises-baixos.css
│       ├── cultura.html / cultura.css
│       ├── gastronomia.html / gastronomia.css
│       ├── pontos-turisticos.html / pontos-turisticos.css
│       └── curiosidades.html / curiosidades.css
│
├── modelos/                         # Modelos básicos
│   ├── pais-principal.html
│   └── pais-interna.html
│
├── template-modelo/                 # Exemplo visual de páginas
│   ├── index.html / template.css
│   ├── cultura.html / cultura.css
│   ├── gastronomia.html / gastronomia.css
│   ├── imagens/
│   └── LEIA-ME.md
│
├── teste-modelo/                    # Demonstração com dados fictícios
│   ├── index.html
│   └── teste-modelo.css
│
├── documentacao/                    # Guias e registros do projeto
│   ├── ESTRUTURA.md
│   ├── REGRESSAO.md
│   ├── ORIENTACOES.md
│   ├── HEADER.md
│   └── FOOTER.md
│
└── README.md
```

**Observações:** a árvore apresenta os arquivos de referência e algumas das pastas de países; outros arquivos e diretórios também existem no repositório. As barras entre HTML e CSS indicam **dois arquivos separados na mesma pasta**, como no modelo anterior. Em `paises/brasil/`, os arquivos de Pontos Turísticos e Curiosidades ainda estão vazios e aguardam conteúdo.

As páginas principais de vários países continuam na raiz, enquanto seus conteúdos internos ficam em `paises/`. Os Países Baixos já possuem páginas na pasta própria, mas ainda não constam na lista de destinos da página inicial.

## 💻 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Neusacoelho/turismo-com.git
   ```
2. Abra a pasta do projeto no VS Code.
3. Abra `index.html` com a extensão **Live Server** ou diretamente no navegador.

Não é necessário instalar React nem executar processo de compilação.

## 🤝 Padrão visual e colaboração

Cada colega é responsável pelas páginas do seu país ou pelas seções que desenvolve, conforme a divisão combinada pela equipe.

Antes de alterar arquivos compartilhados, é importante verificar se já existem mudanças feitas por outros integrantes e trabalhar com branches para evitar conflitos.

O projeto reúne páginas com estilos e estruturas diferentes, mas mantém a mesma proposta colaborativa de construção. Os modelos disponíveis em `modelos/`, `template-modelo/` e `teste-modelo/` podem servir de apoio durante o desenvolvimento.

## 👥 Equipe e créditos

Projeto acadêmico desenvolvido no curso de **Desenvolvimento Full Stack — +Pra Ti / Codifica**.

### Organização da equipe

| Função | Nome |
| :--- | :--- |
| Liderança do grupo | **Neusa Oliveira** |
| Vice-liderança | **David Pamplona** |
| Coordenação docente | **Prof. Jaques Antunes** |

### Integrantes

| Integrante | Integrante |
| :--- | :--- |
| Valdir Leandro | Lucas Freitas |
| Weslley | Emylli da Rosa |
| Lucas Lima | Silvia Reis |
| Julia | Mozer Luis |
| Regina Lima | Wallace Limeira |
| Léo Matias | Joana Leal |

**Contato:** [contato.neusa.turismo@gmail.com](mailto:contato.neusa.turismo@gmail.com)

**Localidade informada no projeto:** Sapucaia do Sul — RS

---

<div align="center">
  <strong>Turismo.com</strong> · Um projeto para aprender, colaborar e descobrir o mundo. 💙
</div>
