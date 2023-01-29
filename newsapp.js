function selectcategory(){
    category1=cat.value;
    fetch(`https://newsdata.io/api/1/news?apikey=pub_16190e788266bdd674606570f1f82c80d53bd&country=in&language=en&category=${category1}`).then(data=>data.json()).then(data=>displaydata(data))
}
function displaydata(data){
    title1=data.results[0].title
    link1=data.results[0].link
    pub1=data.results[0].pubDate
    // country1=data.results[0].country
    title2=data.results[1].title
    link2=data.results[1].link
    pub2=data.results[1].pubDate
    // country2=data.results[1].country
    title3=data.results[2].title
    link3=data.results[2].link
    pub3=data.results[2].pubDate

    title4=data.results[3].title
    link4=data.results[3].link
    pub4=data.results[3].pubDate

    title5=data.results[4].title
    link5=data.results[4].link
    pub5=data.results[4].pubDate
resultpublish.innerHTML=`
<h3 class="mt-2 " style="font-family: 'Josefin Sans', sans-serif;">${category1} News</h3>
            <li class="text-start m-2 mt-3">
            <span style=" font-family: 'Aboreto', cursive;"> ${pub1}</span> <br>
               <span style="font-family: 'EB Garamond', serif;">${title1}</span>
                <a href="${link1}"style="text-decoration: none; color:grey;font-family: 'EB Garamond', serif;"> read more</a>
            </li>
            <li class="text-start m-2">
            <span style=" font-family: 'Aboreto', cursive;"> ${pub2}</span> <br>
                <span style="font-family: 'EB Garamond', serif;">${title2}</span>
                <a href="${link2}"style="text-decoration: none; color:grey;font-family: 'EB Garamond', serif;"> read more</a>
            </li>
            <li class="text-start m-2 mt-3">
            <span style=" font-family: 'Aboreto', cursive;"> ${pub3}</span> <br>
                <span style="font-family: 'EB Garamond', serif;"> ${title3}</span>
                <a href="${link3}"style="text-decoration: none; color:grey;font-family: 'EB Garamond', serif;"> read more</a>
            </li>
            <li class="text-start m-2">
            <span style=" font-family: 'Aboreto', cursive;"> ${pub4}</span> <br>
                <span style="font-family: 'EB Garamond', serif;">${title4}</span>
                <a href="${link4}"style="text-decoration: none; color:grey;font-family: 'EB Garamond', serif;"> read more</a>
            </li>
            <li class="text-start m-2">
            <span style=" font-family: 'Aboreto', cursive;">${pub5} <br></span>
            <span style="font-family: 'EB Garamond', serif;"> ${title5}</span>
            <a href="${link5}" style="text-decoration: none; color:grey;font-family: 'EB Garamond', serif;"> read more</a>
        </li>
            


`
}