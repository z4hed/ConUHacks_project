

//                 ------------------SORTING--------------------
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

function switch_right()
{   
    //Main Info
    const s_name = o_Stock_List[0].name;
    const s_market_temp = o_Stock_List[0].market_temp; 

    const card_title = document.querySelector('#stock_title');
    const card_temp = document.querySelector('#stock_description_1');
    event.preventDefault();
    card_title.innerText = s_name;
    card_temp.innerText = s_market_temp;

    //Charts Info


    //New info
    
}

function switch_left()
{
    const s_name = o_Stock_List[0].name;
    const s_market_temp = o_Stock_List[0].market_temp;

    const card_title = document.querySelector('#stock_title')
    event.preventDefault();
    card_title.innerText = s_name;
}


btn_left.addEventListener('click',switch_left)
btn_right.addEventListener('click',switch_right)