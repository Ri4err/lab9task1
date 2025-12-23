function delay(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function func1()
{
  await delay(5000);
  console.log("Функция выводит этот текст через 5 секунд");
}

func1();

const a=10; 
const b=5;
async function func2(a,b)
{
  await delay(10000);
  let sum=a+b;
  console.log("Данная функция находит сумму через 10 секунд, которая = ", sum);
}

func2(a,b);

async function func3()
{
  const word="Привет";
  await delay(15000);
  console.log("Данная функция содержит слово под названием ", word);
}

func3();

async function getPostTitles() 
{
  await delay(16000);
  console.log("Вывод с JSON:");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  posts.forEach(post => 
  {
    console.log(post.title);
  });
}

getPostTitles();


async function getCurrencyRates() 
{
  const response = await fetch("belarusbank.by/ru/33139/forDevelopers");
  const data = await response.json();

  const ratesDiv = document.getElementById("rates");
  ratesDiv.innerHTML = "";

  data.forEach(item => {
    if (item.USD_in && item.EUR_in && item.RUB_in) {
      ratesDiv.innerHTML += `
        <p>
          <strong>${item.name}</strong><br>
          USD: ${item.USD_in} / ${item.USD_out}<br>
          EUR: ${item.EUR_in} / ${item.EUR_out}<br>
          RUB: ${item.RUB_in} / ${item.RUB_out}
        </p>
        <hr>
      `;
    }
  });
}

getCurrencyRates();
