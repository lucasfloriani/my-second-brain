---
title: Operating Lambda Understanding event-driven architecture – Part 1
date: '2023-01-15'
tags: ['article', 'architecture', 'lambda', 'eventDriven', 'eventArchitectures', 'read', 'withResume']
draft: false
summary: Lambdas são propositalmente limitados em 15 minutos, porem em média, através de todos os clientes da AWS, a maioria das invocações de funções duram menos que 1 segundo.. Eventos são imutáveis e o temp...
description: Lambdas são propositalmente limitados em 15 minutos, porem em média, através de todos os clientes da AWS, a maioria das invocações de funções duram menos que 1 segundo.. Eventos são imutáveis e o temp...
---

# Operating Lambda Understanding event-driven architecture – Part 1

[Operating Lambda Understanding event-driven architecture – Part 1](https://aws.amazon.com/blogs/compute/operating-lambda-understanding-event-driven-architecture-part-1/)

### Vantagens

- Mais taxa de transferencia (velocidade talvez?)
- Scalabilidade
- Extensibilidade
- Reduzir complexidade
- Reduzir quantidade total de código

### Definições

Event Drive começou a ser mais abordado/falado por causa dos #microservices , os quais se beneficiam em muito com lambdas.

**Lambda** é um serviço de computação por demanda que roda código customizado em resposta a um evento.

A maioria dos serviços da AWS geram eventos, onde muitos podem ser usados como fonte de evento para lamdas

O principal motivo das #lambda functions são para processar eventos.

Lambdas são propositalmente limitados em 15 minutos, porem em média, através de todos os clientes da AWS, a maioria das invocações de funções duram menos que 1 segundo. Em algumas operações intensivas, eles podem demorar alguns minutos para processar um unico evento, mas são raros os casos.

Eventos são um JSON com dados do evento disparado. Eventos são imutáveis e o tempo que ocorrem é importante.

![Fallback text 1](/static/assets/pasted-image-20220711213021.png)

O JSON do Evento é passado como primeiro parametro ao event handler:

![Fallback text 2](/static/assets/pasted-image-20220711213139.png)

Lambdas agem como uma cola entre os serviços, provendo logica de negócio nas transformações de dados enquanto ela passa através dos serviços.

![Fallback text 3](/static/assets/pasted-image-20220711213507.png)

Abordagens para aquiteturar um projeto Event Driven:
- Event storming, O qual é uma abordagem interativa do Domain Driven Design (DDD)

### The benefits of event-driven architectures
- Good option to replace polling and webhooks
- Reducing complexity by splitting concerns (microservice)
- Improve scalability and expensibility

### Trade-offs of event-driven architectures
- Variable latency (not good for projects like a high-frequency trading application in banks or submilisecond robottics automation in warehouses)
- Eventual consistency ( #acid )
- Returning values to callers (because of many steps between services)
- Debugging