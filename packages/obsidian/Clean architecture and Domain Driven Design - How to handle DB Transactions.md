[Implementing the Repository and Unit of Work Patterns in an ASP.NET MVC Application (9 of 10)](https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions/getting-started-with-ef-5-using-mvc-4/implementing-the-repository-and-unit-of-work-patterns-in-an-asp-net-mvc-application)

![[Pasted image 20230101191301.png]]

#### Unit of work

![[Pasted image 20230107145519.png]]

In this [github issue](https://github.com/mattia-battiston/clean-architecture-example/issues/1) we can see a good discussion about the ways we can handle it. Unfortunally we don't have a awesome way to deal with this issue, the conclusion is that the pattern **Unit of Work** could handle it in the best way beign a dependency of the class in the layer **Use Case**, probably a contract using Interfaces to make it able to be interchanged, and maybe we will need to constrair their use together with they Database/Gateway?

![[Pasted image 20230107181621.png]]

The unit of work class coordinates the work of multiple repositories by creating a single database context class shared by all of them.

PS 1 Database context will be used to start and resume/revert the database transactions.
PS 2: Unit of work is the same code that I created to solve database transactions where it changes the database context so it will have the same in each DAO, making it possible to start/resume/revert the transaction.

- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #backend, #architecture, #cleanArchitecture, #DDD, #domainDrivenDesign , #transaction, #unitOfWork, #read, #withResume 
