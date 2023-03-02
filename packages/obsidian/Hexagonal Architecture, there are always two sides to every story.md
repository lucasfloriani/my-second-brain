[Hexagonal Architecture, there are always two sides to every story](https://medium.com/ssense-tech/hexagonal-architecture-there-are-always-two-sides-to-every-story-bc0780ed7d9c)

Eric Evans in his book (Domain-Driven Design: Tackling Complexity in the Heart of Software), proposes a 4-tier architecture to allow isolation between the Domain Layer which holds the business logic, and the other 3 supporting layers: **User Interface**, **Application**, and **Infrastructure**

In 2005, Alistair Cockburn realized that there wasn’t much difference between how the user interface and the database interact with an application, since they are both external actors which are interchangeable with similar components that would, in equivalent ways, interact with an application. By seeing things this way, one could focus on keeping the application agnostic of these “external” actors, allowing them to interact via Ports and Adapters, thus avoiding entanglement and logic leakage between business logic and external components.

_The Hexagonal Architecture, also referred to as Ports and Adapters, is an architectural pattern that allows input by users or external systems to arrive into the Application at a Port via an Adapter, and allows output to be sent out from the Application through a Port to an Adapter. This creates an abstraction layer that protects the core of an application and isolates it from external — and somehow irrelevant — tools and technologies._

![[Pasted image 20230227211134.png]]

### Ports

A technology-agnostic entry point, it determines the interface which will allow foreign actors to communicate with the Application, regardless of who or what will implement said interface. Like USB ports or energy plugs. Ports also allow the Application to communicate with external systems or services, such as databases, message brokers, other applications, etc.

**_Pro tip:_** _a Port should always have two items hooked to it, one always being a test._

### Adapters

An Adapter will initiate the interaction with the Application through a Port, for example a REST controller. We can have as many Adapters as we want.

![[Pasted image 20230227211033.png]]

### Application

Core of the system, it contains the Application Services which orchestrate the functionality or the use cases. It also contains the Domain Model, which is the business logic embedded in Aggregates, Entities, and Value Objects. The Application is represented by a hexagon which receives commands or queries from the Ports, and sends requests out to other external actors, like databases, via Ports as well.

When paired with Domain-Driven Design, the Application, or Hexagon, contains both the Application and the Domain layers, leaving the User Interface and Infrastructure layers outside.

![[Pasted image 20230227211351.png]]

### Why a Hexagon?

Hexagon is merely to have a visual representation of the multiple Port/Adapter combinations an application might have, and the difference between connection types we can have like in left (driving) and right (driven) sides.

#### Driving Side vs Driven Side

- Driving or Primary actors: The ones that initiate the interation. PUT controller for example.
- Driven or Secondary actors: Abstractions put in the Application behavior. Database adapter for example.

#### Extra details

- Ports will be (most of the time, depending on the language you choose) represented as interfaces in code.
- Driving Adapters will use a Port and an Application Service will implement the Interface defined by the Port, in this case both the Port’s interface and implementation are inside the Hexagon.
- Driven adapters will implement the Port and an Application Service will use it, in this case the Port is inside the Hexagon, but the implementation is in the Adapter, therefore outside of the Hexagon.

![[Pasted image 20230227212157.png]]

PS: It's like a car passing from left to right.

### Dependency Inversion in the Hexagonal Architecture Context

-   High-level modules should not depend on low-level modules. Both should depend on abstractions.
-   Abstractions should not depend on details. Details should depend on abstractions.

### Example

Service that processes requests to create orders for a fictitious e-commerce application.

![[Pasted image 20230227221237.png]]

The Driving Port would be an interface in the Application Layer, or Hexagon.

![[Pasted image 20230227221259.png]]

The Application Service would implement the Driving Port.

![[Pasted image 20230227221329.png]]

As you can see, the Application Service, being the orchestrating component, would use the Driven Port.

![[Pasted image 20230227221417.png]]

Finally, the Driven Port would be implemented by the Driven Adapter.

![[Pasted image 20230227221436.png]]


- [x] Read
- [x] Create resume
- [x] Put tag `read` and `withResume`

##### Tags
#article, #architecture, #hexagonalArchitecture, #hexagon, #read, #withResume 
