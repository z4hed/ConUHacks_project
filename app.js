

//                 ------------------SORTING & INPUTTING--------------------

//stock data
/*
var stock_inp = {
    name:"",
    polarity_perc:[],//polarity pecentage
    market_temp:""//bullish, neutral, bearish
};
*/
//unordered stock list

/*
async function get_data()
{   
    var uo_Stock_List_i = [];
    const response = await fetch('data.csv');
    const data = await response.text();
    const row = data.split(/\n/).slice(1);
    let previous = "";
    let yeet = {name:"",pos:"",neg:"",newt:""};
    
    
    for(let a = 0; a < row.length;a++)
    {   
        
        const stock_info = row[a].split(',');
        if(stock_info[1] != previous)//if next 
        {   
            yeet = {
                name: previous
            };

            uo_Stock_List_i.push(yeet);
            yeet.name = stock_info[1];
            yeet.pos = 0;
            yeet.neg = 0;
            yeet.newt = 0;
            previous = stock_info[1];
            
            
        }
        if(stock_info[2] == 1.0){
            yeet.pos++;
        }
        if(stock_info[3] == 1.0){
            yeet.neg++;
        }
        if(stock_info[4] == 1.0){
            yeet.newt++;
        }
    }

    console.log(uo_Stock_List_i)
    return uo_Stock_List_i;
}
*/

//get_data() --> copying the values from the console -- Asynchronous functions because bugging out

let uo_Stock_List = [ {name: 'AAPL', pos: 17, neg: 3, newt: 8},
 {name: 'ABBV', pos: 5, neg: 3, newt: 0},
 {name: 'ABNB', pos: 5, neg: 2, newt: 6},
 {name: 'ACN', pos: 2, neg: 3, newt: 2},
 {name: 'ADBE', pos: 1, neg: 0, newt: 0},
 {name: 'ADI', pos: 1, neg: 0, newt: 0},
 {name: 'ADP', pos: 11, neg: 10, newt: 7},
 {name: 'AKO/A', pos: 0, neg: 0, newt: 1},
 {name: 'AKO/B', pos: 0, neg: 0, newt: 1},
 {name: 'AMAT', pos: 1, neg: 1, newt: 0},
 {name: 'AMD', pos: 1, neg: 0, newt: 2},
 {name: 'AMGN', pos: 2, neg: 1, newt: 2},
 {name: 'AMT', pos: 6, neg: 1, newt: 0},
 {name: 'AMZN', pos: 13, neg: 2, newt: 6},
{name: 'ANTM', pos: 13, neg: 3, newt: 5},
 {name: 'AREB', pos: 1, neg: 0, newt: 1},
 {name: 'ASML', pos: 8, neg: 1, newt: 8},
 {name: 'AVGO', pos: 2, neg: 0, newt: 3},
 {name: 'AXP', pos: 5, neg: 2, newt: 3},
 {name: 'AZN', pos: 0, neg: 0, newt: 7},
 {name: 'BA', pos: 1, neg: 0, newt: 2},
 {name: 'BABA', pos: 5, neg: 0, newt: 0},
 {name: 'BAC', pos: 5, neg: 0, newt: 4},
 {name: 'BAM', pos: 1, neg: 1, newt: 0},
 {name: 'BBL', pos: 5, neg: 2, newt: 2},
 {name: 'BHP', pos: 5, neg: 3, newt: 4},
 {name: 'BKNG', pos: 2, neg: 1, newt: 1},
 {name: 'BLK', pos: 1, neg: 5, newt: 2},
 {name: 'BMY', pos: 2, neg: 0, newt: 2},
 {name: 'BNS', pos: 2, neg: 1, newt: 0},
 {name: 'BP', pos: 5, neg: 4, newt: 2},
 {name: 'BTI', pos: 5, neg: 2, newt: 4},
 {name: 'BX', pos: 3, neg: 2, newt: 2},
 {name: 'C', pos: 8, neg: 0, newt: 2},
 {name: 'CB', pos: 7, neg: 1, newt: 10},
 {name: 'CME', pos: 11, neg: 3, newt: 5},
 {name: 'CNI', pos: 0, neg: 0, newt: 1},
 {name: 'COST', pos: 0, neg: 0, newt: 1},
 {name: 'CRM', pos: 16, neg: 5, newt: 12},
 {name: 'CSCO', pos: 1, neg: 0, newt: 0},
 {name: 'CVS', pos: 1, neg: 3, newt: 4},
 {name: 'CVX', pos: 8, neg: 5, newt: 3},
 {name: 'CX', pos: 3, neg: 0, newt: 4},
 {name: 'DE', pos: 1, neg: 1, newt: 1},
 {name: 'DHR', pos: 4, neg: 1, newt: 2},
 {name: 'DIS', pos: 2, neg: 0, newt: 2},
 {name: 'DUK', pos: 4, neg: 2, newt: 0},
 {name: 'EL', pos: 1, neg: 1, newt: 0},
 {name: 'ENB', pos: 8, neg: 3, newt: 4},
 {name: 'EQNR', pos: 1, neg: 0, newt: 0},
 {name: 'FB', pos: 1, neg: 1, newt: 4},
 {name: 'GE', pos: 6, neg: 1, newt: 4},
 {name: 'GOOG', pos: 4, neg: 1, newt: 2},
 {name: 'GOOGL', pos: 8, neg: 3, newt: 4},
 {name: 'GS', pos: 3, neg: 1, newt: 3},
 {name: ' GS', pos: 2, neg: 2, newt: 1},
 {name: 'GS', pos: 3, neg: 3, newt: 2},
 {name: 'GSK', pos: 14, neg: 4, newt: 9},
 {name: 'HD', pos: 17, neg: 2, newt: 2},
 {name: 'HDB', pos: 8, neg: 4, newt: 8},
 {name: 'HON', pos: 1, neg: 2, newt: 0},
 {name: 'HSBC', pos: 7, neg: 3, newt: 14},
 {name: 'IBM', pos: 4, neg: 1, newt: 1},
 {name: 'IDAI', pos: 0, neg: 0, newt: 1},
 {name: 'INFY', pos: 0, neg: 0, newt: 1},
 {name: 'INTC', pos: 15, neg: 8, newt: 3},
 {name: 'ISRG', pos: 3, neg: 0, newt: 0},
 {name: 'JD', pos: 12, neg: 1, newt: 3},
 {name: 'JNJ', pos: 3, neg: 1, newt: 5},
 {name: 'JPM', pos: 7, neg: 1, newt: 9},
 {name: 'KO', pos: 3, neg: 2, newt: 7},
 {name: 'LLY', pos: 0, neg: 0, newt: 1},
 {name: 'LMT', pos: 6, neg: 1, newt: 4},
 {name: 'MA', pos: 3, neg: 0, newt: 2},
 {name: 'MCD', pos: 1, neg: 0, newt: 0},
 {name: 'MDLZ', pos: 0, neg: 0, newt: 1},
 {name: 'MDT', pos: 16, neg: 7, newt: 10},
    {name: 'MMM', pos: 2, neg: 0, newt: 0},
    {name: 'MO', pos: 3, neg: 0, newt: 1},
 {name: 'MODD', pos: 2, neg: 0, newt: 2},
 {name: 'MRK', pos: 4, neg: 1, newt: 1},
 {name: 'MS', pos: 2, neg: 0, newt: 3},
 {name: 'MSFT', pos: 10, neg: 1, newt: 8},
 {name: 'MU', pos: 1, neg: 0, newt: 0},
 {name: 'NFLX', pos: 11, neg: 2, newt: 5},
 {name: 'NKE', pos: 10, neg: 1, newt: 1},
 {name: 'NOW', pos: 1, neg: 0, newt: 2},
 {name: 'NTES', pos: 3, neg: 0, newt: 2},
 {name: 'NVDA', pos: 19, neg: 4, newt: 4},
 {name: 'NVS', pos: 2, neg: 3, newt: 3},
 {name: 'ORCL', pos: 1, neg: 1, newt: 4},
 {name: 'PBR', pos: 1, neg: 1, newt: 2},
 {name: 'PEP', pos: 1, neg: 0, newt: 2},
 {name: 'PFE', pos: 4, neg: 3, newt: 5},
 {name: 'PG', pos: 8, neg: 1, newt: 7},
 {name: 'PLD', pos: 10, neg: 4, newt: 6},
 {name: 'PM', pos: 7, neg: 20, newt: 4},
 {name: 'PNC', pos: 19, neg: 5, newt: 8},
 {name: 'PTR', pos: 9, neg: 6, newt: 9},
 {name: 'PYPL', pos: 11, neg: 7, newt: 11},
 {name: 'QCOM', pos: 4, neg: 0, newt: 3},
 {name: 'RIO', pos: 0, neg: 0, newt: 1},
 {name: 'RTX', pos: 4, neg: 0, newt: 4},
 {name: 'RY', pos: 0, neg: 0, newt: 1},
 {name: 'SAP', pos: 5, neg: 0, newt: 1},
 {name: 'SBUX', pos: 5, neg: 0, newt: 3},
 {name: 'SCHW', pos: 1, neg: 1, newt: 0},
 {name: 'SHOP', pos: 1, neg: 0, newt: 0},
 {name: 'SNY', pos: 1, neg: 1, newt: 1},
 {name: 'SOND', pos: 0, neg: 1, newt: 0},
 {name: 'SYK', pos: 0, neg: 1, newt: 0},
 {name: 'T', pos: 3, neg: 1, newt: 3},
 {name: 'TCN', pos: 17, neg: 1, newt: 16},
 {name: 'TD', pos: 2, neg: 1, newt: 3},
 {name: 'TEAM', pos: 0, neg: 1, newt: 0},
 {name: 'TFC', pos: 3, neg: 2, newt: 1},
 {name: 'TGT', pos: 13, neg: 0, newt: 2},
 {name: 'TJX', pos: 7, neg: 2, newt: 8},
 {name: 'TM', pos: 0, neg: 0, newt: 1},
 {name: ' TM', pos: 0, neg: 0, newt: 1},
 {name: 'TM', pos: 4, neg: 1, newt: 6},
 {name: 'TMO', pos: 13, neg: 3, newt: 14},
 {name: 'TMUS', pos: 0, neg: 0, newt: 1},
 {name: 'TSLA', pos: 34, neg: 0, newt: 6},
 {name: 'TSM', pos: 17, neg: 0, newt: 6},
 {name: 'TTE', pos: 1, neg: 1, newt: 2},
 {name: 'TXN', pos: 1, neg: 0, newt: 1},
 {name: 'UL', pos: 9, neg: 3, newt: 0},
 {name: 'UNH', pos: 9, neg: 1, newt: 4},
 {name: 'UNP', pos: 6, neg: 0, newt: 3},
 {name: 'USB', pos: 3, neg: 0, newt: 2},
 {name: 'V', pos: 3, neg: 3, newt: 9},
 {name: 'VZ', pos: 6, neg: 3, newt: 3},
 {name: 'WFC', pos: 3, neg: 2, newt: 4},
 {name: 'WMT', pos: 9, neg: 2, newt: 8},
 {name: 'XOM', pos: 8, neg: 1, newt: 4}
]

function compare(a1,a2)
{
    if ( a1.pos < a2.pos ){
        return -1;
      }
      if ( a1.pos > a2.pos ){
        return 1;
      }
      return 0;
}

uo_Stock_List.sort(compare);


//                  ------------------Internal Mechanics---------------
const btn_left = document.querySelector('#left_button');
const btn_right = document.querySelector('#right_button');
var chart_link = document.getElementById('Chart_Search');
var i = 0;



//right and left buttons
function switch_right()
{   
    //Main Info
    const s_name = uo_Stock_List[++i].name;
    const s_market_temp = uo_Stock_List[i].market_temp; 

    const card_title = document.querySelector('#stock_title');
    const card_temp = document.querySelector('#stock_description_1');
    
    card_title.innerHTML = s_name;
    card_temp.innerHTML = s_market_temp;
    
    event.preventDefault();
    //Charts Info
    chart_link.setAttribute('href',"https://www.google.com/search?q="+uo_Stock_List[0].name+"+"+"Stocks")
    
    new TradingView.widget(
        {
        "width": 432,
        "height": 270,
        "symbol": "NASDAQ:"+uo_Stock_List[i].name,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_49aa9"
      }
        );
}

//toDo

function switch_left()
{   
    if(i-1 >= 0)
    {return;}
   //Main Info
   
   const s_name = uo_Stock_List[i].name;
   const s_market_temp = uo_Stock_List[i]; 

   const card_title = document.querySelector('#stock_title');
   const card_temp = document.querySelector('#stock_description_1');
   event.preventDefault()
   card_title.innerHTML = s_name;
   card_temp.innerHTML = s_market_temp;
   
   
   //Charts Info
   chart_link.setAttribute('href',"https://www.google.com/search?q="+uo_Stock_List[i].name+"+"+"Stocks")
}

//News info
const newsList= document.querySelector('.news-list')

function retreive(e){

    newsList.innerHTML = '';
    const apiKey = '0a73adc839c64b13b9e7aa791f23a769'
    let topic = uo_Stock_List[i].name + " Stocks"
    let url = "https://newsapi.org/v2/everything?q="+topic+"&apiKey="+apiKey;

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






new TradingView.widget(
    {
    "width": 432,
    "height": 270,
    "symbol": "NASDAQ:"+uo_Stock_List[i].name,
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_49aa9"
  }
    );
    

    btn_left.addEventListener('click',switch_left)
    btn_left.addEventListener('click',retreive)


btn_right.addEventListener('click',switch_right)
btn_right.addEventListener('click',retreive)

