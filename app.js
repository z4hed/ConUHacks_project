

//                 ------------------SORTING & INPUTTING--------------------
//stock data
const stock = {
    name:"AAPL",
    polarity:"-1",
    datePublished: "",
    subjectivity: "",
    market_temp:"Bearish"//bullish, neutral, bearish
};


//unordered stock list
const uo_Stock_List = [];

//ordered stock data
const o_Stock_List = [];
o_Stock_List.push(stock);


//                  ------------------Internal Mechanics---------------
const btn_left = document.querySelector('#left_button');
const btn_right = document.querySelector('#right_button');
var chart_link = document.getElementById('Chart_Search');


function switch_right()
{   
    //Main Info
    const s_name = o_Stock_List[0].name;
    const s_market_temp = o_Stock_List[0].market_temp; 

    const card_title = document.querySelector('#stock_title');
    const card_temp = document.querySelector('#stock_description_1');
    event.preventDefault();
    card_title.innerHTML = s_name;
    card_temp.innerHTML = s_market_temp;
    
    
    //Charts Info
    chart_link.setAttribute('href',"https://www.google.com/search?q="+o_Stock_List[0].name+"+"+"Stocks")

    
}

function switch_left()
{
    const s_name = o_Stock_List[0].name;
    const s_market_temp = o_Stock_List[0].market_temp;

    const card_title = document.querySelector('#stock_title')
    event.preventDefault();
    card_title.innerText = s_name;
}

//News info
const newsList= document.querySelector('.news-list')

function retreive(e){

    const apiKey = '0a73adc839c64b13b9e7aa791f23a769'
    let topic = o_Stock_List[0].name + " Stocks"
    let url = "https://newsapi.org/v2/everything?q="+topic+"&apiKey="+apiKey

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
        data.articles.forEach(article => {
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.setAttribute('href', article.url)
            a.setAttribute('target', '_blank')
            a.textContent = article.title;

            li.appendChild(a)
            newsList.appendChild(li)
        });
    })
    
}



btn_left.addEventListener('click',switch_left)
btn_right.addEventListener('click',switch_right)
btn_right.addEventListener('click',retreive)
