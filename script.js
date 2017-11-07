//create an array of interesting facts related to bathrooms
var facts = 
    [
        'Arthur Giblin is believed to have invented the first flushable toilet.',
        'Per the data collected by the World Toilet Organization, 1 billion people in the world defecate in the open.',
        'And as per a study, the more features your smart phone has, the longer you sit in the toilet.',
        'There are more TVs in Afghanistan than there are toilets. Interestingly, ninety percent of the population has TVs while only 7% has flush toilets.',
        'Did you know that you were flushing up to 26 liters of water in every single flush?',
        'You could easily find the cleanest toilet in a public place, if you remember that the first toilet cubicle in a row, is the least used and thus the cleanest of all.',
        'The World Toilet Organization was founded on 19 November 2001 and on this day every year World Toilet Day is celebrated.',
        'Be cautious! Accidents do happen in toilets. King George II even died falling off one in 1760. And nearly 40,000 Americans are injured in toilets every year.',
        'No one can avoid the call of nature. We happen to visit toilets about 2500 times a year and may be more when having a bad stomach during many times a year.',
        'Toilet paper is rumored to have been invented in China in the 6th century.',
        'Chinese have also built public toilets for dogs.',
        'To your surprise, bathroom is a reason for argument among 70% of the couples in the U.K.',
        'On an average babies change their nappy 10,000 times before they (babies) learn to use the bathroom themselves. Tough job for a single parent, isn&#39t it?',
        'The average kitchen chopping board has around 200% more fecal bacteria on it than a toilet seat.',
        'Germs from a flushing toilet can move ahead up to 6 feet. Every time you flush your toilet, germs get air lifted and can become a potential cause of infection. Therefore, it is advised to move out quickly once you flush the toilet.',
        'Originally, &#34toilet&#34 means, &#34act of washing, dressing, and preparing oneself&#34. This is derived from French.',
        'You may be surprised to learn that almost 20% of the people do not wash their hands after they visit toilet. And of those who do, only 30%, use soap to wash their hands.',
        'Over 7 million people in the U.S. have admitted to have dropped their cell phones in the toilet bowl. Isn&#39t it a valid reason for you not to carry your cell phone to the toilet?',
        'It might help you to know that mobiles phones have 18 times bacteria than the toilet handles.',
        'One may be prone to kidney and bladder diseases, if they suppress their urination just because the toilets at public places are not clean.',
        'Rigorous washing of hands with soap for about 15-20 seconds is recommended for killing harmful germs. However, only 5% people wash their hands for 15 seconds or more.',
        'Urea, a key chemical in your urine can kill fungi and bacteria.',
        'NASA recently spent $23.4 million for designing a suction toilet, which could be used in the International Space Station.',
        'Though this fact has nothing to do with toilets, you might be surprised to know that your TV remote can even kill you. It is the worst in terms of the bacteria it carries.',
        'The Scot Paper Company was the first to manufacture toilet paper on a roll, in 1890.',
        'According to the NIH, about four million Americans suffer from constipation.',
        'An important fact for the ladies: Urinary flow is usually stronger and easier when women squat to urinate. The bladder is emptied more completely when squatting rather than sitting or &#34hovering&#34.',
        'Prolonged sitting on the toilet seat can lead to hemorrhoids. Therefore, for avoiding health complications later in your life, avoid using your mobile phone or reading news paper while using the toilet. Such habits are a cause of hemorrhoids.',
        'The first underground sewer in the city of Rome was laid by the Etruscans around 500 BC.',
        'You may have to visit space if you want to see the most expensive toilet in the world. It is fitted in the International Space Station. It costs around 19 million dollars.',
        'Do you like the fragrance of the air freshener you use in your toilet? During the early days, pomegranates stuffed with cloves were used to make &#39the first ever toilet air freshener&#39.',
        'The oldest toilet is still functioning about 4000 years after it was built. It can be seen in Knossos in Greece in a small castle.',
        'Three out of four people put the flap in front, to stock the toilet paper in their toilet.',
        'Some common words used for the loo are: powder room, lavatory, outhouse, ladies, convenience, washroom, men&#39s room, bathroom, dunny, bog, khazi, gents, garderobe, necessary, women&#39s room, restroom, potty, privy, the smallest room, cloakroom, latrine, place of easement, water closet (WC), john, can, little girls&#39 room, little boys&#39 room, throne room and facilities etc.'
    ]

//initialized a variable to target my factBTN on my 'toServer.html' page
var factBTN = document.getElementById('factBTN');

//added an even listenter to my factBTN and used the number variable to cycle through my facts array.
factBTN.addEventListener('click', function() {
    var number = Math.floor(Math.random() * 34) + 1;
    document.getElementById('factDisplay').innerHTML = facts[number];
});

