# Elisabete Freire Beauty — plano da direção aprovada

## Briefing e objetivo

- Studio de estética feminina no Parque Industrial, São José dos Campos. Cílios, maquiagem e sobrancelhas com igual destaque.
- Objetivo: iniciar conversa de agendamento no WhatsApp (12) 98812-9008. Todos os links abrem outra guia e incluem “Vim pelo site”; os links específicos nomeiam o serviço.
- Endereço e horários confirmados pelo usuário: R. Pimenteiras, 848; terça a sexta, 08h–18h; sábado, 08h–14h; domingo e segunda fechado.
- Página estática no projeto Astro existente. Sem formulário, preços, agenda integrada ou publicação.

## Referência escolhida e adaptação

O usuário escolheu [Bonita Vibes, de Melissa Creative Studio](https://www.melissacreativestudio.com/portfolio/bonita-vibes) para uma estética feminina, delicada e carinhosa. Referência para rosa envelhecido, escala íntima, textura de papel e contraste entre escrita pessoal e informação clara. Não copiar textos, imagens, bordas recortadas ou identidade da referência.

Três traços da Elisabete que orientam o projeto:

1. **Nome e atendimento pessoal:** o nome vira assinatura visual; “Falar com Elisabete” é mais natural que um botão abstrato.
2. **Trabalho do olhar:** o close real de cílios e sobrancelha dá cor e enquadramento à capa; uma linha contínua fina, inspirada no arco da sobrancelha, atravessa a foto principal.
3. **Três cuidados no mesmo studio:** uma seleção de serviço mostra fotos reais correspondentes e abre o WhatsApp com o serviço no texto, em vez de repetir três cartões idênticos.

## Material visual

As imagens reais autorizadas pelo usuário estão em `public/images`; origem, resolução e limites em `ASSET_SOURCES.md`.

| Imagem | Uso | Limite |
| --- | --- | --- |
| `olhar-brow-lamination.jpg` | imagem principal da capa | alta resolução; preservar olho e sobrancelha |
| `cilios-close.jpg` | serviço de cílios | miniatura 360 × 640; mostrar em largura modesta |
| `maquiagem-formatura.jpg` | serviço de maquiagem | miniatura 361 × 640; mostrar em largura modesta |
| `antes-depois-olhar.jpg` | serviço de sobrancelhas | manter antes e depois inteiro, sem promessa de resultado |
| `elisabete-retrato.jpg` | apresentação de Elisabete | 150 × 150; usar em tamanho pequeno |

Não usar fotos geradas ou de banco para representar equipe, clientes ou resultados.

## Direção de interface

- **Cores:** papel creme, rosa antigo tirado dos tons das fotos, ameixa suave para texto e pequenos detalhes. A cor ocupa áreas leves, sem o bloco coral/preto da versão rejeitada.
- **Tipografia:** assinatura de nome com traço caligráfico discreto, títulos com serifas orgânicas e corpo em sans claro. Títulos não devem repetir o contraste dramático da Bodoni nem o peso da Bricolage.
- **Composição:** capa como folha editorial com foto real integrada ao espaço, respiro, texto curto e sem microcopy. Serviços apresentados como lista sensível ao foco/seleção, com fotos variando no painel ao lado; no telefone, fotos e links ficam todos visíveis em sequência.
- **Efeito:** transição suave entre fotos ao explorar serviços e traço fino que aparece na entrada da capa. Respeitar `prefers-reduced-motion`; conteúdo e links funcionam sem JavaScript.
- **CTA:** “Agendar pelo WhatsApp” na capa; links por serviço; chamada final “Falar com Elisabete”. Botões com cantos suaves e tamanho de toque confortável, sem setas ou selos repetidos.
- **Texto:** factual e próximo. Sem slogans, depoimentos inventados, cartões de frases, rótulos decorativos ou procedência das fotos na interface. Instagram somente como link no rodapé.

## Estrutura e telas

1. Capa: assinatura Elisabete Freire, “Cílios, maquiagem e sobrancelhas em São José dos Campos”, foto de trabalho real e agendamento.
2. Serviços: os três cuidados com igual peso, descrições objetivas, fotos reais e agendamento específico.
3. Sobre: retrato pequeno, texto factual e contato direto.
4. Visita: endereço, horários, telefone e rota.
5. Convite final e rodapé.

**Desktop:** assinatura e foto em composição assimétrica na primeira tela; serviços em lista à esquerda com painel fotográfico à direita. Navegação por âncoras.

**Telefone:** nome, serviço e CTA visíveis antes da foto; depois, três serviços completos em sequência, cada foto dimensionada para sua resolução. Sem interação escondida por hover.

## Implementação e validação

- Astro + TypeScript + CSS próprio. Dados de negócio em `src/data/site.ts`, página em `src/pages/index.astro`, CSS em `src/styles/global.css`.
- Favicon alinhado à nova assinatura e paleta. Fontes instaladas localmente via Fontsource.
- Verificar 320/360/390/430 px, tablet e desktop: primeira tela, recortes, serviços, navegação, ausência de rolagem lateral, foco, teclado, movimento reduzido e links.
- Executar `npm run check` e `npm run build`. Revisar a página construída no navegador. Não publicar sem solicitação.

## Validação concluída

- `npm run check`: 0 erros, 0 avisos, 0 dicas.
- `npm run build`: concluído com sucesso.
- Prévia visual revista no navegador em 1280 px, 390 px e 320 px, incluindo capa, serviços e apresentação de Elisabete. Sem rolagem horizontal nesses tamanhos.
- Fotos carregadas; a imagem de serviços muda ao escolher maquiagem no desktop. No celular, cada serviço mostra sua própria foto.
- Todos os links de WhatsApp usam `target="_blank"`, `rel="noopener noreferrer"` e mensagem “Vim pelo site”; os de serviço incluem o nome do serviço.
- Ajuste final: a foto pequena de Elisabete agora aparece em composição editorial compacta, sem moldura grande; fotos de serviço foram reduzidas para respeitar sua resolução.
