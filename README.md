# To-do-List-

The goal of this project was to complete a functional To-Do list with multiple paramaters that could add items, and swap between multiple projects. 

At the time of this writing this project can create a to-do-list, populate rows, create multiple lists, swap between lists, and changes list names before or after creation. 

There is still a bug that will delete a project if it's name is typed in the project title input bar. I may come back and fix this later. 

There is also nut much in terms of style, and no ability to delete individual rows. 

Success :

I am proud of everything that this list can accomplish through local storage. It feels clunky, but gets the job done for the most part. 

Struggles :

I had a lot of trouble keeping track of all of my local storage objects and knowing what was changed where. This is the nature of relying on global objects for data tracking, as a single change in one module can have cascading effects through all of the others. 

I spent a lot of time just tracking where a local storage variable was changed and even more time understanding why. 

If anything this project has made me more eager to explore the backend and understand some better solutions for storing data across page loads. 