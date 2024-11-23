# Sistema de Estacionamento  🚗🏍️

Este é um sistema backend para gerenciar um estacionamento rotativo. O sistema registra a entrada e saída de veículos, calcula tarifas e fornece informações sobre ocupação e receita.

---

## **Funcionalidades**

- ✅ Registrar entrada de veículos (carros e motos).
- ✅ Registrar saída de veículos e calcular o valor total a ser pago.
- ✅ Limitar o número máximo de veículos estacionados (40 vagas).
- ✅ Consultar:
  - Veículos atualmente estacionados.
  - Total de veículos que já passaram pelo estacionamento.
  - Receita total gerada.

---

## **Tecnologias Utilizadas**

- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **Express**: Framework para criação de APIs.
- **MongoDB**: Banco de dados não relacional para armazenar os dados.
- **Mongoose**: Biblioteca para modelagem de dados do MongoDB.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

---

## **Como Rodar o Projeto**

### Pré-requisitos
- Node.js instalado (versão 14 ou superior).
- MongoDB instalado e em execução.
- Git instalado.

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/estacionamento-liffey.git
   cd estacionamento-liffey
