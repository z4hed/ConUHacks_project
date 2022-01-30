

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
var i = 0;

function switch_right()
{   
    //Main Info
    const s_name = o_Stock_List[i].name;
    const s_market_temp = o_Stock_List[i].market_temp; 

    const card_title = document.querySelector('#stock_title');
    const card_temp = document.querySelector('#stock_description_1');
    event.preventDefault();
    card_title.innerHTML = s_name;
    card_temp.innerHTML = s_market_temp;
    
    
    //Charts Info
    chart_link.setAttribute('href',"https://www.google.com/search?q="+o_Stock_List[0].name+"+"+"Stocks")

    
}

//toDo
function switch_left()
{
    const s_name = o_Stock_List[--i].name;
    const s_market_temp = o_Stock_List[--i].market_temp;

    const card_title = document.querySelector('#stock_title')
    event.preventDefault();
    card_title.innerText = s_name;
}

//News info
const newsList= document.querySelector('.news-list')

function retreive(e){

    newsList.innerHTML = '';
    const apiKey = '0a73adc839c64b13b9e7aa791f23a769'
    let topic = o_Stock_List[i].name + " Stocks"
    let url = "https://newsapi.org/v2/everything?q="+topic+"&apiKey="+apiKey

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
        data.articles.forEach(article => {
            let li = document.createElement('div')
            let a = document.createElement('a')
            let p = document.createElement('p')
            a.setAttribute('href', article.url)
            a.setAttribute('target', '_blank')
            a.setAttribute('class',"text-light" )
            p.setAttribute('class',"text-light" )
            a.textContent = article.title;
            p.innerHTML = article.description.italics();
            li.setAttribute('class',"bg-dark p-5 mb-3")

            li.appendChild(a)
            li.appendChild(p)
            newsList.appendChild(li)
        });
    })
    
}



btn_left.addEventListener('click',switch_left)
btn_left.addEventListener('click',retreive)
btn_right.addEventListener('click',switch_right)
btn_right.addEventListener('click',retreive)
