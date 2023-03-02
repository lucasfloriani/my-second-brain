[In defense of simple architectures](https://danluu.com/simple-architectures)

- Wave is a $1.7B company with 70 engineers.
- CRUD app that adds and substracts numbers
- Python monolith with Postgres
- Mobile app
- They keep things simples (KISS)
- Too much conference talks about microservices and handle complexity but none about doing something simple (monolith)
- They use Synchronous Python (I/O blocks processing, like network requests), they tried asynchronous but had a lot of bugs with the library, too much technical effort for almost none benefit.
- Only billions of requests per month (for now), so it can handle it.
- They buy software from others, in the start was good, but after sometime they started building by themselfs because of the specific requirements they had.
- Issues with DB transactions and data integrity, because every function used transactions
- Instead of having the complexity in the architecture, they focused in the complexity of things they needed to improve for the business.
- Only add complexity if you have a good reason for it

### Conclusion

They didn't go that much in details about the architecture they used, mostly was about the achievements they had along with being simple and having more time to focus in other things, it's a good argument.

- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #architecture, #company, #changeOfFocus, #KISS, #read, #withResume 
