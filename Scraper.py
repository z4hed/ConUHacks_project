import requests
import bs4 as BeautifulSoup
import praw
import pandas as pd
import datetime

endpoint = "https://finviz.com/quote.ashx?t=IMPP"
reddit  = praw.Reddit(client_id="WOOZDWaJgH2zHVlzqkFLXA",client_secret='s6ZcIqgBbHVKEqASQC-Cg5d5bi_vfg',user_agent='hackathon')
subreddits = ["investing","wallstreetbets",'stocks']

ymbols = pd.read_csv('../input/ticker-name/nasdaq_screener_1643499145370.csv')
symbols.head()
symbols = symbols.drop(symbols[symbols['Market Cap'] < 80000000000].index)
def listOfTuples(l1, l2):
    return list(map(lambda x, y:(x,y), l1, l2))
SymbolName = listOfTuples(symbols['Name'],symbols['Symbol'])

print(len(SymbolName))

import time
currenttimeStamp = time.time()
posts = []
for symbol in SymbolName:
        i = 0
        for submission in reddit.subreddit("all").search(symbol[1],limit=100):
            if((symbol[0] in submission.title or symbol[0] in submission.selftext) or (symbol[1] in submission.title or symbol[1] in submission.selftext)):
                if currenttimeStamp - float(submission.created_utc) < 86400:
                    posts.append([symbol[0],symbol[1],submission.title,submission.selftext,submission.created_utc])
                    if i % 50 == 0:
                        print(symbol[1])
                        
dataFrame.shape
dataFrame = pd.DataFrame(posts,columns=['name','symbol','title','description','time'])
DataFrame.to_csv('../input/fdfsds', mode='a', index=False, header=Fal)
dataFrame.shape
