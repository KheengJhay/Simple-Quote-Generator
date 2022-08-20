// Simple Quotes Generator 
// The Quotes Variable
var quotes = [
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "It is during our darkest moments that we must focus to see the light.",
    "Whoever is happy will make others happy too.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Whoever is happy will make others happy too.",
    "You will face many defeats in life, but never let yourself be defeated.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Never let the fear of striking out keep you from playing the game.",
    "Life is either a daring adventure or nothing at all.",
    "If life were predictable it would cease to be life and be without flavor.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Life is a succession of lessons which must be lived to be understood.",
    "Never let the fear of striking out keep you from playing the game.",
    "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    "The only impossible journey is the one you never begin.",
    "Only a life lived for others is a life worthwhile.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "You only live once, but if you do it right, once is enough.",
    "Live in the sunshine, swim the sea, drink the wild air.",
    "Go confidently in the direction of your dreams! Live the life you've imagined.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is really simple, but we insist on making it complicated.",
    "May you live all the days of your life.",
    "Life itself is the most wonderful fairy tale",
    "Do not let making a living prevent you from making a life.",
    "Life is ours to be spent, not to be saved.",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    "Life is a long lesson in humility.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Love the life you live. Live the life you love.",
    "Life is either a daring adventure or nothing at all.",
    "Life is made of ever so many partings welded together.",
    "Life is trying things to see if they work",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    "Life is a long lesson in humility.",
    "Love the life you live. Live the life you love.",
    "Life is either a daring adventure or nothing at all.",
    "Life is made of ever so many partings welded together.",
    "The way to get started is to quit talking and begin doing.",
    "If you really look closely, most overnight successes took a long time.",
    "I find that the harder I work, the more luck I seem to have.",
];
// Select Random Quotes from 50 possible options and stores in the Variable "randomQuotes"
var randomQuotes = quotes[(Math.floor(Math.random() * 50))]
// Calls id="quote" from the HTML file
var displayRandomQuotes = document.getElementById("quote")
// Modifies the element having quotes as an id to display the Variable "randomQuotes" 
function displayRandomQuotesFunction() {
    displayRandomQuotes.innerHTML = randomQuotes
} 
// Refreshes the webpage
function refresh() {
    location.reload()
}