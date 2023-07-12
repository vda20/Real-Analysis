var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "       copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "How is this course different from Calculus?",
  "body": " How is this course different from Calculus?  A large portion of this course will consist in studying real numbers, functions of a real variable, continuity, limits, derivatives and integrals. So what is the difference with the Calculus course? An example will be useful to explain the difference. Suppose Jasmine has just taken the Calculus course, and she is helping Kevin with this problem: If , find . Jasmine solves the problem and gets the right answer: using the power rule, she finds that . This is what she learned in the Calculus course.  But suppose now Kevin asks: \"But what does stand for?\". Jasmine will probably answer: \"It's the derivative of \". This is correct, but it really doesn't explain what it is, it just says what its name is. If Kevin is curious he will want to know what the derivative is all about and why we are so interested in it. Depending on how well Jasmine learned the Calculus material, she may be able to explain that the derivative is the limit as goes to zero of the difference quotient , and it represents the slope of the tangent line to the graph of . But if Kevin were to press her with the next natural question: \"but what is a limit? And what is a tangent line?\", she would not be able to give a precise answer. And almost surely, she will not be able to explain why the derivative of is . Because in the Calculus course much of the focus is on how to use some rules, without worrying where they come from.  In Real Analysis, we will give a very precise meaning to all notions we meet. So it is not enough to say that is a number that gets closer and closer to when gets closer and closer to . Instead, we will give a precise definition that uses only notions to which we can already give a precise meaning. In the example of the limit, the notion of \"closer and closer\" commonly used in the Calculus course is not clear at all. We may have an intuitive idea, but what precisely do we mean by \"closer and closer\"?  The other important difference with the Calculus course is that it is not enough to say that the derivative of is because that's what the power rule says. We want to know why the power rule is true. In other words, we want to have a proof of all statements we make.  So most of the difference between the Calculus course and the Real Analysis course is that we will give very precise definitions, and provide proofs for the statements made. This brings us to an important discussion. You will find a number of courses that are listed as prerequisites for this course, such as the Calculus sequence and the Discrete math course. While it will of course be helpful to be already familiar with limits, derivatives and integrals (that you studied in Calculus), in reality we will study all those notions again from scratch and more in depth, without assuming any prior knowledge. But we will need to formulate very precise definitions and provide proofs of the statements. To this end, the Discrete course is a more essential prerequisite. You have been introduced to proofs in that course. In this course we will see how to apply the skills and techniques for writing proofs to gain a real understanding of the various notions contained in the Calculus course, and just as importantly, to understand why all the rules and the theorems are true.  "
},
{
  "id": "p-3",
  "level": "2",
  "url": "section-title.html#p-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definition "
},
{
  "id": "p-4",
  "level": "2",
  "url": "section-title.html#p-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "The various types of numbers",
  "body": "The various types of numbers  We assume knowledge of the natural numbers : the integers : the rational numbers :   The natural numbers (sometimes also called positive integers ) can be added and multiplied. The number 1 is rather special for two reasons: it's the smallest of all, and it has the nice property that for all natural numbers . The natural numbers cannot always be subtracted, for example and are natural numbers, but is not.  The integers can be added, multiplied and subtracted. Beside 1, they have another special element, , that has the property that for all integers . They cannot always be divided. For example, and are integers, but is not.  The rational numbers can be added, multiplied, subtracted, and divided (with the only exception that we cannot divide by ). So we can do all the usual operations of arithemtic and algebra with the rational numbers. We say that they form a field , a concept that we will describe more precisely in the next chapter.  So we can do all four operations with the rational numbers. But there is still something missing, and it is not something abstract, but actually quite practical. Suppose we want to build a fence for a field (as in a corn or strawberry field, not the math concept of field of the previous paragraph!) so that it will be a square of area square feet. Because the area of a square of side is , this means that we need to solve the equation , and the answer is .  So being able to find the square root of a positive number is of practical use. But already the ancient Greeks, in the 5th century BC, discovered that, for example, there can be no rational number whose square is . In other words, cannot be a rational number (we will soon see a proof of this fact). This means that we need to go beyond the rational numbers, and consider a larger set of numbers, called the Real numbers. These are the numbers that give the name \"Real Analysis\" to this course.  "
},
{
  "id": "p-6",
  "level": "2",
  "url": "section-2.html#p-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers integers rational numbers "
},
{
  "id": "p-7",
  "level": "2",
  "url": "section-2.html#p-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive integers "
},
{
  "id": "p-9",
  "level": "2",
  "url": "section-2.html#p-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "field "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Logic and set theory",
  "body": " Logic and set theory  Unfortunately mathematics in school is often taught as a collection of rules and skills that allow students to solve problems, such as equations, graphing problems, simplification of algebraic expressions, or complex calculations. Discussions on the meaning of the concepts involved and the reason why the rules and techniques work are often neglected. This course will be based on definitions , that precisely introduce and describe a new concept, statements (also called theorems, or lemmas, or propositions) based on these definitions, and proofs of the statements. We will now discuss a little each of these notions.  As mentioned in the previous section, we need to be precise when making definitions, and we should only use concepts that have already been previously defined. But we need to start somewhere. There are notions that must be treated as understood, without appealing to any other previously defined concepts. Basic examples of these notions are those of set Actually, in a more advanced treatment, the primitive, undefined notion is called a class and a set is defined to be a class with some desirable properties. See this discussion if you are interestd in the difference between classes and sets. But we will consider a set a primitive notion. and membership . A set is a collection of elements. An element is a member of a set (or it belongs to it, or is contained in it) if it is one of the elements that make up the set. These notions are primitive, in the sense that they cannot be explained or defined in terms of other notions. We need to start from here. We will use curly braces to represent what a set contains, as we have already done in the notation for , and in the previous section.  In this course, the natural number, integers and rational numbers will also be considered as already defined Again, this is not the case in more advanced treatments, where the natural numbers are defined purely in terms of sets (see this lecture for example), then the integers and rational numbers as derived concepts  . So , and are basic examples of sets. If is a set, we will use the notation to mean that is an element of , or that belongs to , and to mean that is not an element of . So for example and .  But how do we make other sets? Here logic, and other primitive notions, come into play. A statement is any sentence that must be either true or false. So \"5 is a natural number\" is a true statement, \"New York is the capital of the United States\" is a false statement. But \"Who are you?\" is not a statement because it makes no sense to ask if it is true or false, and \"onions taste good\" is not a statement because whether it is true or false depends on who we ask. We will often use symbols with special font, such as or , followed by a colon, to denote statements. So we could write : \"5 is a natural number\" or : \"New York is the capital of the United States\". If we write , it means that the statement depends on whatever may be. So for example : \" is a natural number less than 5\" is a statement that is true if is 1,2,3 or 4, but it is false otherwise. In this situation we call a variable . Of course a variable need not represent a number. We could consider the statement : \" is a student in this class\", and then represents a person.  A common and useful way to describe sets is the set builder notation . Suppose is a statement depending on some variable . We can then consider the set of all possible that will make true, and we denote it by . So if then The vertical bar in the expression is read such that . So we would read the expression as The set of all such that is true. Sometimes we may also include some information about before the vertical bar, and then we need less information in the statement . So we could write the above example as It is still the same set, .  Once we feel comfortable with the notion of a set and what it means for something to belong to it, we can define the basic set operations such as union and intersection . This gives us the opportunity to illustrate our first definition.    Let and be sets. The union of and is the set consisting of all elements that are either in or in , and it is denoted by . The intersection of and is the set consisting of all elements that are both in and in , and it is denoted by .    Note that the word \"or\" in math is used in a different way than it is used in ordinary language. In math, or means either , or , or both. So if is in , then could be in , or in , or in both and . Compare with the ordinay use of \"or\" in the sentence \"Would you like tea or coffee?\". In this sentence it is evident that the choice is understood to be between one or the other, not both.  Let's pause a moment to examine what the above definition of union and intersection does. First of all, it uses plain English. Then, it does two different things: it explains what the new concepts are, and it assigns a name to them. The assigned names are union and intersection . Then, it also introduces some notation in order to efficiently use the new concepts in writing. The notation introduced consists in the two symbols and that represent union and intersection, respectively. In summary, a definition often does three things: it explains the meaning of a new concept; it reserves a word or phrase to be used for it; and (sometimes) it also reserves a symbol to be used for it.  We stress the fact that plain English was used. This could have been done in a different way. We could have written the definition as follows:   Definition The union of and is the set defined by and the intersection of and is the set defined by   This second way to define union and intersection is perfectly good and correct. But, in this course we will prefer to use plain English language whenever possible, in definitions, in statements of theorems, and in proofs. This does not mean that we will not use symbols. On the contrary, symbols are very often essential to carry out complex proofs. But they should not be a substitute for words when the concept is more clearly explained or understood without them. Most people who have never heard of union and intersection will more easily understand their definition in the one with the words rather than in the one with the symbols. It is often useful, as an exercise, to express in words concepts presented using only symbols, and likewise to write in compact symbolic form statements that were made using only words.  Before we proceed with more definitions, we need to review some logic. If is a statement, we denote by its negation. So is true when is false, and is false when is true. For example, if : \" is an integer greater than 1\" then : \" is an integer less than or equal to 1\".  If and are statements, we can construct another statement, called an implication denoted by that is false only when  is true and is false. In all other cases it is true. We read this as \" implies \", or \"If , then .\" The logic is that we are thinking that if is true, then must also be true, or that follows from .  To understand why we say that the statement is always true except in the case that is true and is false, think of it as a promise. So suppose is the statement \"the New Orleans Saints win the game\" and is the statement \"Dustin will take Jasmine out to dinner\". Then is the promise that if the Saints win the game, Dustin will take Jasmine out to dinner. How can this promise be broken? Only if the Saints win, and yet Dustin does not take Jasmine out to dinner. In all other cases, the promise will not be broken. So if the Saints lose, the statement remains true for sure, whether or not Dustin takes Jasmine out to dinner, because there is no broken promise. This logical property of implications is sometimes referred to by saying that \"a false statement implies anything\".   means that and . In this case we say that and are equivalent . Here is an example from elementary Algebra. Suppose that is a rational number. Then In fact, all the steps involved in solving Algebra or Calculus problems are mostly sequences of equivalent statements of this type.  The negation of is often useful when writing proofs. It must be a statement that is true precisely when is false, and we know that this happens only when is true and is false. So we see that   Another useful logical equivalence is : To understand this using the same example as before, saying \"If the Saints win the game, Dustin takes Jasmine to dinner\" is the same as saying \"If Dustin doesn't take Jasmine to dinner, the Saints have lost the game\".  We will now give a few more especially important definitions. A complete treatment of set theory can be found in many freely avaialble online sources such as this textbook on Discrete Mathematics .   If and are sets, we say that is a subset of if every element of is also an element of , and in this case we write .   Note again how this definition provides three pieces of information: the explanation of a new concept, its name in English (subset) and the symbol used . We can make the same definition using only symbols: So we can write       "
},
{
  "id": "p-12",
  "level": "2",
  "url": "section-3.html#p-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definitions statements proofs "
},
{
  "id": "p-13",
  "level": "2",
  "url": "section-3.html#p-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set class membership "
},
{
  "id": "p-15",
  "level": "2",
  "url": "section-3.html#p-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "statement variable "
},
{
  "id": "p-16",
  "level": "2",
  "url": "section-3.html#p-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set builder notation "
},
{
  "id": "p-17",
  "level": "2",
  "url": "section-3.html#p-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "union intersection "
},
{
  "id": "def-",
  "level": "2",
  "url": "section-3.html#def-",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Let and be sets. The union of and is the set consisting of all elements that are either in or in , and it is denoted by . The intersection of and is the set consisting of all elements that are both in and in , and it is denoted by .   "
},
{
  "id": "p-20",
  "level": "2",
  "url": "section-3.html#p-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "union intersection "
},
{
  "id": "p-22",
  "level": "2",
  "url": "section-3.html#p-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "union intersection "
},
{
  "id": "p-25",
  "level": "2",
  "url": "section-3.html#p-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "implication "
},
{
  "id": "p-27",
  "level": "2",
  "url": "section-3.html#p-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "p-30",
  "level": "2",
  "url": "section-3.html#p-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subset "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-3.html#definition-3",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": " "
},
{
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Basic facts about the integers",
  "body": " Basic facts about the integers  The integers are the building blocks of mathematics and we will list here a few facts that will soon be needed.  An integer is even if it is twice another integer. Another way to say this is that is divisible by 2. So is even if where is anther integer. For example, 10 is even because it is twice 5.  An integer is odd if it is one more than twice another integer, which is the same as saying that it is not divisible by 2. So is odd if for some other integer . For example, 9 is odd because it is one more than twice 4. We could also say an odd integer is 1 less than twice another integer, or . So 9 is 1 less than twice 5.  So the positive even integers (or positive even natural numbers ) are the elements of the set   "
},
{
  "id": "p-34",
  "level": "2",
  "url": "section-4.html#p-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even divisible "
},
{
  "id": "p-35",
  "level": "2",
  "url": "section-4.html#p-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "odd "
},
{
  "id": "p-36",
  "level": "2",
  "url": "section-4.html#p-36",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive even integers positive even natural numbers "
},
{
  "id": "section-5",
  "level": "1",
  "url": "section-5.html",
  "type": "Section",
  "number": "1.5",
  "title": "Writing proofs",
  "body": "Writing proofs  The purpose of a proof in mathematics is to convince a reader (or a listener) that a certain statement is true. So, besides being correct, it must be understandable and as easy as possible to follow. Usually we are interested in proving that a statement of the form is true, where is statement containing all the assumptions and is a statement containing the conclusions . We will discuss four different types of proofs, with examples.   Direct proofs  In this type of proof, if we want to prove that is true, we derive logical consequences from the assumptions contained in until we reach the conclusion that is true.   Prove that if is an even integer, then is divisible by 6.  In this problem, the given assumptions consist in the statement the conclusion is the statement and we want to prove .  So we start deriving logical conclusions. is saying that is even, so we can write for some integer . Then . But this means that is divisible by 6. So we conclude that is true.   > "
},
{
  "id": "p-37",
  "level": "2",
  "url": "section-5.html#p-37",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "assumptions conclusions "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-5.html#example-1",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": " Prove that if is an even integer, then is divisible by 6.  In this problem, the given assumptions consist in the statement the conclusion is the statement and we want to prove .  So we start deriving logical conclusions. is saying that is even, so we can write for some integer . Then . But this means that is divisible by 6. So we conclude that is true.  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
