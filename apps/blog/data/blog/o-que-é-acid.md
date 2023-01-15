---
title: O que é ACID?
date: '2016-03-08'
tags: ['article', 'backend', 'database', 'ACID', 'architecture', 'read', 'withResume']
draft: true
summary: Implement it
description: Implement it
---
# O que é ACID?


[O que é ACID?](https://medium.com/opensanca/o-que-%C3%A9-acid-59b11a81e2c6)

**ACID** é um conceito que se refere às quatro propriedades de transação de um sistema de banco de dados: **A**tomicidade, **C**onsistência, **I**solamento e **D**urabilidade.

![Fallback text 1](/static/assets/pasted-image-20221005202721.png)


**_Atomicidade:_** Em uma transação envolvendo duas ou mais partes de informações discretas, ou a transação será executada totalmente ou não será executada, garantindo assim que as transações sejam atômicas.

**_Consistência:_** A transação cria um novo estado válido dos dados ou em caso de falha retorna todos os dados ao seu estado antes que a transação foi iniciada.

**_Isolamento:_** Uma transação em andamento mas ainda não validada deve permanecer isolada de qualquer outra operação, ou seja, garantimos que a transação não será interferida por nenhuma outra transação concorrente.

**_Durabilidade:_** Dados validados são registados pelo sistema de tal forma que mesmo no caso de uma falha e/ou reinício do sistema, os dados estão disponíveis em seu estado correto.



