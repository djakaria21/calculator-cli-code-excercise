# calculator-cli-code-exercise

## High level description of solution

The problem I set to solve was to create a polish calculator that took an equation as input and would give a solution to the problem.


I decided to use inquirer as an input system to get the equation, this would pull up the default editor of whoever the user is for whichever operating system is being used so it could be used regardless of platform (although I guess that isn't really a problem with clis in general).  I thought this would be a good user experience and the user can choose who/what editor they want to use by changing their local settings.

I decided to abstract the operators and have them handle the four standard arithmetic operators + - / *.  I decided to create an operations folder to put them in and created test cases for each one.  This is because we might want to add more arithmatic operators later, so it makes sense to put them in their own seperate folder.

Then to help with the solution I made sure that there were errors to test and validate whether or not the equation being put into the calculator was good or not and put it into its own utility class within the calculators folder.

I had created a calculator folder because there might be more than one calculator type that I would like to add in the future.

Other classes within my utility class are calculate (obviously) and isOperand (since I found that I tended to need those inside both calculate and validate so it made sense to just take out the method and import it into both to avoid writing the same code in the same places.)

The calculate method splits the string into arrays based off of a space splitter (coolest sounding thing I've typed in like a month) and then processes the calculate method based off of putting the numbers into a stack and then popping them out and operating on them as it goes through and reads all of the symbols that were passed in.

The calculate method is then used inside of our index.js through the polish_calculator object to interact with our cli.

## Technical choices

This solution uses inquirer as a framework for creating the cli, jest as the testing framework, and node as the programming language.

### Inquirer vs ink

I decided to go with inquirer after considering many other packages due to the ease of use after considering other cli node packages such as ink and pastel.

Inquirer also doesn't have security vulnerabilities, (as of the time of this writing) and is regularly updated.

The reasoning behind not going with the react based cli creation tools is the lack of working examples as well as the repository not being updated for literally 2 years.

### Other cli packages that were considered

I found other cli packages like chalk and boxen that seemed promising, but they didn't have the input functionality I needed and just seemed to be ways to stylize the cli.

Yargs, meow, listr, and the standard args parser as well as okta were considered as input devices but I couldn't find a working example that did what I need it to.  I wanted to be able for the user to put in a large equation without literally typing it into our terminal.  

I worked examples (and they were the initial prototypes) with Yargs, meow, and the node args parser, but I couldn't get the prompts and the user input to appear sequentially.  It wasn't a problem to have the equation be put into as options into the cli as a string argument, but I didn't feel like that had the amount of polish that I wanted.

Listr seemed great if I wanted to have the cli have multiple options, but that wasn't really something that I was worried about given the requirements of the assignment, I could see this being used if I had multiple calculators implemented and wanted the user to pick from them.

Okta seemed the most promising, as that was the biggest timesink out of trying all the other cli packages, it came with built in authentication, which would be really useful if we needed our cli to contact an api, or create something in a git repository or interact with a pipeline, but I feel like it ultimately was out of the scope of the project.  It is something that I would keep in mind if I wanted to create some prebuilt docker scripts to help with pipeline management or something extensive like that.  Seeing as this is a coding interview question, I felt like implementing something like this was out of scope, and it didn't really solve the problem with putting in massive equations (although that's just a requirement that I added to the project myself).

### Jest

Jest is used as a testing framework, this is due to the ease of testing, Jest is also regularly updated and has good community support and documentation.

### Node

I decided to use node due to the fact that I felt that Node was really, really good at creating clis after taking a frontend masters course on it.  Since I'm not literally hosting this, and there are not really any server or data storage aspects of this problem (at least at the time of this writing) the reasoning to use node was mainly due to its cli support, and also I was curious to see if my hunch about node being a good language to create a cli in was correct.  I'd have to create a POC with the other languages to see if creating clis in those languages will/would be easier/better to maintain, but my experience overall with what I created so far was pretty good.

## Nice to haves/Trade offs

Technically, if we need to save on time complexity we could put the validator and the calculate class together instead of having them seperately.  The validator runs through the equation O(n) times and the calculate operation runs through the equation O(n) times which is O(2n) which in the long run simplifies to O(n) because the 2 is a constant, but its technically time saved.

A nice to have could be refactoring the operations into a service/factory method within the calculate method and having that call the service/factory method inside of the else statement instead of having multiple if statements inside of our else statement in the calculate method.  This would make the operations being added to our system more extendable.

Another nice to have would be implementing some sort of bundling/minimizer tool to complie our code and have it still run.

Of course additional testing is always nice.  Having significantly bigger/longer tests with a size of over, lets say 10,000 for out input would be good to test the effeciency of our calculator.

The tests themselves, as well as the import structure of everything is based off of relative imports instead of based off having imports based off the root of the project.  I think there are a couple of solutions to this using some sort of bundling, I would fix this given more time, but decided against it during the start as I spent so much time trying to figure out how to get ink/pastel working.

Technically there is repeated code in changing the variables in each of the operation methods from strings to floats, I felt like this would be overkill, but if I were to do it I would do the overhaul alongside creating a factory class with all of the operations.  It would make more sense to do it that way too, as you could change the values into floats first, and then pass the values to operated on within the factory method itself.

## How to run

to run

```
npm install 
node ./src/index.js
```
then follow the prompt, type your input and see your solution!

