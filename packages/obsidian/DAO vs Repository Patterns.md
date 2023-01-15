[DAO vs Repository Patterns](https://www.baeldung.com/java-dao-vs-repository)

## DAO Pattern (Data Access Object)

Is an abstraction of data persistence and is considered closer to the underlying storage, which is often table-centric (SQL Database)

Most of the time the DAOs match the database tables, and used to hide the ugly queries.

#### DAO Example

![[Pasted image 20230101150243.png]]
![[Pasted image 20230101150256.png]]
![[Pasted image 20230101150308.png]]

## Repository Pattern

In **Domain-Driven Design book**, repository is a mechanism for encapsulating storage, retrieval, and search behavior, which emulates a collection of objects

In **Patterns of Enterprise Application Architecture**, mediates between the domain and data mapping layers using a collection-like interface for accessing domains objects

In other words, a repository also deals with data and hides queries similar to DAO. However, it sits at a higher level closer to the business logic of an app.

Consequently, a repository can use a DAO to fetch data from the database and populate a domain object. Or, it can prepare the data from a domain object and send it to a storage system using a DAO for persistence.


#### Repository Example

![[Pasted image 20230101150720.png]]
![[Pasted image 20230101150745.png]]

So far, we can say that the implementations of DAO and repository look very similar because the _User_ class is an anemic domain. And, a repository is just another layer over the data-access layer (DAO).

**However, DAO seems a perfect candidate to access the data, and a repository is an ideal way to implement a business use-case**.

## Repository Pattern With Multiple DAOs

To clearly understand the last statement, let's enhance our _User_ domain to handle a business use-case.

Imagine we want to prepare a social media profile of a user by aggregating his Twitter tweets, Facebook posts, and more.

![[Pasted image 20230101173834.png]]
![[Pasted image 20230101173856.png]]
![[Pasted image 20230101173909.png]]
![[Pasted image 20230101173947.png]]
![[Pasted image 20230101174013.png]]

**A repository can relies on DAOs for accessing data from various sources**

## Comparing the Two Patterns

-   DAO is an abstraction of data persistence. However, a repository is an abstraction of a collection of objects
- DAO is a lower-level concept, closer to the storage systems. However, Repository is a higher-level concept, closer to the Domain objects
- DAO works as a data mapping/access layer, hiding ugly queries. However, a repository is a layer between domains and data access layers, hiding the complexity of collating data and preparing a domain object
- DAO can't be implemented using a repository. However, a repository can use a DAO for accessing underlying storage

PS 1: Also, if we have an anemic domain, the repository will be just a DAO
PS 2: Anemic domain is when a model doesn't have logic in it
PS 3: The repository pattern encourages a domain-driven design, providing an easy understanding of the data structure for non-technical team members, too


- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #backend, #architecture, #cleanArchitecture, #DAO, #repository, #read, #withResume 
