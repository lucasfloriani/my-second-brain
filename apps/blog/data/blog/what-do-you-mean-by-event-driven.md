---
title: What do you mean by Event-Driven
date: '2016-03-08'
tags: ['article', 'architecture', 'lambda', 'eventDriven', 'martinFowler', 'eventArchitectures', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---
# What do you mean by Event-Driven


[What do you mean by Event-Driven(https://martinfowler.com/articles/201701-event-driven.html)


_TLDR: É sobre as termologias usados quando falamos sobre Event-Driven, eles são confundido em 1 só termo._

O problema principal é a falta de concordancia com os termos como Evento, cada pessoa pensa de uma forma diferente

### Event Notification
Isso ocorre quanto um sistema envia uma mensagem para notificar outros sistemas de uma mudança em seu dominio

Um ponto chave é que o sistema que disparou a notificação não se importa muito com a resposta, só notificam que ouve e não esperam resposta

- Gera um baixo nivel de acoplamento
- Dificil de debugar (algo já citado na nota [[Operating Lambda Understanding event-driven architecture – Part 1]]), o padrão é muito benefico, porem temos que cuidar com essa armadilha
- Notificações de eventos devem enviar poucos dados

### Event-Carried State Transfer

É um padrão onde passamos todos os dados necessários para os consumidores das notificações para que eles consigam prossegir com a logica deles sem precisar buscar esses dados diretamente na fonte.
Um bom exemplo seria um sistema de cadastro de clientes onde um cliente edita sua informação e notifica outros sistemas que precisam atualizar esse dados tbm, porem a notificação envia os dados alterados para facilitar a lógica a ser aplicada no outro lado.

Um downside dessa abordagem é que exige a transferencia de muitos dados e muitas copias, porem não é um grande problema na era dos armazenamentos abundantes (MongoDB por exemplo)

O que ganhamos com isto é uma maior resiliencia, pois não dependemos necessariamente do serviço que continha esses dados para continuar a lógica.
Outro ponto é a redução de latencia por causa das chamadas extras que economizamos, porem adiciona uma complexidade em quem escuta os eventos de verificar se tem todos os dados necessários.

### Event-Sourcing
A ideia principal do Event Sourcing é que qualquer mudança no estado que fizemos no sistema nos gravamos essa mudança como um evento, e a partir disso, nos podemos com confiança buildar novamente o estado do sistema so por reprocessar o evento em qualquer tempo no futuro.

O armazenamento de eventos torna-se a principal fonte de verdade, e o estado do sistema é puramente derivado dele.

O melhor exemplo disso é um sistema de controle de versão. O log de todos os commits é o armazenamento de eventos e a cópia de trabalho da source tree é o estado do sistema.

### CQRS

CQRS é a noção de ter estruturas de dados separadas para ler e escrever informações. Estritamente CQRS não é realmente sobre eventos, pois você pode usar o CQRS sem nenhum evento presente em seu design. Mas geralmente as pessoas combinam o CQRS com os padrões anteriores aqui.

Temos o downside de ter que gerenciar ambas estruturas de entreda e saida, logo temos que ver se realmente é vantajoso.

" I find many of my colleagues are deeply wary of using CQRS, finding it often misused." - Martin Fowler 2017

