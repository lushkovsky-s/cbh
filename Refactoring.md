# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### Step 0. Tests
First, in order to keep the code out of risk during the refactoring procedure, we need to cover it with unit tests

The list of possible scenarios:
- No `event` parameter provided
- `event` parameter provided, but has no `partitionKey` 
- `event` parameter provided, has `partitionKey` which is a short string
- `event` parameter provided, has `partitionKey` which is a long (>256) string
- `event` parameter provided, has `partitionKey` which is a short non string value

### Step 1. Refactoring

First, let's wrap reusable code blocks:
- Stringify for non-string values
- Calculating of hash values

Next, let's rewrite if-else conditions as ternary operators (as anyway in the result we return some value depending on this if-else branches)

Also, it's better to get rid of `let` if possible (in our case yes). This will reduce the possible room for error in the future

(Optional) Move constants to function params. This will help us to customize the function usage in a future and reduce the amount of rebuilded code. BUT in case we want to restrict the other usecases (systems with strict modification policies), this refactoring step might be not a good idea

### Step 2. Visual 

(Optional) Code was limited by character count per line (depends on team codestyle)

### Future improvements

In order to further improve the code, we might add TypeScript to ensure all the types/arguments works properly. Also, this might be very helpful during the development process (autocomplete)
(Optional) Use import instead of require
