const container = document.createElement("div"); 
// container.innerHTML = "Hello World"; 
container.classList.add("container"); 

// TITLE FOR THE CONTAINER 
const heading  = document.createElement("h1");
heading.innerHTML = "SENTENCE COUNTER"; 
heading.classList.add("heading-title")
container.appendChild(heading)

// Output box 
const outputBox = document.createElement("div"); 
outputBox.classList.add("output-box");
container.appendChild(outputBox); 

// Count the Character
const characters = document.createElement("div"); 
const charatersTitle = document.createElement("span"); 
const countCharacters = document.createElement("p")
charatersTitle.innerHTML = "Characters"; 
countCharacters.innerHTML = 0; 

// add Class characters element
characters.classList.add('output');
charatersTitle.classList.add("output-title"); 
countCharacters.classList.add("counter")

// insert the children into their parent under Characters
characters.appendChild(charatersTitle);
characters.appendChild(countCharacters)
outputBox.appendChild(characters);


// Count the Word (Create the Element)
const words = document.createElement("div");
const wordsTitle = document.createElement("span"); 
const wordsCount = document.createElement("p")
wordsTitle.innerHTML = "Words"; 
wordsCount.innerHTML = 0; 

// add Class words element
words.classList.add('output');
wordsTitle.classList.add("output-title"); 
wordsCount.classList.add("counter")

// insert the children into their parent under words
words.appendChild(wordsTitle);
words.appendChild(wordsCount)
outputBox.appendChild(words);




// Count the sentence (Create the Element)
const sentences = document.createElement("div");
const sentencesTitle = document.createElement("span"); 
const sentencesCount = document.createElement("p")
sentencesTitle.innerHTML = "Sentences"; 
sentencesCount.innerHTML = 0; 

// add Class words element
sentences.classList.add('output');
sentencesTitle.classList.add("output-title"); 
sentencesCount.classList.add("counter")

// insert the children into their parent under Sentences
sentences.appendChild(sentencesTitle);
sentences.appendChild(sentencesCount)
outputBox.appendChild(sentences);



// Count the sentence (Create the Element)
const paragraphs = document.createElement("div");
const paragraphsTitle = document.createElement("span"); 
const countParagraphs = document.createElement("p")
paragraphsTitle.innerHTML = "Paragraphs"; 
countParagraphs.innerHTML = 0; 

// add Class words element
paragraphs.classList.add('output');
paragraphsTitle.classList.add("output-title"); 
countParagraphs.classList.add("counter")

// insert the children into their parent under Paragraphs
paragraphs.appendChild(paragraphsTitle);
paragraphs.appendChild(countParagraphs)
outputBox.appendChild(paragraphs);



document.body.appendChild(container)