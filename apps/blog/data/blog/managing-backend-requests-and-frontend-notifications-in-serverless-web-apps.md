---
title: Managing backend requests and frontend notifications in serverless web apps
date: '2016-03-08'
tags: ['article', 'architecture', 'lambda', 'eventDriven', 'apiGatewayAWS', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---

# Managing backend requests and frontend notifications in serverless web apps

[Managing backend requests and frontend notifications in serverless web apps](https://aws.amazon.com/blogs/compute/managing-backend-requests-and-frontend-notifications-in-serverless-web-apps/)

### The synchronous model

Onde vc faz uma chamada e espera pela resposta:

![Fallback text 1](/static/assets/pasted-image-20220713232811.png)

Em casos onde temos interações com outros serviços no meio, pode-se ter atraso ou até perda de todo o processo, fazendo com que o modelo sincrono seja ruim nesses casos. Exemplo:

![Fallback text 2](/static/assets/pasted-image-20220713233003.png)

API Gateway da AWS tem limite de 29 segundos, se for mais da timeout. Exemplo:

![Fallback text 3](/static/assets/pasted-image-20220713233115.png)

As solicitações síncronas também têm outras limitações. Você não pode receber mais de uma resposta por solicitação, nem pode assinar alterações futuras nos dados. Neste exemplo acima, a solicitação de API só pode informar os chamadores sobre os drivers no final da solicitação de processo demorada.

### The asynchronous model

As cargas de trabalho assíncronas geralmente usam filas entre serviços para ajudar a gerenciar a taxa de transferência e auxiliar na lógica de repetição.

Exemplo de um ecommerce:

![Fallback text 4](/static/assets/pasted-image-20220713233405.png)

Exemplo de um app de perguntas e respostas com arquitetura assincrona:

![Fallback text 5](/static/assets/pasted-image-20220713233602.png)

#### Vantagens e desvantagens

| Synchronous requests                                         	| Asynchronous requests                                                          	|
|--------------------------------------------------------------	|--------------------------------------------------------------------------------	|
| The caller waits until the end of processing for a response. 	| The caller receives an acknowledgment quickly while processing continues.      	|
| Waiting may incur cost.                                      	| Minimizes the cost of waiting.                                                 	|
| Downstream slowness or outages affects the overall request.  	| Queuing separates ingestion of the request from the processing of the request. 	|
| Passes payloads between steps.                               	| More often passes transaction identifiers.                                     	|
| Failure affects entire request.                              	| Failure only affects segment of request.                                       	|
| Easy to implement.                                           	| Moderate complexity in implementation                                          	|

### Lidando com valores de resposta e estado em requisições assincronas

Em processos assincronos, você não pode passar um valor de retorno para quem chamou da mesma forma que vc lida com processos sincronos. Existem uma serie de opções disponíveis para desenvolvedores web e mobile para rastrear o estado de requisições a serem processadas.

- **Polling**: a solicitação inicial retorna um identificador de rastreamento. Você cria um segundo endpoint de API para o front-end para verificar o status da solicitação, fazendo referência ao ID de rastreamento. Use o DynamoDB ou outro armazenamento de dados para rastrear o estado da solicitação.
- **WebSocket**: esta é uma conexão bidirecional entre o cliente frontend e o serviço backend. Ele permite que você envie informações adicionais após a conclusão da solicitação inicial. Seus serviços de back-end podem continuar enviando dados de volta ao cliente usando uma conexão WebSocket.

### AWS IoT Core

É uma boa alternativa em relação ao AWS SNS, sendo integrado em aplicações web por ser mais preferivel em casos de publish-subscribe