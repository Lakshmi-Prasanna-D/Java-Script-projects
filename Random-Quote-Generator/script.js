const Quotes=[
    "If you are going through hell, keep going.",
    "Strive not to be a success, but rather to be of value." ,
    "The swiftest way to triple your success is to double your investment in personal development.",
    "I am a great believer in luck, and I find the harder I work the more I have of it.",
    "Do the best you can until you know better. Then when you know better, do better.",
    "What you do makes a difference, and you have to decide what kind of difference you want to make",
    "Change is made of choices, and choices are made of character.",
    "Change is the law of life and those who look only to the past or present are certain to miss the future",
    "Tradition is nothing but ancestral peer pressure."
]

const usedIndex=new Set()
const quoteElement=document.getElementById("quotes");
function GenerateQuote()
{
  if(usedIndex.size < Quotes.length){
  while(true){
    const idx=Math.floor(Math.random()*Quotes.length)
    if(usedIndex.has(idx)) continue

     const quote=Quotes[idx]
     quoteElement.innerHTML=quote;
     usedIndex.add(idx)
      break;
  }}
}