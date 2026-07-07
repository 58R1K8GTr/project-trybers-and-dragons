# 🐉 Trybers and Dragons (T&D) — Modelagem de RPG com POO & SOLID em TypeScript

O **Trybers and Dragons (T&D)** é uma aplicação back-end que modela a mecânica, os ecossistemas e as regras de combate de um universo de jogos de interpretação de papéis (RPG). O objetivo central deste projeto foi aplicar em profundidade os pilares da **Programação Orientada a Objetos (POO)** e os princípios da arquitetura **SOLID** utilizando o **TypeScript**.

A arquitetura foi estruturada para simular de forma escalável e extensível as características de diferentes raças, vocações (arquétipos), gerenciamento de energia e dinâmicas de combate entre personagens e monstros.

---

## 🚀 Habilidades Desenvolvidas & Consolidadas

Este projeto consolidou conceitos fundamentais de engenharia de software voltados à manutenibilidade e ao design de código limpo:

* **Domínio dos Pilares de POO:**
    * **Abstração:** Criação de superclasses abstratas (`Race`, `Archetype`) para servir de base conceitual, impedindo instanciações indevidas.
    * **Herança:** Extensão de classes base para especializar comportamentos (ex: classes `Elf`, `Orc`, `Mage`, `Warrior`).
    * **Polimorfismo:** Sobrescrita de métodos (`override`) e uso de métodos estáticos para gerenciar dinamicamente estados globais, como a contagem de instâncias criadas por raça ou arquétipo.
    * **Encapsulamento:** Uso rigoroso de modificadores de acesso (`private`), convenções de atributos privados (`_attribute`) e exposição controlada de dados através de métodos acessores (*getters*).
* **Alinhamento com Princípios SOLID:**
    * **Single Responsibility Principle (SRP):** Divisão estrita de pastas e responsabilidades (`Races`, `Archetypes`, `Fighter`, `Battle`), onde cada arquivo resolve apenas um contexto específico de negócio.
    * **Open/Closed Principle (OCP):** Arquitetura aberta para expansão (adicionar novas raças ou novos arquétipos) e fechada para modificação (não é necessário alterar as classes abstratas mães para criar novos comportamentos).
* **Tipagem Avançada com TypeScript:**
    * Modelagem de contratos robustos utilizando `interfaces` com propriedades e métodos opcionais (`Optional Properties`).
    * Criação de tipos customizados combinados (*Union Types*) para delimitar domínios de strings (ex: `type EnergyType = 'mana' | 'stamina'`).
* **Qualidade de Código e Ambiente:**
    * Desenvolvimento isolado dentro de containers **Docker** estruturados via Docker Compose.
    * Garantia de conformidade estilística e análise estática do código usando **ESLint**.

---

## 📁 Estrutura de Domínios Implementada

O ecossistema do projeto foi construído seguindo a risca a ordem lógica dos componentes de um RPG:

1.  **Raças (`Races`):** Criação da classe abstrata `Race` controlando os pontos de vida máximos (`maxLifePoints`) e a destreza. Implementação das raças derivadas: `Dwarf`, `Elf`, `Halfling` e `Orc`.
2.  **Energia (`Energy`):** Definição da interface de recurso dinâmico limitador de habilidades, distinguindo o consumo de energia física (`stamina`) do uso de habilidades mágicas (`mana`).
3.  **Arquétipos (`Archetypes`):** Mapeamento das vocações dos lutadores. Implementação da base abstrata e suas ramificações: `Mage` e `Necromancer` (focados em mana) junto a `Warrior` e `Ranger` (focados em stamina).
4.  **Contratos de Combate (`Fighter`):** Interface que dita as capacidades de ação de qualquer entidade combativa no jogo, cobrindo atributos vitais, capacidade de desferir ataques, receber danos calculados, usar habilidades especiais e subir de nível (`levelUp`).

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Linguagem Principal:** TypeScript (v4+)
* **Ambiente de Execução:** Node.js (v16 recomendado)
* **Linter de Código:** ESLint
* **Contêineres:** Docker & Docker Compose

---

## 🐋 Como Executar e Testar o Projeto

A aplicação está configurada para funcionar de maneira nativa ou isolada em ambientes Docker.

### Via Docker (Recomendado)

1.  **Suba o container em segundo plano:**
    ```bash
    docker-compose up -d
    ```
2.  **Acesse o terminal interativo do container:**
    ```bash
    docker exec -it trybers_and_dragons bash
    ```
3.  **Instale as dependências e execute os scripts de qualidade (dentro do container):**
    ```bash
    npm install
    npm run lint  # Executa a análise estática do ESLint
    npm test      # Roda a suíte de testes automatizados
    ```

### Rodando Rápido (Dica de Desenvolvimento)
Caso queira otimizar o tempo de resposta durante refatorações, utilize o comando abaixo. Ele interrompe a execução na primeira falha encontrada:
```bash
npm run test:fast
```

## 📐 Padrão de Organização do projeto
A estrutura de pastas reflete a arquitetura limpa aplicada, utilizando arquivos index.ts como pontos centralizados de exportação de módulos (padrão Barrel):

```text
src/
├── Archetypes/       # Classes especializadas em vocações/arquétipos
├── Battle/           # Regras e simulações de turnos de batalha
├── Fighter/          # Contratos e interfaces de combate
├── Races/            # Classes de especialização de raças humanoides
├── Energy.ts         # Tipagem e interfaces de manipulação de energia
└── index.ts          # Inicialização e orquestração do ecossistema
```
