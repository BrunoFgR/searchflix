# Usar Node.js na versão LTS oficial
FROM node:slim

# Criar diretório da aplicação
WORKDIR /app

# Copiar os arquivos de definição de pacotes
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar os arquivos da aplicação
COPY . .

# Expor a porta que sua aplicação usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
